import { ReactNode } from 'react';

type LayoutState = {
  isStartedFetch: boolean;
  isFetching: boolean;
  error: Error | null;
  data: unknown;
};

type LayoutSlots = {
  PreFetchComp?: ReactNode;
  LoaderComp?: ReactNode;
  ErrorComp?: ReactNode;
  DataComp: (props: { data: any } & any) => JSX.Element;
  NoData?: ReactNode;
};

type LayoutSlotProps = {
  DataComp?: any;
};

type FetchLayoutProps = {
  slots: LayoutSlots;
  state: LayoutState;
  slotProps?: LayoutSlotProps;
};

export default function FetchLayout({ state, slots, slotProps }: FetchLayoutProps) {
  const { isStartedFetch, isFetching, error, data } = state;
  const {
    PreFetchComp = null,
    LoaderComp = null,
    ErrorComp = null,
    DataComp,
    NoData = null,
  } = slots;

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
    return <DataComp data={data} {...slotProps} />;
  }

  return NoData;
}
