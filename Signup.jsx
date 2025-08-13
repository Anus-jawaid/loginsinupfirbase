import React from 'react'
import AppSignup from '../components/AppSignup'
import { Link } from 'react-router-dom'
import {auth, createUserWithEmailAndPassword} from '../config/firebase'

function Signup() {

  const registerUser = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      });
  }


  return (
    <div>
      <h1>Sign Up Form</h1>
      <AppSignup registerUser={registerUser} />
      <p>
        Already have an account ? <Link to={'/'}>Login</Link>
      </p>
    </div>
  )
}

export default Signup