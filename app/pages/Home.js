import React from 'react'
import { Helmet } from 'react-helmet-async'

import Base from '../layouts/Base'

const Home = () => (
  <Base>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <section>
      This is the home page
    </section>
  </Base>
)
export default Home
