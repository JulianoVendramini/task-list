import * as S from './styles'

type Props = {
  text: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonAddNewTasksList = ({ text, ...rest }: Props) => {
  return (
    <S.Wrapper>
      <span {...rest}>{text}</span>
    </S.Wrapper>
  )
}

export default ButtonAddNewTasksList
