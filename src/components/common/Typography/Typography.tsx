import { Typography as MuiTypography, TypographyProps } from '@mui/material';
import { ReactNode } from 'react';

export default function Typography({
  children,
  sx,
  ...restProps
}: { children?: ReactNode } & TypographyProps) {
  return (
    <MuiTypography
      sx={{
        lineHeight: 1.15,
        ...sx,
      }}
      {...restProps}
    >
      {children}
    </MuiTypography>
  );
}
