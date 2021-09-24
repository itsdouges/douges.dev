import { token } from '@atlaskit/tokens';

const customTokens = {
  'color.background.inverse': 'var(--background-inverse)',
  'color.background.warning.inverse': 'var(--background-warning-inverse)',
  'color.background.interaction.hovered': 'var(--background-interaction-hovered)',
  'color.background.interaction.pressed': 'var(--background-interaction-pressed)',
  'color.background.interaction.inverse.hovered': 'var(--background-interaction-inverse-hovered)',
  'color.background.interaction.inverse.pressed': 'var(--background-interaction-inverse-pressed)',
} as const;

type Tokens = Parameters<typeof token>[0];

export default function tkn(name: keyof typeof customTokens | Tokens) {
  const names: any = name as any;
  return (customTokens as any)[names] || token(names);
}
