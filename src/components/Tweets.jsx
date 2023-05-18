import React, { useEffect, useState } from 'react'
import './tweet.css'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"



const Tweets = (props) => {

    const appSetting = {
    databaseURL: "https://playground-9814e-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSetting)
const database = getDatabase(app)
const tweetsDB = ref(database, "tweets")
const [data, setData] = useState([])

useEffect(() => {
    try {
        onValue(tweetsDB, (snapshot) => {
            const tweetData = Object.values(snapshot.val())
            setData(tweetData)
        })
    } catch (err) {
        console.log(err)
    }
},[props.inputData.name])


const renderData = data.map((data, index) => {
    return <div key={index} className='tweet-container'>
        <p>{data.comment}</p>
        <h4>By - {data.name}</h4>
    </div>
})

  return (
    <div className='tweets-main-container'>
        <h1 className='tweet-container-heading'>Tweets</h1>
        <div className="underline"></div>
        {renderData}
    </div>
  )
}

export default Tweets
