export const generateUUID = (): string => {
  return ([1e7].toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(
    /[018]/g,
    (c) =>
      (
        Number.parseInt(c) ^
        (crypto.getRandomValues(new Uint8Array(1))[0] &
          (15 >> (Number.parseInt(c) / 4)))
      ).toString(16)
  )
}
