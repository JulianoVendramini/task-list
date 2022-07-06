import Input from '../Input'
import ConfirmButton from '../ConfirmButton'

import * as S from './styles'

type Props = {
  title: string
  buttonText: string
  inputValue: string
  isLoading?: boolean
  disable?: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleClose: () => void
  handleConfirm: () => void
}

const ModalInputContent = ({
  title,
  buttonText,
  inputValue,
  isLoading,
  handleChange,
  handleClose,
  handleConfirm,
  disable = false
}: Props) => {
  const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleConfirm()
    }
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>{title}</S.Title>
      </S.Header>
      <S.CloseButton onClick={handleClose}>Cancel</S.CloseButton>
      <S.InputWrapper>
        <Input
          autoFocus
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeypress}
        />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <ConfirmButton
          text={buttonText}
          isLoading={isLoading}
          onClick={handleConfirm}
          disabled={disable}
        />
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default ModalInputContent
