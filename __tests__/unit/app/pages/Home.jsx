import React from 'react'
import { shallow } from 'enzyme'
import Home from 'app/pages/Home.jsx'

describe('app/pages/Home.jsx', () => {
  it('renders style component', () => {
    expect(Home).toBeDefined()
    const tree = shallow(<Home />)
    expect(tree.find('Page')).toBeDefined()
    expect(
      tree
        .find('Helmet')
        .find('title')
        .text()
    ).toEqual('Home Page')
    expect(tree.find('section').text()).toEqual('This is the home page')
  })
})
