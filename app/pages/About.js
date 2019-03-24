import React from 'react'
import { Helmet } from 'react-helmet-async'

import Base from '../layouts/Base'

const About = () => (
  <Base>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <section>
      This is the about page
    </section>

  </Base>
)
export default About
