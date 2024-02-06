export default function VersionListHeader({ columns }: { columns: [string, string, string] }) {
  return (
    <div
      css={(theme) => ({
        display: 'flex',
        fontWeight: 600,
        color: theme.colors.typography.primary,
      })}
    >
      <div>{columns[0]}</div>
      <div css={{ flexGrow: 1, minWidth: '8px' }}></div>
      <div>{columns[1]}</div>
      <div css={{ display: 'flex', width: '33%' }}>
        <div css={{ flexGrow: 1, minWidth: '8px' }}></div>
        <div>{columns[2]}</div>
      </div>
    </div>
  );
}
