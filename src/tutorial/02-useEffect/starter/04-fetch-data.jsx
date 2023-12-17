import React, { useState, useEffect } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers(){
      const response = await fetch(url);
      const users = await response.json()
      return (
        <div>
          {users.map((user) => {
            return (
              <div>{console.log(user)}</div>
            )
          })}
        </div>
      );
    }
    setUsers(getUsers);
  }, []);

 
};
export default FetchData;
