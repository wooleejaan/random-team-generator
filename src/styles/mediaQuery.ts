import { SerializedStyles, css } from '@emotion/react'

const breakPoints = {
  desktop: 1920,
  tablet: 1200,
  mobile: 767,
}

/**
 *
 * @use
 * ```js
 * ${MobileStyle(css`
 * 	font-size: 1.5rem;
 * 	font-weight: 700;
 * `)}
 * ```
 */
export const MobileStyle = (style: SerializedStyles) => css`
  @media screen and (max-width: ${breakPoints.mobile}px) {
    ${style}
  }
`

/**
 *
 * @use
 * ```js
 * ${TabletStyle(css`
 * 	font-size: 1.5rem;
 * 	font-weight: 700;
 * `)}
 * ```
 */
export const TabletStyle = (style: SerializedStyles) => css`
  @media screen and (max-width: ${breakPoints.tablet}px) {
    ${style}
  }
`

/**
 *
 * @use
 * ```js
 * ${DesktopStyle(css`
 * 	font-size: 1.5rem;
 * 	font-weight: 700;
 * `)}
 * ```
 */
export const DesktopStyle = (style: SerializedStyles) => css`
  @media screen and (max-width: ${breakPoints.desktop}px) {
    ${style}
  }
`
