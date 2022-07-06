import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: ${theme.colors.green};
  width: 10rem;
  height: 4rem;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:disabled,
  &[disabled] {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: ${theme.colors.darkGreen}90;
  }
`

export const Text = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${theme.colors.white};
`
