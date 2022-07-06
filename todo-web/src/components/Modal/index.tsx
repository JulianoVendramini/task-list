import { useRef } from 'react'

import useClickOutside from '../../hooks/useClickOutside'

import * as S from './styles'

type Props = {
  isOpenned: boolean
  closeModal: () => void
  children: React.ReactNode
}

const Modal = ({ children, isOpenned, closeModal }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null)

  useClickOutside(contentRef, closeModal)

  if (!isOpenned) return null

  return (
    <S.Wrapper>
      <div ref={contentRef}>{children}</div>
    </S.Wrapper>
  )
}

export default Modal
