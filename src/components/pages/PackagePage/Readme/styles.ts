// https://github.com/npm/marky-markdown

import styled from '@emotion/styled';

export const ReadmeContent = styled.div(
  ({ theme }) => `
  ul {
    list-style: initial;
  };
   color: ${theme.colors.typography.primary};
  font-size: 1.125rem;
  line-height: 1.6;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${theme.colors.markdown.heading};
    margin-top: 24px;
    margin-bottom: 16px;
    padding-bottom: 0px;
    padding-bottom: 0rem;
    font-weight: 600;
    line-height: 1.25
  }
  a {
    color: ${theme.colors.markdown.anchor};
    text-decoration: none;
    font-size: 1em
  }
  a strong {
    color: ${theme.colors.markdown.anchor}
  }
  p a,
    li a {
    font-weight: normal
  }
  blockquote a {
    color: ${theme.colors.markdown.blockquote.anchor}
  }
  blockquote {
    background: none;
    padding: 0px 16px;
    margin-left: 0;
    margin-right: 0;
    border-left: ${theme.colors.markdown.blockquote.border} solid 4px;
    border-radius: 0
  }
  > *:last-child {
    margin-bottom: 0
  }
  h1:first-child {
    font-weight: 700;
    margin-top: 0
  }
  :first-letter-line {
    font-size: 80px;
    font-size: 5rem;
    margin-top: 0;
    font-weight: 100
  }
  h1 {
    font-size: 36px;
    font-size: 2.25rem;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, .1)
  }
  h2 {
    font-size: 30px;
    font-size: 1.875rem;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    padding-bottom: 8px;
    letter-spacing: -0.8px;
    letter-spacing: -0.05rem
  }
  h3 {
    font-size: 20px;
    font-size: 1.25rem;
    letter-spacing: -0.48px;
    letter-spacing: -0.03rem
  }
  h4 {
    font-size: 18px;
    font-size: 1.125rem;
    padding-bottom: 8px;
    letter-spacing: -0.48px;
    letter-spacing: -0.03rem;
    border-bottom: 1px solid #eeeeee
  }
  h5 {
    font-size: 16px;
    font-size: 1rem;
    letter-spacing: -0.16px;
    letter-spacing: -0.01rem
  }
  h6 {
    font-size: 14px;
    font-size: 0.875rem;
    letter-spacing: -0.16px;
    letter-spacing: -0.01rem
  }
  p {
    color: ${theme.colors.markdown.blockquote.paragraph};
    font-size: 18px;
    line-height: 1.6;
    margin-top: 0;
    margin-bottom: 16px;
    line-height: 1.65;
    letter-spacing: 0.1px
  }
  p li {
    line-height: 1;
    margin-top: 0;
    margin-bottom: 8px
  }
  strong {
    color: ${theme.colors.markdown.strong};
    font-weight: bolder
  }
  hr {
    opacity: 0.2;
    height: 0px
  }
  ol {
    padding-left: 17px;
    padding-top: 0;
    margin-top: 0
  }
  ol li,
    ul li {
      margin-bottom: 6px;
      font-size: 1.1em
  }
  td,
    th {
      font-size: 1.1em;
      padding: 9px 13px;
      border: 1px solid #d8d8d8;
      border-bottom: none;
      line-height: 1.6
  }
  tr td {
    line-height: 1.4
  }
  table {
    display: block;
    white-space: normal;
    overflow-x: auto;
    width: -moz-max-content;
    width: max-content;
    max-width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    border-bottom: 1px solid #e2e2e2
  }
  li p code {
    font-size: 0.8em
  }
  ol li,
    ul li {
      margin-bottom: 6px;
      font-size: 1em
  }
  pre {
    margin-top: 0;
    margin-bottom: 24px;
    padding: 12px;
    font-size: 1em;
    background: ${theme.colors.markdown.pre.background};
    border-radius: 2px;
    overflow-x: auto
  }
  code {
    font-size: 1em;
    border-radius: 2px;
    background: ${theme.colors.markdown.code.background};
    padding: 0px 5px
  }
  pre code {
    font-size: 16px;
    font-size: 1rem;
    padding: 0
  }
  p code {
    font-size: 0.9em
  }
  ul {
    padding-left: 1em;
    margin-bottom: 1em;
    font-size: 1em;
    line-height: 1.3
  }
  ul li a {
    font-size: 18px;
    color: ${theme.colors.markdown.anchor};
    text-decoration: none;
    font-weight: normal;
    line-height: 1.4
  }
  // legacy
  ol {
    list-style-position: outside;
    font-weight: 600;
    margin-bottom: 20px;
    margin-left: 16px
  }
  ol li {
      margin-bottom: 2px
  }
  li {
      font-weight: 400
  }
  > h1 {
      margin: 24px 0 16px 0;
      padding: 0;
      padding-bottom: 7px;
      line-height: 1.2;
      white-space: normal;
      text-transform: none;
      letter-spacing: -0.8px
  }
  > h1 a {
      color: text-color;
      text-decoration: none
  }
  > h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 600
  }
  > h2 a,
    h3 a,
    h4 a,
    h5 a,
    h6 a {
      font-weight: 700;
      text-decoration: none
  }
  > h2 a:hover,
    h3 a:hover,
    h4 a:hover,
    h5 a:hover,
    h6 a:hover {
      text-decoration: underline
  }
  > h1,
    h2 {
      border-bottom: 1px solid greigh6;
      margin: 8px 0 16px 0
  }
  h2 {
      letter-spacing: -0.3px
  }
  h3 {
      margin: 16px 0 4px 0
  }
  h4,
    h5,
    h6 {
      margin: 16px 0 4px 0
  }
  ol ol,
    ul ol,
    ol ul,
    ul ul {
      margin: 0 0 0 20px
  }
  p,
    li {
      color: ${theme.colors.markdown.li}
  }
  p a,
    li a {
      font-weight: 600
  }
  th {
      font-weight: bold
  }
  td,
    th {
      background: #ffffff;
      border: 1px solid greigh6
  }
  img {
      max-width: 100%
  }
  blockquote {
      background: ${theme.colors.markdown.blockquote.background};
      padding: 1px 16px;
      margin-left: 0;
      margin-right: 0;
      border-left: ${theme.colors.markdown.blockquote.border} solid 10px;
      border-radius: 3px
  }
  table {
      display: block;
      white-space: normal;
      overflow-x: auto;
      width: -moz-max-content;
      width: max-content;
      max-width: 100%;
      border-spacing: 0;
      border-collapse: collapse
  }
  code {
      font-feature-settings: none;
      font-variant-ligatures: none;
      font-family: var(--code);
      letter-spacing: var(--code-ls);
      line-height: var(--code-lh)
  }
  td,
    th {
      padding: 9px 13px;
      border: 1px solid #d8d8d8
  }
  tr:nth-child(2n) td {
      background-color: #f4f4f4
  }
`,
);
