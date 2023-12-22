export const getAncestors = (el: Node | null): Node[] => {
  const ancestors: Node[] = []
  while (el != null) {
    ancestors.unshift(el)
    el = el.parentNode
  }
  return ancestors
}

export const elementContains = (parent: Node, child: Node): boolean => {
  return parent !== child && parent.contains(child)
}
