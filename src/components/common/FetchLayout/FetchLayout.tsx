import { ReactNode } from 'react';
import { FetchResponse } from '../../../api/hooks/useFetch';

type LayoutState = FetchResponse;

type LayoutSlots = {
  Loader?: ReactNode;
  ErrorComp?: ReactNode;
  Content: (props: { data: any } & any) => JSX.Element;
};

type LayoutSlotProps = {
  Content?: Record<string, any>;
};

type FetchLayoutProps = {
  slots: LayoutSlots;
  state: LayoutState;
  slotProps?: LayoutSlotProps;
};

export default function FetchLayout({ state, slots, slotProps }: FetchLayoutProps) {
  const { isFetching, isFetched, error, data } = state;
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
