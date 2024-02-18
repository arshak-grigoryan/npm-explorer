import { useContext, useEffect } from 'react';
import { highlightAll } from 'prismjs';
import { ThemeModeContext } from 'src/ThemeModeProvider/ThemeMode';
import { ThemeMode } from 'src/ThemeModeProvider/types';
import { PackagePageContext } from '../PackagePageProvider/PackagePageProvider';
import * as SC from './styles';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export default function FileCode() {
  const { colorScheme } = useContext(ThemeModeContext);
  const { packageVersionFileCodeRes, fileHash } = useContext(PackagePageContext);

  useEffect(() => {
    if (fileHash && packageVersionFileCodeRes.data) {
      highlightAll();
    }
  }, [packageVersionFileCodeRes.data, fileHash]);

  useEffect(() => {
    (async () => {
      const prismThemeElement = document.getElementById('prism-theme');
      if (prismThemeElement) {
        prismThemeElement.remove();
      }
      const cssLink = document.createElement('link');
      cssLink.id = 'prism-theme';
      cssLink.rel = 'stylesheet';
      cssLink.href =
        colorScheme === ThemeMode.Light
          ? 'https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css'
          : 'https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-tomorrow.min.css';
      document.head.appendChild(cssLink);
      highlightAll();
    })();
  }, [colorScheme]);

  return (
    <SC.Pre className="line-numbers">
      <SC.Code className="language-javascript">{packageVersionFileCodeRes.data}</SC.Code>
    </SC.Pre>
  );
}
