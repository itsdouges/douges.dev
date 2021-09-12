import { css, CSSObject, SerializedStyles } from '@emotion/react';

export default function cssMap<TCSSInput extends string>(cssInput: Record<TCSSInput, CSSObject>) {
  const styles: Record<TCSSInput, SerializedStyles> = {} as Record<TCSSInput, SerializedStyles>;

  for (let key in cssInput) {
    styles[key] = css(cssInput[key]);
  }

  return styles;
}
