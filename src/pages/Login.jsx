import React from 'react'
import LoginForm from '../components/LoginForm'
import LoginIntro from '../components/LoginIntro'

function Login() {
  return (
    <div className="login_page">
      <LoginForm/>
      <LoginIntro/>
    </div>
  )
}

export default Login