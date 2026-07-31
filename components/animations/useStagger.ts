export function useStagger(index: number, baseDelayMs = 120): number {
  return index * baseDelayMs
}