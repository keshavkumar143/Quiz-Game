import React from 'react'
import './Page.css'
import { Link } from 'react-router-dom'

function Page() {
  return (
    <div className='mainContainer'>
      <h1>Welcome To BrainBurst</h1>
      <Link to='/quiz'>
        <button>Start Quiz</button>
      </Link>
    </div>
  )
}

export default Page