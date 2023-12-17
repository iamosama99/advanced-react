import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(false);
  //const {avatar_url} = user; wont work here

  useEffect(()=> {
    const loadUser = async ()=> {
      try{
        const resp = await fetch(url);
        if(!resp.ok){
          setIsError(true);
          setIsLoading(false);
        }
        const user = await resp.json();
        console.log(user);
        setUser(user);
        
      }catch(error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    }
    loadUser();
  }, [])

  if(isLoading){
    return <h2>Loading...</h2>;
  }
  if(isError){
    return <h2> Error encountered</h2>
  }
  const {avatar_url} = user;
  return (
    <div>
      <img src={avatar_url} alt={user.name} />
    </div>
  )
};
export default MultipleReturnsFetchData;
