import { expect } from 'chai';

import reducer from '../../src/reducers';

describe('root reducer', () => {

  it('has default initialState', () => {
    const initialState = {};

    expect(reducer(undefined, { type:'INVALID' })).to.deep.equal(initialState);
  });

});
