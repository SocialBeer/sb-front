import { pixelate } from './helpers'

export const unit = 8

export const sizes = {
  full: '100%',
  mainWidth: '1440px',
}

export const getUnitAsPixels = (multiplier = 1) => {
  return pixelate(unit * multiplier)
}

export const getUnitsAsPixel = (...multipliers) => {
  if (!multipliers.length) {
    return pixelate(unit)
  }
  return multipliers
    .reduce((acc, multiplier) => {
      return acc + pixelate(unit * multiplier) + ' '
    }, '')
    .slice(0, -1)
}
