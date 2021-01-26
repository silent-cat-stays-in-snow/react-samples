import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useToggle } from '../../utils/useToggle'

const CustomHooks = () => {
  const [message, setMessage] = useState('')
  const [isShow, toggleShow] = useToggle()

  const handleClick = () => {
    toggleShow()
    setMessage('Updated! Refresh page to check your modify is stored properly.')

    window.setTimeout(() => {
      setMessage('')
    }, 5000)
  }

  return (
    <div style={{ marginLeft: '20px' }}>
      <h1>Custom Hooks</h1>
      <p>{message}</p>
      <div>
        <button onClick={handleClick}>{isShow ? 'Dismiss' : 'Show'}</button>
        {isShow && (
          <div>
            <h2>The messgae is showing!</h2>
          </div>
        )}
      </div>
      <p>
        <Link to='/'>Back</Link>
      </p>
    </div>
  )
}

export default CustomHooks
