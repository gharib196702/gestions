import { useEffect,useState } from "react";
const App = () => {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    const getUsers = async()=>{
      const response = await fetch('http://localhost:3001/users')
      const data = await response.json()
      setUsers(data)
    }
    getUsers()
  },[])
  return (
    <>
      <p>listes des programmeurs </p>
      {
        users && users.map(user=>(
          <p key={user.id}>{user.nom} {user.age}</p>
        ))
      }
    </>
  );
}

export default App;
