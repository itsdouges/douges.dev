import { RefCallback, MutableRefObject } from 'react';

type Ref<T> = RefCallback<T> | MutableRefObject<T>;

export default function mergeRefs<TRef>(...refs: (undefined | Ref<TRef | null>)[]) {
  return (ref: TRef | null) => {
    refs.forEach((parentRef) => {
      if (typeof parentRef === 'object') {
        parentRef.current = ref;
      } else if (typeof parentRef === 'function') {
        parentRef(ref);
      }
    });
  };
}
