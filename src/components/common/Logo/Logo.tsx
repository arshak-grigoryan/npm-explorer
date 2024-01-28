import LogoIcon from 'src/assets/npm-logo-black.svg?react';
import colors from 'src/styles/colors';
import Typography from '../Typography/Typography';

export default function Logo() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <LogoIcon height={18} />
      <Typography
        style={{
          fontSize: '1rem',
          fontWeight: 700,
          color: colors.c4,
        }}
      >
        Explorer
      </Typography>
    </div>
  );
}
