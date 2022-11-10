import styled, { css } from 'styled-components'

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
  ${({ isDone, theme }) => css`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    cursor: pointer;

    transition: color 1s ease-in-out;

    ${isDone &&
    css`
      text-decoration: line-through;
      text-decoration-color: ${theme.colors.black};
      animation: strike 1s ease;
      color: ${({ theme }) => theme.colors.lightBlue};
    `}
  `}

  @keyframes strike {
    from {
      text-decoration-color: transparent;
    }
    to {
      text-decoration-color: auto;
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
