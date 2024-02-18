import markdownit from 'markdown-it';
import { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import { PackagePageContext } from '../PackagePageProvider/PackagePageProvider';
import * as SC from './styles';

export const markdown = markdownit({
  html: true,
  linkify: true,
  typographer: true,
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
