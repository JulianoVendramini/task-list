import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 2rem;
    font-weight: 200;
    color: ${theme.colors.lightBlue};
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      font-size: 2.1rem;
      font-weight: 400;
      color: ${theme.colors.blue};
    }
  }
`
