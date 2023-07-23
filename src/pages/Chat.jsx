import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChatContainer from '../components/ChatContainer'

function Chat() {
  return (
    <>
    <Header />
    <div className="wrapper">
       <ChatContainer/>
    </div>
    <Footer />
  </>
  )
}

export default Chat