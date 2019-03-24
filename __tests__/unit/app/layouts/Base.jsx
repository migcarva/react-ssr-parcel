import React from 'react'
import { shallow } from 'enzyme'
import Base from 'app/layouts/Base.jsx'

describe('app/layouts/Base.jsx', () => {
  it('renders Base component', () => {
    expect(Base).toBeDefined()
    const tree = shallow(<Base />)

    expect(tree.find('Header')).toBeDefined()
    expect(tree.find('Container')).toBeDefined()
  })
})
