import Divider from 'src/components/common/Divider/Divider';
import * as SC from './styles';

export default function DependenciesListItem({ deps, label }: { deps: string[]; label: string }) {
  return (
    <SC.DependenciesListItem>
      <SC.DependencyHeading>{label}</SC.DependencyHeading>
      <Divider gap="16px" height="1px" css={(theme) => ({ backgroundColor: theme.colors.c26 })} />
      <SC.DependencyLinkContainer>
        {deps.map((dep) => {
          return (
            <SC.DependencyLink key={dep} to={`/package/${encodeURIComponent(dep)}`}>
              {dep}
            </SC.DependencyLink>
          );
        })}
      </SC.DependencyLinkContainer>
    </SC.DependenciesListItem>
  );
}
