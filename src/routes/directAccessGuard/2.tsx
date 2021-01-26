import React from 'react'
import { Link } from 'react-router-dom'

const DirectAccessGuardTwo = () => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h1>Direct Access Guard - 2</h1>
      <p>Done!</p>
      <p>Please read code to check detail.</p>
      <p>
        <Link to='/'>Go Home</Link>
      </p>
    </div>
  )
}

export default DirectAccessGuardTwo
