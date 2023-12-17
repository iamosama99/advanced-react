import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const [userMessage, setUserMessage] = useState('please login');
  const login = () => {
    setUser("osama");
    setUserMessage("Hello");
  }

  const logOut = () => {
    setUser(null);
    setUserMessage("please login");
  }

  return (
    <div>
         {user && 
          <>
          <button className="btn" onClick={logOut}>logout</button>
          <h4>{userMessage + " " + user}</h4>
          </>}
        {!user && 
          <>
          <button className="btn" onClick={login}>login</button>
          <h4>{userMessage}</h4>
          </>}
    </div>
  )
};

export default UserChallenge;
