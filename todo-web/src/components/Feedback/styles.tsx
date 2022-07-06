import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import theme from '../../styles/theme'

export const Toast = styled(ToastContainer)`
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
  }
  .Toastify__toast-body {
    font-size: 1.4rem;
  }
  .Toastify__progress-bar {
    background: ${theme.colors.blue};
  }
  .Toastify__close-button {
    &:hover {
      color: ${theme.colors.blue};
    }
  }
`
