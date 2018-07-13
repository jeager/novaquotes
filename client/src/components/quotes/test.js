import React from 'react'
import Quotes from './'
import { shallow } from 'enzyme'
import ShallowRenderer from 'react-test-renderer/shallow'

test('Should render correctly', () => {
  const renderer = new ShallowRenderer()
  const component = renderer.render(<Quotes/>)

  expect(component).toMatchSnapshot()
})