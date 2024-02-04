import { css } from '@emotion/react'
import { COLOR } from './variables'

const flex = (justifyContent = 'center', alignItems = 'center') => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`

const button = () => css`
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  text-align: center;
  background-color: ${COLOR.primary};
`

const shadow = () => css`
  box-shadow: 9px 7px 24px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 9px 7px 24px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 7px 24px 0px rgba(0, 0, 0, 0.75);
`

const mixins = {
  flex,
  button,
  shadow,
}

export default mixins
