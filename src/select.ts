export const getSelectText = (): string => {
  return window?.getSelection?.()?.toString() ?? ''
}
