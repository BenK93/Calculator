import './App.css';
import {useState} from "react";
import API from './services/calculator-service';


function App() {
  const [numbers, setNumbers] = useState([]);
  const [resetNext, setResetNext] = useState(false);
  const [displayNum, setDisplayNum] = useState("0");
  const [color, setColor] = useState("white");
  const [operand, setOperand] = useState("?");

  const setDisplay = (number) => {
    let toDisplay = parseFloat(displayNum + number);
    if(operand !== '?'){
        if(resetNext){
            setDisplayNum(number);
            setResetNext(false);
        }else{
            setDisplayNum(toDisplay);
        }
    }else if(parseInt(number) >= 0 && parseInt(number) <= 9){
      setDisplayNum(toDisplay);
    }else if( number === '.'){
      if(!displayNum.toString().includes('.')){
        setDisplayNum(displayNum + number);
      }
    }
  }

  const invert = () => {
  }

  const operation = (opType) => {
    setNumbers([...numbers, displayNum])
    setResetNext(true);
    setOperand(opType)
  }

  const clear = () => {
    setDisplayNum("0");
    setNumbers([]);
    setColor("white");
  }

  const equals = async () => {
      setTimeout(setNumbers(oldArray => [...oldArray, displayNum]))
      let result = 0;
      let response;
      const params = {
          x: numbers[0],
          y: displayNum,
      }
      switch (operand) {
          case '+':
              response = await API.get('/add', {params})
              break;
          case '-':
              response = await API.get('/sub', {params})
              break;
          case '×':
              response = await API.get('/multi', {params})
              break;
          case '÷':
              response = await API.get('/div', {params})
              break;
          case '^':
              response = await API.get('/pow', {params})
              break;
          default:
              break;
      }
      if(response){
          result = response.data.result;
          let color = response.data.color
          setColor(color);
      }
      setDisplayNum(result);
      setNumbers([result])
  }

  return (
      <div className="page-wrapper">
        <div className="background">
          <div className="display" onLoad="clearVars()">
            <div id="bar" style={{color:color}}>{displayNum}</div>
          </div>
          <div className="keysContainer">
            <button className="key greyKey" onClick={() => clear()}>AC</button>
            <button className="key greyKey" onClick={() => invert()}>+/-</button>
            <button className="key greyKey" onClick={() => operation('^')}>pow</button>
            <button className="key orangeKey" onClick={() => operation('÷')}>÷</button>
            <button className="key darkKey" onClick={() => setDisplay("7")}>7</button>
            <button className="key darkKey" onClick={() => setDisplay("8")}>8</button>
            <button className="key darkKey" onClick={() => setDisplay("9")}>9</button>
            <button className="key orangeKey" onClick={() => operation('×')}>×</button>
            <button className="key darkKey" onClick={() => setDisplay("4")}>4</button>
            <button className="key darkKey" onClick={() => setDisplay("5")}>5</button>
            <button className="key darkKey" onClick={() => setDisplay("6")}>6</button>
            <button className="key orangeKey" onClick={() => operation('-')}>-</button>
            <button className="key darkKey" onClick={() => setDisplay("1")}>1</button>
            <button className="key darkKey" onClick={() => setDisplay("2")}>2</button>
            <button className="key darkKey" onClick={() => setDisplay("3")}>3</button>
            <button className="key orangeKey" onClick={() => operation('+')}>+</button>
            <button className="key darkKey" id="zero" onClick={() => setDisplay("0")}>0</button>
            <button className="key darkKey" onClick={() => setDisplay('.')}>.</button>
            <button className="key orangeKey" onClick={() => equals()}>=</button>
          </div>
        </div>
      </div>
  );
}

export default App;
