'use strict';

import React from 'react';

class Counter extends React.Component {

  state = {
    count: 0
  };

  countUp() {
    this.setState({ count: ++this.state.count });
  }

  countDown() {
    if (this.state.count > 0) {
      this.setState({ count: --this.state.count });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.countUp.bind(this)}>Count UP</button>
        <button onClick={this.countDown.bind(this)}>Count Down</button>
        <p>Count: {this.state.count}</p>
      </div>
    )
  }

}

export default Counter;
