import { useState } from "react";

const MultipleInputs = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    console.log(user);
    setUser({...user, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <form className='form'>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' name='name' id='name' value={user.name} onChange={(e) => {handleChange(e)}}/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' name='email' id='email' value={user.email} onChange={(e) => {handleChange(e)}}/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' name='password' id='password' value={user.password} onChange={(e) => {handleChange(e)}}/>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
