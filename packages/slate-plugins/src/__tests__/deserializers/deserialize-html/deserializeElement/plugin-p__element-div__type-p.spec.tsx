/** @jsx jsx */

import { jsx } from '__test-utils__/jsx';
import { deserializeElement } from 'deserializers/deserialize-html/utils';
import { ParagraphPlugin } from 'elements/paragraph';

const el = document.createElement('div');
el.setAttribute('data-slate-type', 'p');

const input = {
  plugins: [ParagraphPlugin({ typeP: 'p' })],
  el,
  children: [{ text: 'test' }],
};

const output = (
  <p>
    <text>test</text>
  </p>
);

it('should be', () => {
  expect(deserializeElement(input)).toEqual(output);
});
