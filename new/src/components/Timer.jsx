import React, { useState, useEffect } from 'react';

function Timer() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);


  const startTimer = () => {
    setIsRunning(true);
  };


  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimer(0);
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {

      intervalId = setInterval(() => {

        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }


    return () => { clearInterval(intervalId) };



    //return () => clearInterval(intervalId);

  }, [isRunning]);

  return (
    <div className="container">
      <h2>Timer: {timer}</h2>
      <div className="btn">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;

