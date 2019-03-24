import React from 'react'
import { shallow } from 'enzyme'
import Container from 'app/layouts/_Container.jsx'

describe('app/layouts/_Container.jsx', () => {
  it('renders Container component', () => {
    expect(Container).toBeDefined()
    const tree = shallow(<Container />)

    expect(tree.find('Container')).toBeDefined()
  })
})
