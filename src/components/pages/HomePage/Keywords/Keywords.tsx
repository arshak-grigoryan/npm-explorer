import { Box, List, ListItem, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import SearchIcon from 'src/assets/Search.svg?react';
import appColors from 'src/styles/colors';
import Link from 'src/components/common/Link/Link';
import { text } from 'src/configs/configs';
import { KeywordConfig } from './config';

export default function Keywords() {
  return (
    <Box
      component={'section'}
      sx={{
        padding: '16px',
        flex: 1,
      }}
    >
      <Typography
        component={'h2'}
        sx={{
          marginBottom: '16px',
          display: 'flex',
          gap: 1,
          alignItems: 'center',
        }}
      >
        <SearchIcon style={{ color: 'currentColor', height: 18 }} />
        <Typography>{text.discoverPackages}</Typography>
      </Typography>
      <Divider
        sx={{
          borderColor: appColors.c17,
        }}
      />
      <List
        sx={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          marginTop: '16px',
        }}
      >
        {KeywordConfig.map(({ name, Icon, colors }) => {
          return (
            <ListItem
              key={name}
              sx={{
                display: 'initial',
                flex: 1,
                padding: 0,
              }}
            >
              <Link
                to={`/search?text=keywords:${name.toLowerCase()}`}
                sx={{
                  padding: '24px 32px',
                  '&:hover': {
                    color: colors.text,
                    backgroundColor: colors.hover,
                    borderBottomColor: colors.text,
                  },
                  color: appColors.c19,
                  display: 'flex',
                  gap: '16px',
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
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
