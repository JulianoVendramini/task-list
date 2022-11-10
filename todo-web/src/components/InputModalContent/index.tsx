import Button from '../Button'
import Input from '../Input'
import * as S from './styles'

type Props = {
  title: string
  closeModal: () => void
  inputValue: string
  onChange: (value: string) => void
  onConfirm: () => void
  disabledButton?: boolean
}

const InputModalContent = ({
  title,
  inputValue,
  onChange,
  closeModal,
  onConfirm,
  disabledButton = false
}: Props) => {
  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        <Button text="CLOSE" onClick={closeModal} variant="link" />
      </S.ButtonWrapper>
      <S.InputWrapper>
        <Input
          label={title}
          value={inputValue}
          onChange={(e) => onChange(e.target.value)}
        />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <Button
          variant="secondary"
          text="Confirm"
          onClick={onConfirm}
          disabled={disabledButton}
        />
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default InputModalContent
