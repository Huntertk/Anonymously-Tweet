import React from 'react'
import './App.css'
import Form from './components/Form'
import logo from './assets/images/logo.png'
const App = () => {
  return (
    <div className='main-container'>
      <img className='logo' src={logo} alt="" />
      <h1>Anonymously Tweet</h1>
      <p className='main-container-para'>Share your thought without hesitation and without any share your personal information.</p>
      <Form />
    </div>
  )
}

export default App
