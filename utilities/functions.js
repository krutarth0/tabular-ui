export function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

export function unique_key() {
  let r = Math.random().toString(36).substring(10);
  return r;
}
