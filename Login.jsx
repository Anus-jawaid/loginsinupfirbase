import React from 'react'
import AppLogin from '../components/AppLogin'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword, auth } from '../config/firebase'



function Login() {

  const LoginUser = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
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
      <h1>Login Page</h1>

      <AppLogin LoginUser={LoginUser} />

      <p>
        Don't have an account ? <Link to={'/signup'}>Signup</Link>
      </p>

    </div>
  )
}

export default Login