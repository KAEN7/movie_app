import React from 'react';
import PropsTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  }

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;


// setState란
// React에서는 state를 직접 조작할 수 없기에 state의 변경이 필요할때 사용
// state가 변경되면 자동으로 다시 랜더링됨