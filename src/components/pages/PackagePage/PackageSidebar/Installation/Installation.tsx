import ArrowRightIcon from 'src/assets/Arrow-Right.svg?react';
import CopyIcon from 'src/assets/Copy.svg?react';
import colors from 'src/styles/colors';
import { text } from 'src/configs/configs';
import { CopyIconButton } from './styles';

export default function Installation({ version }: { version: string }) {
  return (
    <div
      style={{
        marginBottom: '16px',
      }}
    >
      <h3
        style={{
          color: colors.c25,
          fontSize: '1rem',
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        {text.install}
      </h3>
      <div
        style={{
          border: `1px ${colors.c26} solid`,
          padding: '0.75rem',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          fontSize: '0.875rem',
          marginTop: '16px',
        }}
      >
        <div>
          <ArrowRightIcon style={{ width: 12.59, height: 12.59 }} />
        </div>
        <div style={{ flexGrow: 1 }}>
          <code
            style={{
              fontFamily: 'Consolas,monaco,monospace',
            }}
          >{`npm i ${version}`}</code>
        </div>
        <CopyIconButton onClick={() => navigator.clipboard.writeText(`npm i ${version}` ?? '')}>
          <CopyIcon style={{ width: 12.59, height: 12.59, cursor: 'pointer' }} />
        </CopyIconButton>
      </div>
    </div>
  );
}
