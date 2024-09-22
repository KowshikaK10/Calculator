import { useState } from 'react';
import './Cal.css';

const Cal = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [err, setErr] = useState('');
  const [ans, setAns] = useState('');

  function handleCalculator(sym) {
    setErr('');
    let errDetails = validationChecker();
    if (errDetails) {
      setErr(errDetails);
      setAns('');
    } else {
      calculate(sym);
    }
  }

  function validationChecker() {
    if (num1 === '' && num2 === '') return 'Num 1 and Num 2 cannot be empty';
    if (num1 === '') return 'Num 1 cannot be empty';
    if (num2 === '') return 'Num 2 cannot be empty';
    if (isNaN(num1) || isNaN(num2)) return 'Values are not a number';
  }

  function calculate(sym) {
    switch (sym) {
      case '+':
        setAns(Number(num1) + Number(num2));
        break;
      case '-':
        setAns(Number(num1) - Number(num2));
        break;
      case '*':
        setAns(Number(num1) * Number(num2));
        break;
      case '/':
        if (Number(num2) === 0) {
          setErr('Cannot divide by zero');
        } else {
          setAns(Number(num1) / Number(num2));
        }
        break;
      default:
        setErr('Invalid operation');
    }
    setNum1(''); // Clear input
    setNum2(''); // Clear input
  }

  return (
    <div>
      <h1>React Calculator</h1>
      <input type="text" placeholder='Num 1' value={num1} onChange={(e) => setNum1(e.target.value)} />
      <br /><br />
      <input type="text" placeholder='Num 2' value={num2} onChange={(e) => setNum2(e.target.value)} />
      <div className='btns'>
        <button onClick={() => handleCalculator('+')}>+</button>
        <button onClick={() => handleCalculator('-')}>-</button>
        <button onClick={() => handleCalculator('*')}>*</button>
        <button onClick={() => handleCalculator('/')}>/</button>
      </div>
      <div className='ansBlock'>
        {err && <div><h3 style={{ color: 'red' }}>Error!</h3><p>{err}</p></div>}
        {ans && <div><h3 style={{ color: 'green' }}>Success!</h3><p>Result: {ans}</p></div>}
      </div>
    </div>
  );
}

export default Cal;
