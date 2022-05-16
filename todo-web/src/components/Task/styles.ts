import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

type Props = {
  isDone: boolean
}

export const Wrapper = styled.div`
  width: 100%;
  padding: 1.4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button:first-child {
    margin-right: 1rem;
  }

  button:last-child {
    margin-left: 1rem;
  }
`

export const Title = styled.span<Props>`
  position: relative;

  ${({ isDone }) => css`
    font-size: 2rem;
    cursor: pointer;

    ${isDone &&
    css`
      opacity: 0.7;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -0.5rem;
        display: block;
        width: 0%;
        height: 2px;
        background: ${theme.colors.lightBlue};
        animation: strikeitem 0.5s ease-out 0s forwards;
      }
    `}
  `}

  @keyframes strikeitem {
    to {
      width: calc(100% + 1rem);
    }
  }
`

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  padding: 0.4rem;
  border: none;
  outline: none;
  background: #e57373;
  cursor: pointer;

  svg {
    font-size: 1.6rem;
    color: white;
  }
`

export const UpdateButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  padding: 0.4rem;
  border: none;
  outline: none;
  background: #2399fb;
  cursor: pointer;

  svg {
    font-size: 1.6rem;
    color: white;
  }
`

export const ActionButtonWrapper = styled.div`
  display: flex;
  padding-left: 6rem;
`
