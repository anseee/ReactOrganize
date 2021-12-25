// Virtual Dom에서 컴포넌트를 감지해 낼때 효율적으로 비교하기 위해서 
// 컴포넌트 내부는 하나의 DOM 트리로 이루어져야 한다.
// <div> 사용 or Fragment 사용

function App() {
  return (
    <>
      <h1>Hello React!</h1>
      <h2>How are you?</h2>
    </>
  )
}
export default App;
