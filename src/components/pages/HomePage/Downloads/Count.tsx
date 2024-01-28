import colors from 'src/styles/colors';
import useGetPackageDownloads, { Downloads } from 'src/api/hooks/downloads/useGetPackageDownloads';
import FetchLayout from 'src/components/common/FetchLayout/FetchLayout';

type CountLayoutProps = Downloads & {
  text: string;
};

function CountLayout({ data, text }: CountLayoutProps) {
  return (
    <div
      style={{
        borderBottom: `1px solid ${colors.c1}`,
        paddingBottom: '16px',
      }}
    >
      <h3
        style={{
          fontSize: '.875rem',
          fontWeight: 700,
        }}
      >
        {text}
      </h3>
      <strong
        style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          fontFamily:
            '-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif',
        }}
      >
        {data.downloads.toLocaleString()}
      </strong>
    </div>
  );
}

export default function Count({ url, text }: { url: string; text: string }) {
  const res = useGetPackageDownloads(url);

  return (
    <FetchLayout
      state={res}
      slots={{
        Content: CountLayout,
      }}
      slotProps={{
        Content: { text },
      }}
    />
  );
}
