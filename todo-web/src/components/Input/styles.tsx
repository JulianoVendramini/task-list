import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.input`
  width: 100%;
  padding: 1.4rem;
  border: 1px solid ${theme.colors.lightBlue};
  background: ${theme.colors.grey};
  border-radius: 0.5rem;
  outline: none;
  color: ${theme.colors.darkBlue};
  font-size: 2rem;
  transition: all 0.2s ease-in-out;

  &:focus {
    box-shadow: ${theme.colors.lightBlue}60 0px 2px,
      ${theme.colors.lightBlue}30 0px 6px, ${theme.colors.lightBlue}20 0px 8px;
  }
`
