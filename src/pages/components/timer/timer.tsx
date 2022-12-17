import React from "react";

export const Timer = () => {
  const [counter, setCounter] = React.useState<number>(0);

  const timer = React.useRef<NodeJS.Timer | null>(null);

  const startTimer = () => {
    timer.current = setInterval(() => setCounter((prev) => prev + 1), 1000);
  };

  const stopTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
  };

  const clearTimer = () => {
    setCounter(0);
    if (timer.current) {
      clearInterval(timer.current);
    }
    
  };

  React.useEffect(() => {
    return () => {
      clearTimer();
      timer.current = null;
    };
  }, []);

  return (
    <>
      <h2>Timer</h2>
      <div>{counter}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={clearTimer}>ClearTimer</button>
    </>
  );
};
