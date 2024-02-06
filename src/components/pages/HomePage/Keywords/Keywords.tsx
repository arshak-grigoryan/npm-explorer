import SearchIcon from 'src/assets/Search.svg?react';
import { text } from 'src/configs/text';
import Divider from 'src/components/common/Divider/Divider';
import { KeywordConfig } from './config';
import * as SC from './styles';

export default function Keywords() {
  return (
    <SC.KeyowrdsSection>
      <SC.Heading>
        <SearchIcon css={{ height: 14, marginRight: '8px', '& g': { stroke: 'currentColor' } }} />
        {text.discoverPackages}
      </SC.Heading>
      <Divider css={(theme) => ({ backgroundColor: theme.strictColors.divider.c1 })} />
      <SC.KeywordsList>
        {KeywordConfig.map(({ name, Icon, colors }) => {
          return (
            <SC.KeywordsListItem key={name}>
              <SC.Link
                to={`/search?text=keywords:${name.toLowerCase()}`}
                color={colors.text}
                backgroundColor={colors.hover}
              >
                <Icon style={{ color: 'currentColor', height: 18 }} />
                {name}
              </SC.Link>
            </SC.KeywordsListItem>
          );
        })}
      </SC.KeywordsList>
    </SC.KeyowrdsSection>
  );
}
