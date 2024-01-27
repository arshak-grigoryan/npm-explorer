/* https://stackoverflow.com/questions/2781549/removing-input-background-colour-for-chrome-autocomplete */

import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

const inputGlobalStyles = (
  <MuiGlobalStyles
    styles={{
      '#root': {
        minWidth: '320px',
        width: '100vw',
        height: '100vh',
      },
      'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':
        {
          WebkitBackgroundClip: 'text',
        },
      body: {
        fontFamily: `'Source Sans Pro', 'Lucida Grande', sans-serif`,
        lineHeight: 1,
        letterSpacing: 'normal',
      },
    }}
  />
);

export default inputGlobalStyles;
