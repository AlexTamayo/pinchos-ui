/**
 * Linearly map a value v from [inMin, inMax] to [outMin, outMax].
 * No clamping: the result can fall outside [outMin, outMax] if v is
 * outside the input span.
 */
export function linearInterpolation(
  v: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  if (inMin === inMax) return outMin;          // avoid ÷0
  const t = (v - inMin) / (inMax - inMin);     // normalise to 0-1
  return outMin + t * (outMax - outMin);       // unrestricted linear map
}
