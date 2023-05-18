import React, { useState } from 'react'
import './form.css'
import Tweets from './Tweets'

/*Firebase Database */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"




const Form = () => {
   

    const appSetting = {
    databaseURL: "https://playground-9814e-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSetting)
const database = getDatabase(app)
const tweetsDB = ref(database, "tweets")



 const [inputData, setInputData] = useState({
        name: "",
        comment: ""
    })

    const handleChange = (e) => {
        setInputData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    console.log(inputData);
    const handleSubmit = (e) => {
        e.preventDefault()

        push(tweetsDB, inputData)

        setInputData((prev) => {
            return {
                name: "",
                comment: ""
            }
        })

    }
  return (
    <>
    <form className='form-container' onSubmit={handleSubmit}> 
        <input 
        type="text" 
        name='name' 
        className='input-name' 
        value={inputData.name} 
        onChange={handleChange}
        placeholder='Enter your name'
        required
        />

        <textarea 
        className='textarea-comment'
        name="comment"  
        cols="30" rows="5" 
        value={inputData.comment}
        onChange={handleChange}
        placeholder='Enter your tweet....'
        required
        ></textarea>
      <button className='btn' type='submit'>Submit</button>
    </form>
   <Tweets inputData ={inputData}/>
</>
  )
}

export default Form
