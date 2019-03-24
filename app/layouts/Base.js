import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Container from './_Container'

const Base = styled.div``

export default ({ children }) => (
  <Base>
    <Header />
    <Container>{children}</Container>
  </Base>
)
