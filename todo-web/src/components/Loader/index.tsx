import Image from 'next/image'

import * as S from './styles'

type Props = {
  isLoading?: boolean
}

const Loader = ({ isLoading }: Props) => (
  <S.Wrapper isLoading={isLoading}>
    <Image src={`/dots-white.svg`} width={40} height={10} />
  </S.Wrapper>
)

export default Loader
