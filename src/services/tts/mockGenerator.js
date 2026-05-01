export function generateMockAlignment(text) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word, index) => ({
      word,
      start: Number((index * 0.42).toFixed(2)),
      end: Number((index * 0.42 + 0.36).toFixed(2)),
    }))
}
