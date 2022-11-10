import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Input = styled.textarea`
  ${({ theme }) => css`
    padding: 0.8rem 1.2rem;
    border: 1px solid ${theme.colors.lightBlue};
    border-radius: 0.4rem;
    font-size: 1.6rem;
    color: ${theme.colors.darkBlue};
    resize: none;

    &::-webkit-scrollbar {
      width: 0.4rem;
    }

    &::-webkit-scrollbar-thumb {
      ${({ theme }) => css`
        color: ${theme.colors.lightBlue};
      `}
    }

    &:focus {
      outline: none;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0.2rem 0.1rem 0.1rem ${theme.colors.grey};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: 500;
    padding-bottom: 1rem;
    color: ${theme.colors.lightBlue};
  `}
`
