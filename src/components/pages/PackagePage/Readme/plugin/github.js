/* eslint-disable */
// script origin - https://github.com/npm/marky-markdown/blob/master/lib/plugin/github.js
// script modified

// markdown-it plugin to rewrite image and link URLs to be static github URLs
// when the calling code provides github repository information
//
import gh from 'github-url-to-object';

var DEFAULT_REF = 'HEAD';

function buildImageUrl(repository, url) {
  var prefix = 'https://raw.githubusercontent.com/';
  return prefix + [repository.user, repository.repo, DEFAULT_REF, url.href].join('/');
}

function buildLinkUrl(repository, url) {
  return repository.https_url + ['/blob/' + DEFAULT_REF + '/', url.href].join('');
}

// search the provided HTML snippet and rewrite the attribute on the given tag
// using the repository object provided
function replaceTagAttribute(html, tag, attribute, buildUrl, repository) {
  // look for the attribute's value
  var regex = new RegExp('<\\s*' + tag + '[^>]*\\b' + attribute + '\\s*=\\s*', 'i');
  var attr = html.match(regex);
  if (attr) {
    // mark the location and figure out what kind of quotation mark is delimiting the value
    var position = attr.index + attr[0].length;
    var quote = html.charAt(position);
    var substring = html.slice(position + 1);

    // now that we've found the first delimiting quotation mark, match
    // everything up to the next instance of the same quotation mark
    var src = substring.match(new RegExp('^[^' + quote + ']*'));
    if (src) {
      try {
        var url = new URL(src[0]);
        var newUrl = url.href;
        return (
          html.slice(0, attr.index) +
          attr[0] +
          quote +
          newUrl +
          quote +
          substring.slice(src[0].length + 1)
        );
      } catch {
        var url = { path: src[0], href: src[0] };
        // Skip fully-qualified URLs, #hash fragments, and protocol-relative URLs
        if (!url.host && url.path && !url.path.match(/^\/\//)) {
          var newUrl = buildUrl(repository, url);
          return (
            html.slice(0, attr.index) +
            attr[0] +
            quote +
            newUrl +
            quote +
            substring.slice(src[0].length + 1)
          );
        }
      }
    }
  }
  return false; // indicate that we did no replacement
}

export default function (md, opts) {
  if (!opts) return;
  if (!opts.package) return;
  if (!opts.package.repository) return;

  var repo = gh(opts.package.repository);

  if (!repo) return;

  // rewrite image locations to be fully qualified github URLs
  var originalImageRule = md.renderer.rules.image;
  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    var src = tokens[idx].attrGet('src');

    if (src && src.length) {
      var url = new URL(src);

      // Skip fully-qualified URLs, #hash fragments, and protocol-relative URLs
      if (!url.host && url.path && !url.path.match(/^\/\//)) {
        tokens[idx].attrSet('src', buildImageUrl(repo, url));
      }
    }
    return originalImageRule.call(this, tokens, idx, options, env, self);
  };

  // rewrite link hrefs to be fully qualified github URLs
  var originalLinkRule = md.renderer.rules.link_open;
  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    var href = tokens[idx].attrGet('href');

    if (href && href.length) {
      try {
        var url = new URL(href);

        // Skip fully-qualified URLs, #hash fragments, and protocol-relative URLs
        if (!url.host && url.path && !url.path.match(/^\/\//)) {
          tokens[idx].attrSet('href', buildLinkUrl(repo, url));
        }
      } catch {}
    }
    if (originalLinkRule) {
      return originalLinkRule.call(this, tokens, idx, options, env, self);
    } else {
      return md.renderer.renderToken(tokens, idx, options);
    }
  };

  function makeHtmlTransformer(originalRule) {
    return function (tokens, idx, options, env, self) {
      var content = tokens[idx].content;
      var imgHtml = replaceTagAttribute(content, 'img', 'src', buildImageUrl, repo);
      var linkHtml = replaceTagAttribute(content, 'a', 'href', buildLinkUrl, repo);

      tokens[idx].content = imgHtml || linkHtml || content;

      return originalRule.call(this, tokens, idx, options, env, self);
    };
  }

  // rewrite image locations in inline/block HTML as fully qualified github URLs
  md.renderer.rules.html_inline = makeHtmlTransformer(md.renderer.rules.html_inline);
  md.renderer.rules.html_block = makeHtmlTransformer(md.renderer.rules.html_block);
}
