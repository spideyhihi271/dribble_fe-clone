import React from 'react'
import LoginIntro from '../components/LoginIntro'
import Signupform from '../components/Signupform'

function Signup() {
  return (
    <div className="login_page">
      <Signupform/>
      <LoginIntro/>
    </div>
  )
}

export default Signup