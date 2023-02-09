import { useState } from "react"
import AddUser from "./components/Users/AddUser"
import UsersList from "./components/Users/UsersList"


function App() {
  const [users, setUsers] = useState([])

  const addNewUser = newUser => {
    setUsers(prevUsers => {
      return [newUser, ...prevUsers]
    })
  }
  
  return (
    <div>
      <AddUser 
        getUserData = {addNewUser}
      />
      <UsersList users = {users}/>
    </div>
  )
}

export default App
