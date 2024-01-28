import { Link } from 'react-router-dom';
import SearchIcon from 'src/assets/Search.svg?react';
import appColors from 'src/styles/colors';
import { text } from 'src/configs/configs';
import Typography from 'src/components/common/Typography/Typography';
import { KeywordConfig } from './config';

export default function Keywords() {
  return (
    <section
      style={{
        padding: '16px',
        flex: 8,
      }}
    >
      <h2
        style={{
          marginBottom: '16px',
          display: 'flex',
          gap: 1,
          alignItems: 'center',
        }}
      >
        <SearchIcon style={{ color: 'currentColor', height: 18 }} />
        <Typography style={{ fontWeight: 600, fontSize: '1.25rem' }}>
          {text.discoverPackages}
        </Typography>
      </h2>
      <hr
        style={{
          borderColor: appColors.c17,
        }}
      />
      <ul
        style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          marginTop: '16px',
        }}
      >
        {KeywordConfig.map(({ name, Icon }) => {
          return (
            <li
              key={name}
              style={{
                display: 'initial',
                flex: 1,
                padding: 0,
              }}
            >
              <Link
                to={`/search?text=keywords:${name.toLowerCase()}`}
                style={{
                  padding: '24px 32px',
                  // '&:hover': {
                  //   color: colors.text,
                  //   backgroundColor: colors.hover,
                  //   borderBottomColor: colors.text,
                  // },
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
                  style={{
                    whiteSpace: 'nowrap',
                    fontWeight: 800,
                  }}
                >
                  {name}
                </Typography>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
