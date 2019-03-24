import React from 'react'
import { Helmet } from 'react-helmet-async'

import Base from '../layouts/Base'

const Home = () => (
  <Base>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <main>
      Follow me at <a href="https://medium.com/@migcarva">@migcarva</a>
    </main>
  </Base>
)
export default Home
