import Header from 'src/components/common/Header/Header';
import { text } from 'src/configs/configs';
import { HiddenHeading } from 'src/components/common/HiddenHeading/HiddenHeading';
import SearchResult from './SearchResult/SearchResult';

export default function SearchPage() {
  return (
    <div>
      <Header />
      <main>
        <HiddenHeading as={'h1'}>{text.searchResults}</HiddenHeading>
        <SearchResult />
      </main>
    </div>
  );
}
