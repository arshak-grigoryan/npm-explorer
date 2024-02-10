import { FetchLayoutProps } from './types';

export default function FetchLayout({ res, slots, slotProps }: FetchLayoutProps) {
  const { loading, error, data } = res;
  const { Loader = null, ErrorComp = null, Content } = slots;

  if (loading) {
    return Loader;
  }

  if (error) {
    return ErrorComp;
  }

  if (data) {
    return <Content data={data} {...slotProps?.Content} />;
  }

  return null;
}
