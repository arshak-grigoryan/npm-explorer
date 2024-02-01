import { FetchLayoutProps } from './types';

export default function FetchLayout({ res, slots, slotProps }: FetchLayoutProps) {
  const { isFetching, isFetched, error, data } = res;
  const { Loader = null, ErrorComp = null, Content } = slots;

  if (!isFetched || isFetching) {
    return Loader;
  }

  if (data) {
    return <Content data={data} {...slotProps?.Content} />;
  }

  if (error) {
    return ErrorComp;
  }

  return null;
}
