import { useState } from "react"
import AddUser from "./components/Users/AddUser"


function App() {
  const [users, setUsers] = useState([])

  const addNewUser = newUser => {
    console.log('coming from app.js')
    console.log(newUser)
    setUsers(prevUsers => {
      return [newUser, ...prevUsers]
    })
  }
  
  return (
    <div>
      <AddUser 
        getUserData = {addNewUser}
      />
    </div>
  )
}

export default App
