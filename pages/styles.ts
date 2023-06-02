import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
`

export const Item = styled.div`
  width: 5rem;
  height: 5rem;
  background: green;
`

export const Wrapper = styled.div`
  ${Item} + ${Item} {
    margin-top: 2rem;
  }
`
