import styled, { css } from 'styled-components'
import { Variant } from './types'

const variantColors = {
  remove: '#e57373',
  update: '#2399fb'
}

type Props = {
  variant: Variant
}

export const Wrapper = styled.button<Props>`
  ${({ variant }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.4rem;
    padding: 0.4rem;
    border: none;
    outline: none;
    background: ${variantColors[variant]};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-size: 1.4rem;
    color: white;

    &:hover {
      background: ${variantColors[variant]}95;
    }
  `}
`
