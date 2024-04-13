import MD from 'markdown-it';
import lazyHeaders from 'markdown-it-lazy-headers';
import emoji from 'markdown-it-emoji';
import expandTabs from 'markdown-it-expand-tabs';
import githubTaskList from 'markdown-it-task-lists';
import { useContext, useEffect, useRef } from 'react';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import { SinglePackage } from 'src/api/hooks/packages/useGetSinglePackage';
import useUrlParams from 'src/hooks/useUrlParams';
import { PackagePageContext } from '../PackagePageProvider/PackagePageProvider';
import * as SC from './styles';
// @ts-expect-error There is no types
import github from './plugin/github';

export const markdown = MD({
  html: true,
  linkify: true,
  typographer: false,
});

function Readme(props: SinglePackage) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { version } = useUrlParams();

  useEffect(() => {
    if (props.data) {
      let readme = '';
      if (version) {
        readme = props.data.versions[version].readme ?? '';
      }
      if (!version || version === props.data['dist-tags'].latest) {
        readme = props.data.readme ?? '';
      }
      markdown
        .use(lazyHeaders)
        .use(emoji, { shortcuts: {} })
        .use(expandTabs, { tabWidth: 4 })
        .use(githubTaskList)
        .use(github, { package: { repository: props.data.repository.url } });
      const htmlData = markdown.render(readme);
      (ref.current as HTMLDivElement).innerHTML = htmlData;
    }
  }, [props, version]);

  return <SC.ReadmeContent ref={ref}></SC.ReadmeContent>;
}

export default function ReadmeContainer() {
  const { singlePackagesRes } = useContext(PackagePageContext);

  return (
    <FetchLayout
      res={singlePackagesRes}
      slots={{
        Content: Readme,
      }}
    />
  );
}
