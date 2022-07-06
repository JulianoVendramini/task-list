import * as S from './styles'

type Props = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const AddButton = ({ children, ...rest }: Props) => {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>
}

export default AddButton
