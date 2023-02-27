import * as S from './Home.style'
import { css } from '@emotion/react'

function Home() {
  return (
    <S.Container>
      Home
      <h1
        css={css`
          color: white;
        `}
      >
        <S.Wrapper>
          <S.Item>item 1</S.Item>
          <S.Item>item 2</S.Item>
        </S.Wrapper>
      </h1>
    </S.Container>
  )
}

export default Home
