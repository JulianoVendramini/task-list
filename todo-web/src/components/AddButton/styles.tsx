import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 2rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  background: transparent;
  transition: all 0.2s ease-in-out;

  svg {
    font-size: 1.6rem;
    color: ${theme.colors.lightBlue};
  }

  &:hover {
    background: ${theme.colors.white};
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);

    svg {
      color: ${theme.colors.blue};
    }
  }
`
