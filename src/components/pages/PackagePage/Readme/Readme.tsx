import MD from 'markdown-it';
import lazyHeaders from 'markdown-it-lazy-headers';
import emoji from 'markdown-it-emoji';
import expandTabs from 'markdown-it-expand-tabs';
import githubTaskList from 'markdown-it-task-lists';
import { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import { PackagePageContext } from '../PackagePageProvider/PackagePageProvider';
import * as SC from './styles';
// @ts-expect-error There is no types
import github from './plugin/github';

export const markdown = MD({
  html: true,
  linkify: true,
  typographer: false,
});

export default function Readme() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { version } = useParams();
  const { singlePackagesRes } = useContext(PackagePageContext);

  useEffect(() => {
    if (singlePackagesRes.data) {
      let readme = '';
      if (version) {
        readme = singlePackagesRes.data.versions[version].readme ?? '';
      }
      if (!version || version === singlePackagesRes.data['dist-tags'].latest) {
        readme = singlePackagesRes.data.readme ?? '';
      }
      markdown
        .use(lazyHeaders)
        .use(emoji, { shortcuts: {} })
        .use(expandTabs, { tabWidth: 4 })
        .use(githubTaskList)
        .use(github, { package: { repository: singlePackagesRes.data.repository.url } });
      const htmlData = markdown.render(readme);
      (ref.current as HTMLDivElement).innerHTML = htmlData;
    }
  }, [singlePackagesRes, version]);

  return (
    <FetchLayout
      res={singlePackagesRes}
      slots={{
        Content: () => <SC.ReadmeContent ref={ref}></SC.ReadmeContent>,
      }}
    />
  );
}
