import { useState } from "react";

const ControlledInputs = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form className="form">
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">name</label>
        <input type="text" className="form-input" id="name" onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">email</label>
        <input type="text" className="form-input" id="email" onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-block">submit</button>
    </form>
  );
};
export default ControlledInputs;
