
import { useState } from 'react';
import './App.css';
import { checkInterest } from './utlils/helpers';

function App() {

  const [okadaRider, setOkadaRider] = useState({});

  const handleChange = (event) => {
    const { id, value } = event.target;
    setOkadaRider({ ...okadaRider, [id]: value });
  }

  //check 5% interest on the amount to withdraw weekly
  
 


  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <div className='form-container'>
        <form>
          <label>Enter Name: 
          <input type='text' id='name' onChange={handleChange} />
          </label>

          <label>Select Tier
          <select  id="tier"  onChange={handleChange}>
            <option value={10000}>Tier 1 - 10,000</option>
            <option value={20000}>Tier 2 - 20,000</option>
            <option value={30000}>Tier 3 - 30,000</option>
          </select>
          </label>
        </form>
      </div>
      <div>
         <p>Interests: <span>{checkInterest(okadaRider.tier)}</span></p>
         <p>Total Weekly Withdrawal: <span></span></p>
      </div>
        

    </div>
  );
}

export default App;
