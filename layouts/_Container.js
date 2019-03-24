import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 75rem;
`

export default ({children}) => (
  <Container>
    {children}
  </Container>
)
