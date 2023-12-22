enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const getPreferTheme = (): Theme => {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ? Theme.DARK
    : Theme.LIGHT
}

export const preferLight = (): boolean => {
  return getPreferTheme() === Theme.LIGHT
}

export const preferDark = (): boolean => {
  return getPreferTheme() === Theme.DARK
}
