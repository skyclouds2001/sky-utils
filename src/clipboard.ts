export const copyToClipboard = (data: string): Promise<void> => {
  return navigator.clipboard?.writeText?.(data)
}

export const legacyCopyToClipboard = (data: string): Promise<void> => {
  const el = document.createElement('textarea')
  el.value = data
  el.style.position = 'absolute'
  el.style.opacity = '0'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  return Promise.resolve()
}
