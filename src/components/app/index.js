import React from 'react';
import Nav from '../nav';

export default React.createClass({
  render: function() {
    return (
      <div className='app-component'>
        <Nav />

        {this.props.children}
      </div>
    );
  }
});
