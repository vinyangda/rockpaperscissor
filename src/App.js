import logo from "./logo.svg";
import "./App.css";
import Box from "./components/Box";

//타이틀, 사진, 결과 컴포넌트들
//나 vs 컴퓨터 >> 2개의 박스
//나는 가위, 바위, 보 버튼 클릭
//컴퓨터는 랜덤
// 승패 결과를 따진다
// 승패는 테두리 색이 바뀐다

function App() {
  return (
    <div>
      <div className="main">
        <Box title="you" />
        <Box title="computer" />
      </div>
      <div className="main">
        <button>Rock</button>
        <button>Paper</button>
        <button>Scissor</button>
      </div>
    </div>
  );
}

export default App;
