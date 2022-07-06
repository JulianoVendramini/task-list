import styled from 'styled-components'

type Props = {
  isLoading?: boolean
}

export const Wrapper = styled.div<Props>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${({ isLoading }) => (isLoading ? 'flex' : 'none')};
`
