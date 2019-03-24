import React from 'react'
import { shallow } from 'enzyme'
import Loading from 'app/components/Loading.jsx'

describe('app/components/Loading.jsx', () => {
  it('renders Loading component', () => {
    expect(Loading).toBeDefined()
    const tree = shallow(<Loading />)
    expect(tree.text()).toContain('Loading...')
  })
})
