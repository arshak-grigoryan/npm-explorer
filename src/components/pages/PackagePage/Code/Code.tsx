import { Fragment, useContext, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CodeFiles } from 'src/api/hooks/code/useGetCodeFiles';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';
import FileIcon from 'src/assets/File.svg?react';
import Foldercon from 'src/assets/Folder.svg?react';
import { PackagePageContext } from '../PackagePageProvider/PackagePageProvider';
import { humanFileSize, isFile, isFolderIterated, sort } from './utils';
import * as SC from './styles';
import FileCode from './FileCode';

function Content({ data }: CodeFiles) {
  const { name } = useParams();
  const { fileHash, setFileHash } = useContext(PackagePageContext);

  const paths = useMemo(() => sort(Object.values(data.files)), [data]);

  const [currentDirectoryPaths, setCurrentDirectoryPaths] = useState(paths);
  const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

  const currentDirectoryPathsFolderSizes = useMemo(() => {
    const folders = currentDirectoryPaths.filter(({ path }) => !isFile(path));
    return folders.reduce((fs: { [key: string]: number }, folder) => {
      const folderName = folder.path.split('/')[1];
      if (fs[folderName]) {
        fs[folderName] += folder.size;
      } else {
        fs[folderName] = folder.size;
      }
      return fs;
    }, {});
  }, [currentDirectoryPaths]);

  const handleFolderClick = (selectedFolder: string) => {
    setBreadcrumb((prevBreadcrumb) => {
      const newBreadcrumb = [...prevBreadcrumb, selectedFolder];
      const newFolderPath = '/' + newBreadcrumb.join('/');
      setCurrentDirectoryPaths(
        sort(
          paths
            .filter((pathObj) => pathObj.path.includes(newFolderPath))
            .map((pathObj) => ({ ...pathObj, path: pathObj.path.replace(newFolderPath, '') })),
        ),
      );
      return newBreadcrumb;
    });
  };

  const showDirectories = !fileHash;

  const handleFileClick = (selectedFile: string, hash: string) => {
    setFileHash(hash);
    setBreadcrumb((prevBreadcrumb) => {
      const newBreadcrumb = [...prevBreadcrumb, selectedFile];
      const filePath = '/' + newBreadcrumb.join('/');
      setCurrentDirectoryPaths(
        paths
          .filter((pathObj) => pathObj.path === filePath)
          .map((pathObj) => ({ ...pathObj, path: selectedFile })),
      );
      return newBreadcrumb;
    });
  };

  const handleBackClick = () => {
    setFileHash('');
    setBreadcrumb((prev) => {
      const newBreadcrumb = [...prev];
      newBreadcrumb.pop();
      let newFolderPath = '';
      if (!newBreadcrumb.length) {
        newFolderPath = newBreadcrumb.join('/');
      } else {
        newFolderPath = '/' + newBreadcrumb.join('/');
      }
      setCurrentDirectoryPaths(
        sort(
          paths
            .filter((pathObj) => pathObj.path.includes(newFolderPath))
            .map((pathObj) => ({ ...pathObj, path: pathObj.path.replace(newFolderPath, '') })),
        ),
      );
      return newBreadcrumb;
    });
  };

  const handleBreadcrumbItemClick = (breadcrumbItemIndex: number) => {
    setFileHash('');
    const newBreadcrumb = breadcrumb.slice(0, breadcrumbItemIndex + 1);
    let newFolderPath = '';
    if (!newBreadcrumb.length) {
      newFolderPath = newBreadcrumb.join('/');
    } else {
      newFolderPath = '/' + newBreadcrumb.join('/');
    }
    setCurrentDirectoryPaths(
      sort(
        paths
          .filter((pathObj) => pathObj.path.includes(newFolderPath))
          .map((pathObj) => ({ ...pathObj, path: pathObj.path.replace(newFolderPath, '') })),
      ),
    );
    setBreadcrumb(newBreadcrumb);
  };

  return (
    <SC.CodeContainer>
      <SC.BreadcrumbContainer>
        <>
          /
          <SC.BreadCrumbItem
            selected={!breadcrumb.length}
            onClick={() => {
              setFileHash('');
              setCurrentDirectoryPaths(paths);
              setBreadcrumb([]);
            }}
          >
            {name}
          </SC.BreadCrumbItem>
        </>
        {breadcrumb.map((dir, index) => {
          return (
            <Fragment key={dir}>
              /
              <SC.BreadCrumbItem
                selected={index === breadcrumb.length - 1}
                onClick={() => handleBreadcrumbItemClick(index)}
              >
                {dir}
              </SC.BreadCrumbItem>
            </Fragment>
          );
        })}
      </SC.BreadcrumbContainer>
      {Boolean(breadcrumb.length) && (
        <SC.FolderItem>
          <SC.FileNameContainer onClick={() => handleBackClick()}>
            <Foldercon width={20} height={25} style={{ fill: 'currentcolor' }} />
            <SC.FileName>../</SC.FileName>
          </SC.FileNameContainer>
        </SC.FolderItem>
      )}

      {!showDirectories && <FileCode />}

      {showDirectories &&
        currentDirectoryPaths.map((pathObj, index) => {
          if (isFile(pathObj.path)) {
            return (
              <SC.FileItem
                key={pathObj.path}
                onClick={() => handleFileClick(pathObj.path.split('/')[1], pathObj.hex)}
              >
                <SC.FileNameContainer>
                  <FileIcon width={18} style={{ fill: 'currentcolor' }} />
                  <SC.FileName>{pathObj.path.slice(1)}</SC.FileName>
                </SC.FileNameContainer>
                <SC.FileContentType>{pathObj.contentType}</SC.FileContentType>
                <SC.FileSize>{humanFileSize(pathObj.size)}</SC.FileSize>
              </SC.FileItem>
            );
          }

          const pathFolders = pathObj.path.split('/');
          const currentFolder = pathFolders[1];
          const isIterated = isFolderIterated(currentDirectoryPaths, currentFolder, index);

          return (
            !isIterated && (
              <SC.FolderItem key={pathObj.path} onClick={() => handleFolderClick(currentFolder)}>
                <SC.FileNameContainer>
                  <Foldercon width={20} height={25} style={{ fill: 'currentcolor' }} />
                  <SC.FileName>{pathObj.path.split('/')[1] + '/'}</SC.FileName>
                </SC.FileNameContainer>
                <SC.FileContentType>folder</SC.FileContentType>
                <SC.FileSize>
                  {humanFileSize(currentDirectoryPathsFolderSizes[currentFolder])}
                </SC.FileSize>
              </SC.FolderItem>
            )
          );
        })}
    </SC.CodeContainer>
  );
}

export default function Code() {
  const { packageVersionCodeRes } = useContext(PackagePageContext);
  return <FetchLayout res={packageVersionCodeRes} slots={{ Content }} />;
}
