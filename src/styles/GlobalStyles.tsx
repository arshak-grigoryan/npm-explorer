/* https://stackoverflow.com/questions/2781549/removing-input-background-colour-for-chrome-autocomplete */

import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

export default function GlobalStyles() {
  return (
    <MuiGlobalStyles
      styles={{
        '#root': {
          width: '100vw',
          height: '100vh',
        },
        'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':
          {
            WebkitBackgroundClip: 'text',
          },
      }}
    />
  );
}
