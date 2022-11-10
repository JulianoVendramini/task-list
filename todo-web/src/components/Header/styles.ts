import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 8rem 0 4rem 0;

    &::after {
      content: '';
      width: 100%;
      height: 2px;
      background-color: ${theme.colors.lightBlue};
    }

    &::before {
      content: '';
      width: 10rem;
      height: 2px;
      background-color: ${theme.colors.lightBlue};
    }
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: 2.8rem;
    color: ${theme.colors.darkBlue};
    font-weight: 700;
    padding: 0 2.2rem;

    p {
      font-weight: 300;
      color: ${theme.colors.lightBlue};
      padding-left: 1rem;
    }
  `}
`
