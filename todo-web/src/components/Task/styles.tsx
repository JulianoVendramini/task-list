import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

type Props = {
  isDone: boolean
}

export const Wrapper = styled.div<Props>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  padding: 0 1rem;
  overflow-wrap: break-word;
  background: ${({ isDone }) =>
    isDone ? theme.colors.grey : theme.colors.white};
  cursor: pointer;

  button:last-child {
    margin-left: 1rem;
  }

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }
`

export const Title = styled.span<Props>`
  ${({ isDone }) => css`
    width: 80%;
    height: 100%;
    position: relative;
    font-size: 2rem;
    text-decoration: ${isDone ? 'line-through' : 'none'};
    padding: 1.4rem 0;
  `}
`

export const ActionButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 6rem;
`
