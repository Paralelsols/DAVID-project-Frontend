import React,{useEffect, useState} from 'react'

export const Button = ({ children, onClick, className = "" }) => (
    <button
      className={`bg-black text-white py-2 px-4 rounded-lg w-full focus:outline-none hover:bg-blue-900 transition-colors ${className}`}
      onClick={onClick}
      aria-label={children}
    >
      {children}
    </button>
  );

export const Input = ({ type = "number", placeholder, value, onChange }) => (
    <input 
      type={type}
      className="bg-black text-white py-2 px-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-900"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      aria-label={placeholder}
    />
);     

export const ProgressBar = ({ current, total }) => {
    const percentage = (current / total) * 100;
  
    return (
      <div className="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
        <div className="bg-blue-900 h-3.5 rounded-full" style={{ width: `${percentage}%` }} aria-valuenow={current} aria-valuemin="0" aria-valuemax={total}></div>
      </div>
    );
  };

export const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearTimeout(timer);
    });
  
    const timerComponents = [];
  
    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return;
      }
  
      timerComponents.push(
        <div style={{fontSize:'20px'}} key={interval} className="bg-black text-white md:text-base lg:text-lg p-4 w-24 md:w-32 lg:w-40 rounded-lg shadow-md">
          {timeLeft[interval]}
           {/* {interval.toUpperCase()} */}
        </div>
      );
    });
  
    return (
      <div className="flex justify-around items-center space-x-2">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    );
  };
  

const PresaleWegit = () => {

    const totalUSDT = 3000000;
    const raisedUSDT = 25710;
    const futureDate = "2024-12-31T00:00:00";


  return (
    <div className='p-6'>
      {/* <Button>Connect Wallet</Button> */}

      <div className="bg-black-900 text-white py-4 px-6 rounded-lg space-y-4">
        <div className="text-center">
          <CountdownTimer targetDate={futureDate} />
          <h6 style={{fontSize:'13px'}} className="mt-6">USDT Raised: {raisedUSDT.toLocaleString()} / {totalUSDT.toLocaleString()}</h6>
          <h6 className="text-10 mb-6">1 BLEND = $0.002</h6>
          <ProgressBar current={raisedUSDT} total={totalUSDT} />
        </div>

        <div className="flex justify-center space-x-2">
          <Button className="py-1 px-3 rounded-full">ETH</Button>
          <Button className="py-1 px-3 rounded-full">USDT</Button>
        </div>
        <div className="text-center">
          <h6 style={{fontSize:'13px'}} className="mt-6">ETH Balance 0</h6>
        </div>

        <div className="flex space-x-4 items-center">
          <Input placeholder="Amount in ETH" />
          <Input placeholder="Amount in ETH" />
        </div>
        
        <Button>Buy Now</Button>

      </div>
    </div>
  
  )
}

export default PresaleWegit