import React from 'react'
import ChatList from './ChatList'
import ChatBox from './ChatBox'
import ChatInfo from './ChatInfo'

function ChatContainer() {
  return (
    <div className='chat_page'>
        <ChatList/>
        <ChatBox/>
        <ChatInfo/>
    </div>
  )
}

export default ChatContainer