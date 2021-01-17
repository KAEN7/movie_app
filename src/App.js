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

  componentDidMount() { // 랜더링 이후 즉시 호출되는 함수
    console.log('Componenet rendered');
  }
  componentDidUpdate() { // 랜더링이 완료된 직후에 호출
    console.log('I just updated');
  }
  componentWillUnmount() { // 컴포넌트가 사라지기전에 호출
    console.log('Goodbye, curel world');
  }

  render() {
    console.log('I am rendering');
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