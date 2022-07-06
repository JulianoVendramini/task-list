import * as S from './styles'

type Props = React.InputHTMLAttributes<HTMLInputElement>

const Input = ({ ...rest }: Props) => {
  return <S.Wrapper {...rest} />
}

export default Input
