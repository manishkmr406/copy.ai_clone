import React from 'react'
import "./ChatContent.css"
import { useState } from 'react'
const ChatContent = () => {
  const [inputValue,setInputValue]=useState("")
  const [message,setMessage]= useState(null)

  const getMessages=async ()=>{
    const options={
      method: "POST",
      body: JSON.stringify({
        message: "hello how are you?"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response=await fetch('http://localhost:8000/completions', options)
      const data=await response.json()
      console.log(data)
      setMessage(data.choices[0].message)
    } catch (error) {
      console.error(error);
    }
  }
  console.log(message)
  return (
    <div className='side-container'>
    <div className='upper'>
     <h1>Hello Guide</h1>
     <button>New Project</button>
    </div>
    <div className='chat-info-container'>
      <div className='chat-text'>
        <div className='welcome-text'>
            <h1>Welcome to <span>Chat by Copy.ai</span></h1>
            <p> Get started by writing a task and Chat can do the rest. Not sure where to start? Check out the Prompt Library for inspiration.</p>
        </div>
      </div>
      <div className='bottom-section'>
    <div className='input-container'>
        <input type='text' placeholder='Ask or search anything' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
        <div id='submit' onClick={getMessages}>&#x27A2;</div>
      </div>
      </div>
    </div>
   </div>
  )
}

export default ChatContent
