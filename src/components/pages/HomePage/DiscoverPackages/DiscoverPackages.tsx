import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import SearchIcon from '../../../../assets/Search.svg?react';
import Link from '../../../common/Link/Link';
import appColors from '../../../../styles/colors';
import { KeywordConfig } from './config';

export default function DiscoverPackages() {
  return (
    <Box
      sx={{
        p: 2,
        flex: 1,
      }}
    >
      <Box
        sx={{
          mb: 2,
          display: 'flex',
          gap: 1,
          alignItems: 'center',
        }}
      >
        <SearchIcon />
        <Typography>Discover packages</Typography>
      </Box>
      <Divider
        sx={{
          borderColor: appColors.c17,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          mt: 2,
        }}
      >
        {KeywordConfig.map(({ name, Icon, colors }) => {
          return (
            <Box
              key={name}
              sx={{
                flex: 1,
              }}
            >
              <Link
                to={`/search?text=keywords:${name.toLowerCase()}`}
                sx={{
                  px: 4,
                  py: 3,
                  '&:hover': {
                    color: colors.text,
                    backgroundColor: colors.hover,
                    borderBottomColor: colors.text,
                  },
                  color: appColors.c19,
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${appColors.c18}`,
                  borderBottom: `2px solid ${appColors.c18}`,
                  transition: '0.2s linear',
                }}
              >
                <Icon style={{ color: 'currentColor', height: 18 }} />
                <Typography
                  sx={{
                    whiteSpace: 'nowrap',
                  }}
                >
                  {name}
                </Typography>
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
