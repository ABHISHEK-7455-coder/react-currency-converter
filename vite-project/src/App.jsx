import { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './App.css';

export default function App() {
  const [input, setInput] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [output, setOutput] = useState('');

  const exchangeRates = {
    USD: 1,
    INR: 83.2,
    EUR: 0.91,
    GBP: 0.78,
    JPY: 150.5,
    AUS: 1.5,
    CAD: 1.35,
    CNY: 7.2,
  };

  const currencyOptions = Object.keys(exchangeRates).map((code) => ({
    value: code,
    label: code,
  }));

  const convert = () => {
    const amount = parseFloat(input);
    if (isNaN(amount)) {
      setOutput('Invalid input');
      return;
    }

    const rateFrom = exchangeRates[from];
    const rateTo = exchangeRates[to];

    if (!rateFrom || !rateTo) {
      setOutput('Invalid currency selection');
      return;
    }

    const convertedAmount = (amount / rateFrom) * rateTo;
    setOutput(convertedAmount.toFixed(2));
  };

  return (
    <div className='container'>
      <h1>Currency Converter</h1>

      <div className='converter'>
        <div className='input-section'>
          <input
            type='number'
            placeholder='Enter amount'
          />
          <Dropdown
            options={currencyOptions}
            placeholder='From'
          />
        </div>

        <div className='output-section'>
          <input type='text' value={output} />
          <Dropdown
            options={currencyOptions}
            placeholder='To'
          />
        </div>
      </div>

      <button onClick={convert}>Convert</button>
    </div>
  );
}
