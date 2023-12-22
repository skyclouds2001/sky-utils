export const clickOutside = (
  el: Node,
  callback: () => void | Promise<void>
): void => {
  document.addEventListener('click', (e) => {
    if (!el.contains(e.target as Node)) {
      void callback()
    }
  })
}
