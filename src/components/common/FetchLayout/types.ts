import { ReactNode } from 'react';
import { FetchResponse } from 'src/api/hooks/useFetch';

type LayoutState = FetchResponse<unknown>;

type LayoutSlots = {
  Loader?: ReactNode;
  ErrorComp?: ReactNode;
  Content: (props: { data: any } & any) => JSX.Element;
};

type LayoutSlotProps = {
  Content?: Record<string, any>;
};

export type FetchLayoutProps = {
  slots: LayoutSlots;
  res: LayoutState;
  slotProps?: LayoutSlotProps;
};
