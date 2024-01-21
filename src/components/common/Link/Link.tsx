import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import { forwardRef } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkprops } from 'react-router-dom';

export default forwardRef(function Link(
  props: Omit<MuiLinkProps, 'href'> & RouterLinkprops,
  ref: any,
) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, component, ...otherProps } = props;
  return (
    <MuiLink ref={ref} component={RouterLink} underline="none" color="initial" {...otherProps}>
      {children}
    </MuiLink>
  );
});
