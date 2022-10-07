import React, { useState} from 'react';
import './App.css';


const App = ()=>{
  const [answer, setAnswer] = useState(''); 
  const handleClick = (e) => {
    setAnswer(answer.concat(e.target.name));
  }
  const clear = ()=> {
    setAnswer('');
  }
  const back = () => {
    setAnswer(answer.slice(0, answer.length-1));
  }
  const result = ()=> {
    try {
      setAnswer(eval(answer).toString());
    } catch(err) {
      setAnswer('Syntax Error')
    }
  }
  return (
    <div>
      <div className='container'>
        <form>
          <input type='text' value={answer}></input>
        </form>

        <div className='buttons'>
          <button className='highlight-more' onClick={clear} id='clear'>Clear</button>
          <button className='highlight' onClick={back} id='back'>C</button>
          <button className='highlight' name='/' onClick={handleClick}>&divide;</button>
          <button name='7' onClick={handleClick}>7</button>
          <button name='8' onClick={handleClick}>8</button>
          <button name='9' onClick={handleClick}>9</button>
          <button className='highlight' name='*' onClick={handleClick}>&times;</button>
          <button name='4' onClick={handleClick}>4</button>
          <button name='5' onClick={handleClick}>5</button>
          <button name='6' onClick={handleClick}>6</button>
          <button className='highlight' name='-' onClick={handleClick}>&ndash;</button>
          <button name='1' onClick={handleClick}>1</button>
          <button name='2' onClick={handleClick}>2</button>
          <button name='3' onClick={handleClick}>3</button>
          <button className='highlight' name='+' onClick={handleClick}>+</button>
          <button name='0' onClick={handleClick}>0</button>
          <button name='.' onClick={handleClick}>.</button>
          <button className='highlight-more-than' onClick={result} id='result'>=</button>
        </div>
      </div>
    </div>
  );
  
}

export default App;

