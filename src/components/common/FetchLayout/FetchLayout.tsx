import { ReactNode } from 'react';

type LayoutState = {
  isStartedFetch: boolean;
  isFetching: boolean;
  error: Error | null;
  data: unknown;
};

type LayoutSlots = {
  PreFetchComp: ReactNode;
  LoaderComp: ReactNode;
  ErrorComp: ReactNode;
  Data: ReactNode;
  NoData: ReactNode;
};
type FetchLayoutProps = {
  slots: LayoutSlots;
  state: LayoutState;
};

export default function FetchLayout({ state, slots }: FetchLayoutProps) {
  const { isStartedFetch, isFetching, error, data } = state;
  const { PreFetchComp, LoaderComp, ErrorComp, Data, NoData } = slots;

  if (!isStartedFetch) {
    return PreFetchComp;
  }

  if (isFetching) {
    return LoaderComp;
  }

  if (error) {
    return ErrorComp;
  }

  if (data) {
    return Data;
  }

  return NoData;
}
