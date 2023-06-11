import React, { useContext } from 'react'
import {ThemeContext, themes} from '../src/Context/contextdark'

const Theme = () => {
  const {mytheme, onHandleclick}= useContext(ThemeContext);
  return (
    <>
     <div className='main-container1'>
        <h4 className='text-center'>Theme Changed to {mytheme}</h4>
        <button onClick={onHandleclick} className= { `btn ${mytheme === 'dark' ? 'btn-light' : 'btn-dark'}`}>
          
          {mytheme === "dark" ? "light": "dark"}
        </button>
     </div>
    </>
   
  )
}

export default Theme