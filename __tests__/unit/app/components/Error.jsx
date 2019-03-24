import React from 'react'
import { shallow } from 'enzyme'
import Error from 'app/components/Error.jsx'

describe('app/components/Error.jsx', () => {
  it('renders Error component', () => {
    expect(Error).toBeDefined()
    const tree = shallow(<Error />)
    expect(tree.text()).toContain('Error!')
  })
})
