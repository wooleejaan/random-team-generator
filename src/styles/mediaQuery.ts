import { SerializedStyles, css } from '@emotion/react'
import { BREAK_POINTS } from './variables'

/**
 *
 * @use
 * ```js
 * ${inMobile(css`
 * 	font-size: 1.5rem;
 * 	font-weight: 700;
 * `)}
 * ```
 */
export const inMobile = (style: SerializedStyles) => css`
  @media screen and (max-width: ${BREAK_POINTS.mobile}px) {
    ${style}
  }
`

/**
 *
 * @use
 * ```js
 * ${inTablet(css`
 * 	font-size: 1.5rem;
 * 	font-weight: 700;
 * `)}
 * ```
 */
export const inTablet = (style: SerializedStyles) => css`
  @media screen and (max-width: ${BREAK_POINTS.tablet}px) {
    ${style}
  }
`

/**
 *
 * @use
 * ```js
 * ${inDesktop(css`
 * 	font-size: 1.5rem;
 * 	font-weight: 700;
 * `)}
 * ```
 */
export const inDesktop = (style: SerializedStyles) => css`
  @media screen and (max-width: ${BREAK_POINTS.desktop}px) {
    ${style}
  }
`
