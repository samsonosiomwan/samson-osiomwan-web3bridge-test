
import {  useEffect,  useState } from 'react';
import './App.css';
import { amountToWithdrawWeekly, checkInterest } from './utlils/helpers';

function App() {
  
  const [okadaRider, setOkadaRider] = useState({});
  const [okadaRiders, setOkadaRiders] = useState([]);
  const [getAllRiders, setGetAllRiders] = useState([]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setOkadaRider({ ...okadaRider, [id]: value });
  }

  //check 5% interest on the amount to withdraw weekly

  
useEffect(() => {
   localStorage.setItem("users", JSON.stringify(okadaRider));
   setOkadaRiders([JSON.parse(localStorage.getItem("users") || "[]")])
  // eslint-disable-next-line
}, []);


   const handleInvest =  (event) => {
    event.preventDefault();
    okadaRiders.push({...okadaRider});
   }

   const handleGetAllRiders = () => {
    setGetAllRiders(okadaRiders);
    }
  

    


  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
    <div className='form-container'>
      <div >
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
         <p>Total Weekly Withdrawal Amount: <span>{amountToWithdrawWeekly(okadaRider.tier)}</span></p>
      </div>
      <div className='button' onClick={handleInvest}>
        <span>Invest</span>
      </div>
      </div>


      <div className='form-container'>
      <div className='button' onClick={handleGetAllRiders}>
        <span>Get All Okada riders</span>
      </div>
     
      {getAllRiders.map((rider, index) => {
        return (
          <div key={index}>
            <p>Name: <span>{rider.name}</span></p>
            <p>Tier: <span>{rider.tier}</span></p>
            <p>Interests: <span>{checkInterest(rider.tier)}</span></p>
            <p>Total Weekly Withdrawal Amount: <span>{amountToWithdrawWeekly(rider.tier)}</span></p>
          </div>
        )
      }
      )}
      </div>

    </div>
  );
}

export default App;
