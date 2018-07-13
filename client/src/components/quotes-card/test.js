import React from 'react'
import { QuoteCard } from './'
import renderer from 'react-test-renderer'

const quote = {
  'id': 0,
  'user': {
    'name': 'Larsen Reilly',
    'photo': 'http://placehold.it/32x32'
  }
}

test('Should render correctly', () => {
  const component = renderer.create(
    <QuoteCard key={quote.id} quote={quote} index={1}/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})