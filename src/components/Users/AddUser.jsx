import { useState } from "react"
import Card from "../UI/Card"
import Button from "../UI/Button"
import ErrorModal from "../UI/ErrorModal"
import Wrapper from "../Helpers/Wrapper"

import styles from './AddUser.module.css'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()
  
  const addUserHandler = (event) => {
    event.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return
    }
    if (+enteredAge < 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      })
      return
    }
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }
    
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }
  
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }
  
  return (
    <>
      {error && (
        <ErrorModal 
          title={error.title} 
          message={error.message} 
          onHandleError={errorHandler}
        />
      )}
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
    </>
  )
}

export default AddUser