import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

//*필요한 컴포넌트*
//타이틀, 사진, 결과 컴포넌트들
//나 vs 컴퓨터 >> 2개의 박스
//나는 가위, 바위, 보 버튼 클릭
//컴퓨터는 랜덤
// 승패 결과를 따진다
// 승패는 테두리 색이 바뀐다

const choice = {
  rock: {
    name: "Rock",
    img: "https://www.thoughtco.com/thmb/Uh06xuGPA6HKNbaxpNsOjR7CjPY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rhyolite-1057171452-5c911d4b46e0fb000187a397.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ38TBstKfakVftAsZWyUW2O5fbPniEx3lDk1novZubeie57UUy5gNVPTOPF6AXZ2lkHj6ceF8RBcC2XoAxMSo",
  },
  paper: {
    name: "Paper",
    img: "https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
    console.log(userChoice);
  };

  const judgement = (user, computer) => {
    if (user.name == computer.name) {
      return "Tie";
    } else if (user.name == "Rock") {
      return computer.name == "Scissors" ? "WIN" : "LOSE";
    } else if (user.name == "Scissors") {
      return computer.name == "Paper" ? "WIN" : "LOSE";
    } else if (user.name == "Paper") {
      return computer.name == "Rock" ? "WIN" : "LOSE";
    }
  };
  //user == computer >> tie
  //user == rock / computer == scissors  >> user win
  //user == rock / computer == paper     >> user lose

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 배열로 만들어준다

    let randomItem = Math.floor(Math.random() * itemArray.length);
    let finalItem = itemArray[randomItem];
    return choice[finalItem];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("rock")}>Rock</button>
        <button onClick={() => play("paper")}>Paper</button>
        <button onClick={() => play("scissors")}>Scissors</button>
      </div>
    </div>
  );
}
//*주의*
// <button onClick={play("rock")}>Rock</button>
// <button onClick={play("paper")}>Paper</button>
// <button onClick={play("scissors")}>Scissors</button>
// 이런식으로 있으면,페이지가 렌더 될 때 바로 함수를 바로 실행시켜버림

//>>>>>콜백함수 형태로 전달해줘야 함
export default App;
