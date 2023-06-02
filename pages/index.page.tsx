import * as S from './styles'
import { css } from '@emotion/react'

function IndexPage() {
  return (
    <S.Container>
      IndexPage
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

export default IndexPage
