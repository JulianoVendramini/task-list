import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40rem;
  width: 40rem;
  border-radius: 1.8rem;
  background: ${theme.colors.grey};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`

export const Input = styled.input`
  font-size: 2.4rem;
  color: #575bde;
  border: none;
  outline: none;
  background: transparent;
`

export const TasksCount = styled.span`
  font-size: 1.8rem;
  color: ${theme.colors.lightBlue};
`

export const TasksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`
