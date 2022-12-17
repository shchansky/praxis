import React from "react";

export const Timer = () => {
  const [count, setCount] = React.useState<number>(0);

  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    const button = buttonRef.current;

    const counter = setInterval(() => {
      setCount((perv) => perv + 1);
    }, 2000);

    button?.addEventListener("click", () => clearTimeout(counter));

    return () => {
      clearTimeout(counter);

      button?.removeEventListener("click", () => clearTimeout(counter));
    };
  }, []);

  return (
    <>
      <h2>Timer</h2>
      <div>{count}</div>
      <button ref={buttonRef}>Stop</button>
    </>
  );
};
