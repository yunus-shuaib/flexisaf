import {createContext, useState, useEffect} from "react";

export const UsersContext = createContext();

export function Context({children}){
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUsers(){
    try{
      setIsLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      if(response.ok){
      const data = await response.json();
      setUsers(data.users);  
        }
    } catch(error) {
      console.log(error)
      } finally {
      setIsLoading(false);
      }
  }

  useEffect(() => {
    fetchUsers();
  }, [])
  
  return <>
  <UsersContext.Provider value={{users, isLoading}}>
  {children}
  </UsersContext.Provider>
  </>
}

