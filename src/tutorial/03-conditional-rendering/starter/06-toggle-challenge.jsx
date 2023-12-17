import React, { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert ] = useState(false);
  const toggleAlert = () => {
    if(showAlert){
      setShowAlert(false);
      return;
    }
    setShowAlert(true);
  }
  return(
    <>
      <button role="button" className="btn" onClick={toggleAlert}>toggle alert</button>
      {showAlert && <Alert/>}
    </>
  )
};
const Alert = () => {
  return (
    <div>Hahahhaha</div>
  )
}

export default ToggleChallenge;
