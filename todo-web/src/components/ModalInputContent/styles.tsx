import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.div`
  position: relative;
  width: 60rem;
  background: ${theme.colors.white};
  border-radius: 0.5rem;
`

export const Header = styled.div`
  padding: 5rem 4rem 2rem 4rem;
`

export const Title = styled.span`
  font-size: 2.6rem;
  color: ${theme.colors.blue};
`

export const CloseButton = styled.div`
  position: absolute;
  top: 4rem;
  right: 5rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${theme.colors.lightBlue};
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${theme.colors.blue};
  }
`

export const InputWrapper = styled.div`
  width: 100%;
  height: 14rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem 4rem;
`
