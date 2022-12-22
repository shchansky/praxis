import React from "react";

class InputState {
  public state: string = "qqq";

  public setState(value: string) {
    // console.log(this.state)
    this.state = value;
  }

  constructor() {

  }
}

export const Oop = () => {

   


    const inputState = new InputState()

    const _inputValue = inputState.state
    const inputValue = React.useMemo(()=>_inputValue, [_inputValue])

    console.log(inputState.state)

 
  return (
    <div>
      <h3 style={{ margin: "0", paddingBottom: "20px" }}>OOP</h3>

      <div>
        <input value={inputValue} onChange={ev=>{inputState.setState(ev.target.value)}}/>
      </div>
    </div>
  );
};
