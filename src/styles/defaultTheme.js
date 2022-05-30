import { colors } from './colors'

export const defaultTheme = {
  header: {
    background: colors.transparent,
    logoColor: colors.black,
  },
  linksColor: colors.pink[500],
  input: {
    main: colors.pink[500],
    error: colors.red[500],
  },
  buttons: {
    contained: {
      background: colors.gray[900],
      borderColor: colors.gray[900],
      textColor: colors.white,
    },
    outlined: {
      background: colors.transparent,
      borderColor: colors.gray[900],
      textColor: colors.gray[900],
      hoverBackground: colors.black10,
    },
    text: {
      background: colors.transparent,
      borderColor: colors.transparent,
      textColor: colors.gray[900],
      hoverBackground: colors.black10,
    },
  },
}
