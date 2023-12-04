import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { useContext, useState } from 'react';
import { SearchContext } from '../../contexts/Search/context';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { perPage } from '../../api/configs';
import { Link } from '@mui/material';
import { format } from 'date-fns';
import Score from '../Score/Score';

export default function SearchResult() {
  const { data, onPageChange, isFetching } = useContext(SearchContext);
  const [page, setPage] = useState(1);

  const pageData = data.find((item) => item.page === page);

  const showPagination = pageData && pageData.response.total > perPage;

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (pageData) {
    return (
      <Box>
        <Box
          sx={{ backgroundColor: '#f9f9f9' }}
          borderTop="1px solid rgba(0,0,0,.1)"
          borderBottom="1px solid rgba(0,0,0,.1)"
          py={2}
          px={4}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Typography>{pageData.response.total} packages found</Typography>
          {showPagination && (
            <Pagination
              count={Math.ceil(pageData.response.total / perPage)}
              page={page}
              onChange={(_, page) => {
                setPage(page);
                onPageChange(page);
              }}
            />
          )}
        </Box>
        <Stack px={4} py={2}>
          {pageData?.response.objects.map((obj) => {
            const { package: foundPackage, score } = obj;
            const { name, description, keywords, publisher, date, version } = foundPackage;
            return (
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                key={name}
                px={0.5}
                pt={2}
                pb={1}
                gap={4}
                borderBottom={'1px solid rgba(0,0,0,.1)'}
              >
                <Box>
                  <Link
                    underline="hover"
                    color={'#000'}
                    sx={{
                      '&.MuiLink-underlineHover': {
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <Typography
                      component="h3"
                      fontWeight={600}
                      lineHeight={1}
                      fontSize={'1.25rem'}
                      display={'inline'}
                    >
                      {name}
                    </Typography>
                  </Link>
                  <Typography py={0.5} mt={0.5} fontSize={'1rem'}>
                    {description}
                  </Typography>
                  <Box display={'flex'} flexWrap={'wrap'} gap={1} my={0.5}>
                    {keywords?.map((key, i) => (
                      <Chip
                        key={key + i}
                        label={key}
                        sx={{
                          '&.MuiChip-root': {
                            backgroundColor: 'rgba(0,0,0,.05)',
                            borderRadius: 1,
                            px: 1,
                            py: 0.5,
                            '&:hover': {
                              backgroundColor: 'rgba(0,0,0,.1)',
                              cursor: 'pointer',
                            },
                          },
                          '& .MuiChip-label': {
                            px: 0,
                            fontSize: '0.875rem',
                            color: 'rgba(0,0,0,.9)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                  <Stack gap={1} direction={'row'} alignItems={'center'} my={0.5}>
                    <Typography
                      component={'span'}
                      fontSize={'0.875rem'}
                      fontWeight={600}
                      lineHeight={1}
                    >
                      {publisher.username}
                    </Typography>
                    <Typography
                      fontSize={'0.875rem'}
                      color={'#666666'}
                      component={'span'}
                    >{`published ${version} • ${format(
                      new Date(date),
                      'MMMM dd yyyy',
                    )}`}</Typography>
                  </Stack>
                </Box>
                <Score
                  score={[
                    {
                      name: 'p',
                      value: score.detail.popularity,
                      color: '#29abe2',
                    },
                    {
                      name: 'q',
                      value: score.detail.quality,
                      color: '#8956ff',
                    },
                    {
                      name: 'm',
                      value: score.detail.maintenance,
                      color: '#cb3837',
                    },
                  ]}
                  max={1}
                />
              </Stack>
            );
          })}
        </Stack>
        {showPagination && (
          <Box py={2} px={2}>
            <Pagination
              count={Math.ceil(pageData.response.total / perPage)}
              page={page}
              onChange={(_, page) => {
                setPage(page);
                onPageChange(page);
              }}
            />
          </Box>
        )}
      </Box>
    );
  }
  return null;
}
