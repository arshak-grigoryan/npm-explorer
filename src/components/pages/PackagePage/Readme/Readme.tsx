import markdownit from 'markdown-it';
import { useEffect, useRef } from 'react';
import useGetSinglePackage from '../../../../api/hooks/useGetSinglePackage';

export const markdown = markdownit({
  html: true,
  linkify: true,
  typographer: true,
});

export default function Readme() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { data } = useGetSinglePackage();

  useEffect(() => {
    if (data) {
      let readme = '';
      const packageData = Object.values(data.versions).sort((a, b) =>
        b.version.localeCompare(a.version),
      );

      if (data.readme) {
        readme = data.readme;
      } else {
        // TODO: find right resource to extract readme content
        for (let i = packageData.length - 1; i >= 0; i--) {
          if (
            packageData[i].version.localeCompare(data['dist-tags'].latest) === 1 &&
            packageData[i].readme
          ) {
            readme = packageData[i].readme;
            break;
          }
        }
      }
      const htmlData = markdown.render(readme);
      (ref.current as HTMLDivElement).innerHTML = htmlData;
    }
  }, [data]);

  return <div ref={ref}></div>;
}
