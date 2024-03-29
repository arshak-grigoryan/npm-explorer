import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import Chip from 'src/components/common/Chip/Chip';
import { text } from 'src/configs/text';
import Score from '../Score/Score';
import { PackageListItemProps } from './types';
import * as SC from './styles';

export default function PackageListItem({ obj, searchString }: PackageListItemProps) {
  const { package: foundPackage, score } = obj;
  const { name, description, keywords, publisher, date, version } = foundPackage;
  const isTextMatch = name === searchString;

  return (
    <SC.PackageSection>
      <SC.Package>
        <SC.MatchedPackage>
          <SC.PackageLink target="_blank" to={`/package/${encodeURIComponent(name)}`}>
            <SC.PackageHeading>{name}</SC.PackageHeading>
          </SC.PackageLink>
          {isTextMatch && <SC.ChipExactMatch>{text.exactMatch}</SC.ChipExactMatch>}
        </SC.MatchedPackage>
        <SC.Description>{description}</SC.Description>
        <SC.KeywordsList>
          {keywords?.map((keyword, i) => (
            <li key={keyword + i}>
              <Link
                to={`?text=keywords:${keyword}`}
                css={{
                  '&:focus': {
                    outline: '1px dotted rgba(0,0,0,.9)',
                    display: 'inline-block',
                    borderRadius: '4px',
                  },
                }}
              >
                <Chip>{keyword}</Chip>
              </Link>
            </li>
          ))}
        </SC.KeywordsList>
        <SC.PublishInfo>
          <SC.Username>{publisher.username}</SC.Username>
          <SC.PublishDetails>{`published ${version} • ${format(
            new Date(date),
            'MMMM dd yyyy',
          )}`}</SC.PublishDetails>
        </SC.PublishInfo>
      </SC.Package>
      <Score
        score={[
          {
            name: 'p',
            value: score.detail.popularity,
          },
          {
            name: 'q',
            value: score.detail.quality,
          },
          {
            name: 'm',
            value: score.detail.maintenance,
          },
        ]}
        max={1}
      />
    </SC.PackageSection>
  );
}
