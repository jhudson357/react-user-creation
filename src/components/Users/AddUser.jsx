import { useState } from "react"
import Card from "../UI/Card"
import Button from "../UI/Button"

import styles from './AddUser.module.css'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [isValidAge, setIsValidAge] = useState(true)
  
  const addUserHandler = (event) => {
    event.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return
    }
    if (+enteredAge < 0) return
    setEnteredUsername('')
    setEnteredAge('')
  }
    
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }
  
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }
  
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text" 
          autoComplete="off" 
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor="age">Age (Years)</label>
        <input 
          id="age" 
          type="number" 
          autoComplete="off" 
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser