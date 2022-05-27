const getOpacityColors = (color, opacity) => {
  return Object.keys(opacity).reduce((acc, opacityKey) => {
    return {
      ...acc,
      [`${color.key}${opacityKey}`]: `${color.value}${opacity[opacityKey]}`,
    }
  }, {})
}

export const getColors = (palette, opacity) => {
  return Object.keys(palette).reduce((acc, colorKey) => {
    return {
      ...acc,
      ...getOpacityColors({ key: colorKey, value: palette[colorKey] }, opacity),
      [colorKey]: palette[colorKey],
    }
  }, {})
}

export const pixelate = (value) => `${value}px`
