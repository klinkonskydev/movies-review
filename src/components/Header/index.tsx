import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

const Header = () => (
    <S.Wrapper>
        <Link href="/">
            <a>
                <Image src="/logo.svg" width={184.74} height={24.03} />
            </a>
        </Link>
    </S.Wrapper>
)
export default Header
