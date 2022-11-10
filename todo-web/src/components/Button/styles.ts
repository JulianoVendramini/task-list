import styled, { css } from 'styled-components'
import { ButtonVariants } from '../../types/web'

type Props = {
  variant: ButtonVariants
}

const getVariantStyles = (variant: ButtonVariants) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${({ theme }) => theme.colors.lightBlue};
        color: ${({ theme }) => theme.colors.white};
        border: none;
        padding: 1rem 2rem;
        transition: all 0.3s ease-in-out;

        &:hover {
          scale: 1.04;
        }
      `

    case 'link':
      return css`
        background-color: transparent;
        border: none;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.darkBlue};

        span {
          font-size: 1.6rem;
        }
      `

    case 'secondary':
      return css`
        background-color: ${({ theme }) => theme.colors.darkBlue};
        color: ${({ theme }) => theme.colors.white};
        border: none;
        padding: 1rem 2rem;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: ${({ theme }) => theme.colors.lightBlue};
          scale: 1.01;
        }
      `

    default:
      return css`
        background-color: ${({ theme }) => theme.colors.lightBlue};
        color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.lightBlue};
        padding: 1rem 2rem;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: ${({ theme }) => theme.colors.darkBlue};
          transform: scale(1.03);
        }
      `
  }
}

export const Wrapper = styled.button<Props>`
  ${({ variant }) => css`
    padding: 0.4rem 1rem;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    ${getVariantStyles(variant)}

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `}
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Text = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0 0.8rem;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
`
