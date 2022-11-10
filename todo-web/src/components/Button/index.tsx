import { ButtonVariants } from '../../types/web'

import * as S from './styles'

type Props = {
  text: string
  variant?: ButtonVariants
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  isLoading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  text,
  variant = 'default',
  leftIcon,
  rightIcon,
  isLoading,
  ...rest
}: Props) => {
  return (
    <S.Wrapper variant={variant} {...rest}>
      <S.Content>
        {isLoading ? (
          <h1>loading</h1>
        ) : (
          <>
            {leftIcon && <S.IconWrapper>{leftIcon}</S.IconWrapper>}
            <S.Text>{text}</S.Text>
            {rightIcon && <S.IconWrapper>{rightIcon}</S.IconWrapper>}
          </>
        )}
      </S.Content>
    </S.Wrapper>
  )
}

export default Button
