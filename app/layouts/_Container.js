import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  max-width: 75rem;
  display: flex;
`

export default ({children}) => (
  <Container>
    {children}
  </Container>
)
