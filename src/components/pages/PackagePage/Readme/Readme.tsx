import markdownit from 'markdown-it';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useGetSinglePackage from 'src/api/hooks/packages/useGetSinglePackage';
import * as SC from './styles';

export const markdown = markdownit({
  html: true,
  linkify: true,
  typographer: true,
});

export default function Readme() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { version } = useParams();
  const { data } = useGetSinglePackage();

  useEffect(() => {
    if (data) {
      let readme = '';
      if (version) {
        readme = data.versions[version].readme ?? '';
      }
      if (!version || version === data['dist-tags'].latest) {
        readme = data.readme ?? '';
      }
      const htmlData = markdown.render(readme);
      (ref.current as HTMLDivElement).innerHTML = htmlData;
    }
  }, [data, version]);

  return <SC.ReadmeContent ref={ref}></SC.ReadmeContent>;
}
