import { getColors } from './helpers'

export const commonColors = {
  black: '#000000',
  white: '#ffffff',
}

export const palette = {
  transparent: 'transparent',
  gray: {
    900: '#212121',
  },
  pink: {
    500: '#e91e63',
  },
  red: {
    500: '#d21404',
  },
}

export const opacity = {
  10: '1A',
  15: '26',
  20: '33',
  30: '4D',
  40: '66',
  50: '80',
  60: '99',
  70: 'B3',
  80: 'CC',
  90: 'E6',
}

export const colors = { ...getColors(commonColors, opacity), ...palette }
