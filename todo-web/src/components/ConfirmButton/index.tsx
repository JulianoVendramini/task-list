import Loader from '../Loader'
import * as S from './styles'

type Props = {
  text: string
  isLoading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ConfirmButton = ({ text, isLoading, ...rest }: Props) => {
  return (
    <S.Wrapper {...rest}>
      <Loader isLoading={isLoading} />
      {!isLoading && <S.Text>{text}</S.Text>}
    </S.Wrapper>
  )
}

export default ConfirmButton
