import * as S from './styles'

type Props = {
  label: string
  rows?: number
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Input = ({ label, rows = 3, ...rest }: Props) => {
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Input rows={rows} {...rest} />
    </S.Wrapper>
  )
}

export default Input
