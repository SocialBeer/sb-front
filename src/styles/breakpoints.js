import { pixelate } from './helpers'

export const ScreenSize = {
  MOBAIL: 'MOBAIL',
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
  XLARGE: 'XLARGE',
  MAX: 'MAX',
}

export const breakpoints = {
  [ScreenSize.MOBAIL]: 0,
  [ScreenSize.LARGE]: 1440,
}

export const getMediaQuery = (minWidth, maxWidth) => {
  return `@media screen and (min-width: ${pixelate(breakpoints[minWidth])}) ${
    maxWidth ? `and (max-width: ${pixelate(breakpoints[maxWidth])})` : ''
  }`
}
