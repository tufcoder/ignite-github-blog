import { css } from 'styled-components'

/**
 *
 * @param pixels Number in pixels.
 * @param base Optional. Default 16px.
 * @returns A conversion to pixels in rem.
 */
export function pxToRem(pixels: number, base: number = 16) {
  return `${pixels / base}rem`
}

/**
 * Interface for transition properties.
 * @property `properties`: Strings[ ] for `transition-property`.
 * @property `duration`: String for `transition-duration`.
 * @property `timing`: String for `transition-timing-function`.
 */
interface TransitionProps {
  properties: string[]
  duration?: string
  timing?: string
}

/**
 * Rules to apply transition effects in properties.
 *
 * @param properties ['color', 'background-color', ...]
 * @param duration Optional. Default '0.3s'.
 * @param timing Optional. Default 'ease'.
 * @returns
 */
export const transition = ({
  properties,
  duration = '0.3s',
  timing = 'ease',
}: TransitionProps) => css`
  transition-property: ${properties.join(', ')};
  transition-duration: ${properties.map(() => duration).join(', ')};
  transition-timing-function: ${properties.map(() => timing).join(', ')};
`
