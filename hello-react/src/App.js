// Virtual Dom에서 컴포넌트를 감지해 낼때 효율적으로 비교하기 위해서 
// 컴포넌트 내부는 하나의 DOM 트리로 이루어져야 한다.
// <div> 사용 or Fragment 사용

// 삼항 연산자, 상수 변수 사용
// function App() {
//   const name = 'react';

//   return (
//     <>
//     {name === 'react' ? (
//       <h1>Hello React!</h1>
//     ) : (
//       <h2>How are you?</h2>
//     )} 
//     </>
//   )
// }

// AND 연산자
// function App() {
//   const name = "reacta";
//   return <div>
//     {name === 'reacta' && <h1>This is react</h1>}
//   </div>
// }


// function App() {
//   const name = 'react';
//   const style = {
//     backgroundColor: 'black',
//     color: 'aqua',
//     fontSize: '48px',
//     fontWeight: 'bold',
//     padding: 16 // px
//   };

//   return <div style={style}>{name}</div>;
// }

// css className
// import './App.css';

// function App() {
//   const name = 'react';

//   return <div className="react">{name}</div>;
// }

// self-closing tag
// function App() {
//   const name = 'react';

//   return (
//     <>
//       <div className="react">{name}</div>
//       <input />
//     </>
//   )
// }

// 주석
function App() {
  const name = "react";
  return (
    <>
      {/* 주석은 이렇게 작성한다 */}
      <div className="react">{name}</div>
      // 이렇게 작성하거나
      /* 이렇게하면 페이지에 그대로 노출됨 */
      <input />
    </>
  );
}

export default App;
