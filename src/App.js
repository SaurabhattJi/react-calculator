import "./App.css";
import { useState, useEffect } from "react";
import { HiOutlineBackspace } from "react-icons/hi";
import { BsBackspace } from "react-icons/bs";

function App() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState(0);
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };
  const percent = () => {};
  const delePrev = () => {
    setPreState(preState.slice(0, -1));
    setCurState(curState.slice(0, -1));
    setInput(input.slice(0, -1));
  };
  const operatorType = (e) => {};
  const inputNumber = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;
    if (total) {
      setPreState("");
    }
    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);

  const equals = (e) => {};

  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">{input}</div>
        <div className="btn light-gray" onClick={reset}>
          C
        </div>
        <div className="btn light-gray" onClick={delePrev}>
          {/* <HiOutlineBackspace /> */}
          <BsBackspace />
        </div>
        <div className="btn light-gray" onClick={percent}>
          %
        </div>
        <div className="btn orange" onClick={operatorType}>
          &divide;
        </div>
        <div className="btn" onClick={inputNumber}>
          7
        </div>
        <div className="btn" onClick={inputNumber}>
          8
        </div>
        <div className="btn" onClick={inputNumber}>
          9
        </div>
        <div className="btn orange" onClick={operatorType}>
          &times;
        </div>
        <div className="btn" onClick={inputNumber}>
          4
        </div>
        <div className="btn" onClick={inputNumber}>
          5
        </div>
        <div className="btn" onClick={inputNumber}>
          6
        </div>
        <div className="btn orange" onClick={operatorType}>
          +
        </div>
        <div className="btn" onClick={inputNumber}>
          1
        </div>
        <div className="btn" onClick={inputNumber}>
          2
        </div>
        <div className="btn" onClick={inputNumber}>
          3
        </div>
        <div className="btn orange" onClick={operatorType}>
          -
        </div>
        <div className="btn orange equal " onClick={equals}>
          =
        </div>
        <div className="btn " onClick={inputNumber}>
          0
        </div>
        <div className="btn" onClick={inputNumber}>
          .
        </div>
      </div>
    </div>
  );
}

export default App;
