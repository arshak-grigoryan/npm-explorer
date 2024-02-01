import ArrowRightIcon from 'src/assets/Arrow-Right.svg?react';
import CopyIcon from 'src/assets/Copy.svg?react';
import { text } from 'src/configs/text';
import { CopyIconButton } from './styles';
import * as SC from './styles';

export default function Installation({ version }: { version: string }) {
  return (
    <SC.Installation>
      <SC.Heading>{text.install}</SC.Heading>
      <SC.InstallCmdContainer>
        <div>
          <ArrowRightIcon
            css={(theme) => ({ width: 12.59, height: 12.59, fill: theme.colors.c33 })}
          />
        </div>
        <SC.CodeContainer>
          <SC.Code>{`npm i ${version}`}</SC.Code>
        </SC.CodeContainer>
        <CopyIconButton onClick={() => navigator.clipboard.writeText(`npm i ${version}` ?? '')}>
          <CopyIcon
            css={(theme) => ({
              width: 12.59,
              height: 12.59,
              fill: theme.colors.c33,
              cursor: 'pointer',
              '&:hover': {
                fill: theme.colors.c24,
              },
            })}
          />
        </CopyIconButton>
      </SC.InstallCmdContainer>
    </SC.Installation>
  );
}
