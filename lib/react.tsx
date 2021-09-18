import { forwardRef as fref, Ref, RefAttributes, ReactElement } from 'react';

export function forwardRef<T, P = {}>(render: (props: P, ref: Ref<T>) => ReactElement | null) {
  interface Return {
    (props: P & RefAttributes<T>): ReactElement | null;
  }
  return fref(render) as Return;
}
