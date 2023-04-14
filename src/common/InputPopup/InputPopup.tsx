import React, { useState } from "react";
import "./InputPopup.scss";

interface InputPopupProps {
  headerText: string;
  buttonText: string;
  onButtonClick: (inputValue: string) => void;
  onClose: () => void;
}

function InputPopup(props: InputPopupProps) {
  const { headerText, buttonText, onButtonClick, onClose } = props;

  const [inputValue, setInputValue] = useState("");

  const handleBackgroundClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleButtonClick = () => {
    onButtonClick(inputValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="background" onClick={handleBackgroundClick}>
      <div className="InputPopup">
        <div className="header">
          <h2>{headerText}</h2>
        </div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleButtonClick}>{buttonText}</button>
      </div>
    </div>
  );
}

export default InputPopup;
