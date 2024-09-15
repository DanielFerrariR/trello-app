import { Theme } from './theme';

type CssVariables = { [key: string]: string | number };

export const themeToCssVariables = (
  theme: Theme | string[],
  parents?: string[]
) => {
  let cssVariables: CssVariables = {};

  for (const [key, value] of Object.entries(theme)) {
    if (typeof value === 'string' || typeof value === 'number') {
      cssVariables[`--${[...(parents ?? []), key].join('-')}`] = value;
    } else {
      cssVariables = {
        ...cssVariables,
        ...themeToCssVariables(value, [...(parents ?? []), key]),
      };
    }
  }

  return cssVariables;
};
