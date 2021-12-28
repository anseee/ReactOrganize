import React, { Component } from 'react';

class Counter extends Component {
  // 생성자
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state 조회
    return (
      <div>
        <h1>{number}</h1>
        <h1>바뀌지 않는 값: {fixedNumber}</h1>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });

            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('call setState');
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
