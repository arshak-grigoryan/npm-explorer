import markdownit from 'markdown-it';
import { useEffect, useRef } from 'react';
import useGetSinglePackage from '../../api/hooks/useGetSinglePackage';

export const markdown = markdownit({
  html: true,
  linkify: true,
  typographer: true,
});

export default function Readme() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { data: packageData } = useGetSinglePackage();

  useEffect(() => {
    if (packageData) {
      let readme = '';
      const data = Object.values(packageData.versions).sort((a, b) =>
        b.version.localeCompare(a.version),
      );

      if (packageData.readme) {
        readme = packageData.readme;
      } else {
        // TODO: find right resource to extract readme content
        for (let i = data.length - 1; i >= 0; i--) {
          if (
            data[i].version.localeCompare(packageData['dist-tags'].latest) === 1 &&
            data[i].readme
          ) {
            readme = data[i].readme;
            break;
          }
        }
      }
      const htmlData = markdown.render(readme);
      (ref.current as HTMLDivElement).innerHTML = htmlData;
    }
  }, [packageData]);

  return <div ref={ref}></div>;
}
