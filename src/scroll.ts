export const smoothScroll = (element: Element): void => {
  element.scrollIntoView({
    behavior: 'smooth',
  })
}
