import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
  width: 100vw;
  //height: 100vh;
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ({children}) => (
  <Container>
    {children}
  </Container>
)
