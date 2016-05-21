import { expect } from 'chai';

import createComponent from '../helpers/shallowRenderHelper';
import NavComponent from '../../src/components/nav/';

describe('Nav Component', () => {
  let component;

  beforeEach(() => {
    component = createComponent(NavComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('nav-component');
  });
});
