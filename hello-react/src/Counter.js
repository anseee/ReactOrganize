import React, { Component } from 'react';

class Counter extends Component {
  // 생성자
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  render() {
    const { number } = this.state; // state 조회
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }); // setState를 사용하여 state에 새로운 값을 넣을 수 있다.
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
