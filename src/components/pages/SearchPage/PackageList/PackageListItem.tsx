import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import colors from 'src/styles/colors';
import Typography from 'src/components/common/Typography/Typography';
import Chip from 'src/components/common/Chip/Chip';
import Score from '../Score/Score';
import { PackageListItemProps } from './types';

export default function PackageListItem({ obj, searchString }: PackageListItemProps) {
  const { package: foundPackage, score } = obj;
  const { name, description, keywords, publisher, date, version } = foundPackage;

  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 8px',
        marginBottom: '16px',
        paddingBottom: '8px',
        gap: '32px',
        borderBottom: `1px solid ${colors.c1}`,
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Link target="_blank" to={`/package/${encodeURIComponent(name)}`} color={colors.c4}>
            <h3
              style={{
                fontWeight: 600,
                fontSize: '1.25rem',
                display: 'inline',
              }}
            >
              {name}
            </h3>
          </Link>
          {name === searchString && <Chip keyword={'exact match'} backgroundColor={colors.c3} />}
        </div>
        <Typography
          style={{
            paddingTop: '4px',
            paddingBottom: '4px',
            marginTop: '4px',
            fontSize: '1rem',
          }}
        >
          {description}
        </Typography>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginTop: '8px',
            marginBottom: '8px',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {keywords?.map((keyword, i) => (
            <li
              key={keyword + i}
              style={{
                display: 'initial',
                width: 'auto',
                padding: 0,
              }}
            >
              <Link to={`?text=keywords:${keyword}`}>
                <Chip keyword={keyword} backgroundColor={colors.c5} />
              </Link>
            </li>
          ))}
        </ul>
        <div
          style={{
            gap: '8px',
            display: 'flex',
            alignItems: 'center',
            marginTop: '4px',
            marginBottom: '4px',
          }}
        >
          <span
            style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              fontFamily: `'Fira Mono', 'Andale Mono', 'Consolas', monospace`,
            }}
          >
            {publisher.username}
          </span>
          <span
            style={{
              fontSize: '0.875rem',
              color: colors.c6,
              fontFamily: `'Fira Mono', 'Andale Mono', 'Consolas', monospace`,
            }}
          >{`published ${version} • ${format(new Date(date), 'MMMM dd yyyy')}`}</span>
        </div>
      </div>
      <Score
        score={[
          {
            name: 'p',
            value: score.detail.popularity,
            color: colors.c7,
          },
          {
            name: 'q',
            value: score.detail.quality,
            color: colors.c8,
          },
          {
            name: 'm',
            value: score.detail.maintenance,
            color: colors.c9,
          },
        ]}
        max={1}
      />
    </section>
  );
}
