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
      const data = Object.values(packageData.versions)
        .reverse()
        .find(({ readme }) => readme);
      const htmlData = markdown.render(data?.readme || '');
      (ref.current as HTMLDivElement).innerHTML = htmlData;
    }
  }, [packageData]);

  return <div ref={ref}></div>;
}
