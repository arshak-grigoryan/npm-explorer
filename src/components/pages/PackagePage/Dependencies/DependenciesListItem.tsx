import { Link } from 'react-router-dom';
import colors from 'src/styles/colors';

export default function DependenciesListItem({ deps, label }: { deps: string[]; label: string }) {
  return (
    <div style={{ marginTop: '24px' }}>
      <h2 style={{ color: colors.c21, fontSize: '1.25rem', fontWeight: 500 }}>{label}</h2>
      <hr style={{ margin: '8px 0' }} />
      <div style={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {deps.map((dep) => {
          return (
            <Link
              key={dep}
              to={`/package/${encodeURIComponent(dep)}`}
              style={{
                color: colors.c9,
                // '&:hover': { color: colors.c4 },
                transition: 'color .15s ease-in',
                fontSize: '1.25rem',
              }}
            >
              {dep}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
