import { useState } from "react"
import AddUser from "./components/Users/AddUser"
import UsersList from "./components/Users/UsersList"


function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    console.log('from app.js')
    console.log(uName, uAge)
    setUsersList(prevUsers => {
      return [...prevUsers, {username:uName, age: uAge, id: Math.floor(Math.random() * 1000)}]
    })
  }
  
  return (
    <>
      <AddUser 
        onAddUser = {addUserHandler}
      />
      <UsersList users = {usersList}/>
    </>
  )
}

export default App
