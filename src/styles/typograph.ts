import { css } from 'styled-components'

import { pxToRem } from './functions'

/**
 * Rules defining the defaults for the font-family `Nunito`.
 */
export const fontNunito = css`
  font-style: normal;
  font-family: 'Nunito', sans-serif;
  line-height: 1.6;
`

/**
 * Interface defining the `bold` property as `true` or `false`.
 */
interface FontProps {
  bold?: boolean
}

/**
 *
 * @param props Optional. Pass an object `{isBold: true}` if you want a bold.
 * @returns Rules for font Nunito `extra-small` 12px.
 */
export const nunitoXS = (props?: FontProps) => css`
  ${fontNunito}
  font-size: ${pxToRem(12)};
  font-weight: ${props?.bold ? 'bold' : 'normal'};
`

/**
 *
 * @param props Optional. Pass an object `{isBold: true}` if you want a bold.
 * @returns Rules for font Nunito `small` 14px.
 */
export const nunitoS = (props?: FontProps) => css`
  ${fontNunito}
  font-size: ${pxToRem(14)};
  font-weight: ${props?.bold ? 'bold' : 'normal'};
`

/**
 *
 * @param props Optional. Pass an object `{isBold: true}` if you want a bold.
 * @returns Rules for font Nunito `regular` 16px.
 */
export const nunitoR = (props?: FontProps) => css`
  ${fontNunito}
  font-size: ${pxToRem(16)};
  font-weight: ${props?.bold ? 'bold' : 'normal'};
`

/**
 *
 * @param props Optional. Pass an object `{isBold: true}` if you want a bold.
 * @returns Rules for font Nunito `medium` 18px.
 */
export const nunitoM = (props?: FontProps) => css`
  ${fontNunito}
  font-size: ${pxToRem(18)};
  font-weight: ${props?.bold ? 'bold' : 'normal'};
`

/**
 *
 * @param props Optional. Pass an object `{isBold: true}` if you want a bold.
 * @returns Rules for font Nunito `large` 20px.
 */
export const nunitoL = (props?: FontProps) => css`
  ${fontNunito}
  font-size: ${pxToRem(20)};
  font-weight: ${props?.bold ? 'bold' : 'normal'};
`
/**
 *
 * @param props Optional. Pass an object `{isBold: true}` if you want a bold.
 * @returns Rules for font Nunito `extra-large` 24px.
 */
export const nunitoXL = (props?: FontProps) => css`
  ${fontNunito}
  font-size: ${pxToRem(24)};
  font-weight: ${props?.bold ? 'bold' : 'normal'};
`
