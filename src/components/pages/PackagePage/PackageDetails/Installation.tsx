import { Box } from '@mui/material';
import ArrowRightIcon from 'src/assets/Arrow-Right.svg?react';
import CopyIcon from 'src/assets/Copy.svg?react';
import colors from 'src/styles/colors';
import { text } from 'src/configs/configs';
import { Title } from './styles';

export default function Installation({ version }: { version: string }) {
  return (
    <Box
      sx={{
        marginBottom: '16px',
      }}
    >
      <Title>{text.install}</Title>
      <Box
        sx={{
          border: `1px ${colors.c26} solid`,
          padding: '0.75rem',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          fontSize: '0.875rem',
          marginTop: '8px',
        }}
      >
        <Box>
          <ArrowRightIcon style={{ width: 12.59, height: 12.59 }} />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <code>{`npm i ${version}`}</code>
        </Box>
        <Box>
          <CopyIcon
            style={{ width: 12.59, height: 12.59, cursor: 'pointer' }}
            onClick={() => navigator.clipboard.writeText(`npm i ${version}` ?? '')}
          />
        </Box>
      </Box>
    </Box>
  );
}
