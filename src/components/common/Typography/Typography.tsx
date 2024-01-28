import { ReactNode } from 'react';

export default function Typography({
  children,
  style,
  ...restProps
}: {
  children?: ReactNode;
  style: any;
}) {
  return (
    <p
      style={{
        lineHeight: 1.15,
        ...style,
      }}
      {...restProps}
    >
      {children}
    </p>
  );
}
