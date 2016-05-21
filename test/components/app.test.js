import { expect } from 'chai';

import createComponent from '../helpers/shallowRenderHelper';
import AppComponent from '../../src/components/app';

describe('App Component', () => {
  let component;

  beforeEach(() => {
    component = createComponent(AppComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('app-component');
  });
});
