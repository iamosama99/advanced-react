import { useState } from "react";

const UserChallenge = () => {

  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    users.push(name)
    setUsers(users);
    setName('');
  }

  const nameChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <form className='form' onSubmit={(e) => {handleSubmit(e)}}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' value={name} onChange={(e) => {nameChange(e)}}/>
        </div>

        <button type='submit' className='btn btn-block' >
          submit
        </button>
      </form>
      <ul>
      {users.map((user) => {
        return(
          <li>{user}</li>
        )
      })}
      </ul>  
    </div>
  );
};
export default UserChallenge;
