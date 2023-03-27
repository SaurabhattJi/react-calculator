import "./App.css";
import { useState } from "react";
import { FaSquareRootAlt } from "react-icons/fa";
import { BsBackspace } from "react-icons/bs";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    console.log(e.target.innerText);
    setResult(result.concat(e.target.innerText));
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      // eslint-disable-next-line
      setResult(eval(result).toString());
    } catch {
      setResult("! Error");
    }
  };
  const sqroot = () => {
    setResult(Math.sqrt(result).toFixed(2));
  };
  // const root = () => {
  //   setResult(Math.pow(result).toString());
  // };

  return (
    <div className="container">
      <div className="wrapper">
        <input className="screen" value={result} />

        <div onClick={clear} className="btn light-gray">
          C
        </div>
        <div onClick={backspace} className="btn light-gray">
          <BsBackspace />
        </div>
        <div onClick={sqroot} className="btn light-gray">
          <FaSquareRootAlt />
        </div>
        <div onClick={handleClick} name="/" className="btn orange">
          /
        </div>
        <div onClick={handleClick} name="7" className="btn">
          7
        </div>
        <div onClick={handleClick} name="8" className="btn">
          8
        </div>
        <div onClick={handleClick} name="9" className="btn">
          9
        </div>
        <div onClick={handleClick} name="*" className="btn orange">
          *
        </div>
        <div onClick={handleClick} name="4" className="btn">
          4
        </div>
        <div onClick={handleClick} name="5" className="btn">
          5
        </div>
        <div onClick={handleClick} name="6" className="btn">
          6
        </div>
        <div onClick={handleClick} name="+" className="btn orange">
          +
        </div>
        <div onClick={handleClick} name="1" className="btn">
          1
        </div>
        <div onClick={handleClick} name="2" className="btn">
          2
        </div>
        <div onClick={handleClick} name="3" className="btn">
          3
        </div>
        <div onClick={handleClick} name="-" className="btn orange">
          -
        </div>
        <div onClick={calculate} name="=" className="btn orange equal ">
          =
        </div>
        <div onClick={handleClick} name="0" className="btn ">
          0
        </div>
        <div onClick={handleClick} name="." className="btn">
          .
        </div>
      </div>
    </div>
  );
}

export default App;
