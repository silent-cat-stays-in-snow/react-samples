import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <div>
        <h1>Home</h1>
        <p>Please select what you would like to see</p>
      </div>
      <div>
        <ul>
          <li>
            <Link to='/custom-hooks'>
              <b>Custom Hooks(useToggle)</b>
            </Link>{' '}
            - toggle boolean and store value into localStorage when value has changed
          </li>
          <li>
            <Link to='/direct-access-guard'>
              <b>Direct Access Guard</b>
            </Link>{' '}
            - prevent direct access from during one way history transaction
          </li>
          <li>
            <Link to='/wasm-sample'>
              <b>Wasm Sample</b>
            </Link>{' '}
            - passing Image dataUrl and returns pixel data array
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
