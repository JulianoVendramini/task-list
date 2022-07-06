import * as S from './styles'

import { Variant } from './types'

type Props = {
  variant: Variant
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ActionButton = ({ children, variant, ...rest }: Props) => {
  return (
    <S.Wrapper variant={variant} {...rest}>
      {children}
    </S.Wrapper>
  )
}

export default ActionButton
