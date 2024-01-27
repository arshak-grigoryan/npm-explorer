import { Box } from '@mui/material';
import ArrowRightIcon from 'src/assets/Arrow-Right.svg?react';
import CopyIcon from 'src/assets/Copy.svg?react';
import colors from 'src/styles/colors';
import { text } from 'src/configs/configs';
import Typography from 'src/components/common/Typography/Typography';
import { CopyIconButton } from './styles';

export default function Installation({ version }: { version: string }) {
  return (
    <Box
      sx={{
        marginBottom: '16px',
      }}
    >
      <Typography
        component={'h3'}
        sx={{
          color: colors.c25,
          fontSize: '1rem',
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        {text.install}
      </Typography>
      <Box
        sx={{
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
        <Box>
          <ArrowRightIcon style={{ width: 12.59, height: 12.59 }} />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Box
            component={'code'}
            sx={{
              fontFamily: 'Consolas,monaco,monospace',
            }}
          >{`npm i ${version}`}</Box>
        </Box>
        <CopyIconButton onClick={() => navigator.clipboard.writeText(`npm i ${version}` ?? '')}>
          <CopyIcon style={{ width: 12.59, height: 12.59, cursor: 'pointer' }} />
        </CopyIconButton>
      </Box>
    </Box>
  );
}
