import { PathObj } from 'src/api/hooks/code/useGetCodeFiles';

export const isFile = (path: string) => path.split('/').length === 2;

export function isFolderIterated(paths: PathObj[], pathDir: string, index: number) {
  let is = false;

  for (let i = 0; i < index; i++) {
    if (paths[i].path.includes(pathDir)) {
      is = true;
      break;
    }
  }
  return is;
}

export function sort(files: PathObj[]) {
  const grouped = files.reduce(
    (groups: { folder: PathObj[]; file: PathObj[] }, pathObj) => {
      if (isFile(pathObj.path)) {
        groups.file.push(pathObj);
      } else {
        groups.folder.push(pathObj);
      }
      return groups;
    },
    { folder: [], file: [] },
  );

  return [...grouped.folder, ...grouped.file];
}

export function humanFileSize(bytes: number, si = true, dp = 2) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

  let unit = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++unit;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && unit < units.length - 1);

  return Number(bytes.toFixed(dp)) + ' ' + units[unit];
}
