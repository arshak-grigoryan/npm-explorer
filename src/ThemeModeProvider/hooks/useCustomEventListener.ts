/* eslint-disable */
import { useEffect } from 'react';

export default function useCustomEventListener(
  event: string,
  cb: () => void,
  deps: unknown[] = [],
) {
  useEffect(() => {
    const handleChange = () => {
      cb();
    };

    window.addEventListener(event, handleChange);

    return () => {
      window.removeEventListener(event, handleChange);
    };
  }, deps);
}
