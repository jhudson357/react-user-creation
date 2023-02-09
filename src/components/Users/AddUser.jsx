import { useState } from "react"
import Card from "../UI/Card"
import Button from "../UI/Button"

import styles from './AddUser.module.css'

const AddUser = (props) => {
  const [userData, setUserData] = useState()
  
  const addUserHandler = (event) => {
    event.preventDefault()
    setUserData({
      username: event.target[0].value,
      age: event.target[1].value,
      id: Math.floor(Math.random() * 100)
    })
    // console.log(event.target[0].value)
    // console.log(event.target[1].value)
    // console.log(userData)
    props.getUserData(userData)
  }
  
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" autoComplete="off"/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" autoComplete="off"/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser