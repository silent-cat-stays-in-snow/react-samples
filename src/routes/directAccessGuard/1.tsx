import React from 'react'
import { Link } from 'react-router-dom'

import { STATE_KEY_FROM_PREVIOUS } from '../../utils/boundary'

const DirectAccessGuardOne = () => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h1>Direct Access Guard - 1</h1>
      <p>Hello!</p>
      <p>
        Next page is <code>/direct-access-guard/2</code>. Please check it works properly!
      </p>
      <p>
        <Link to={{ pathname: '/direct-access-guard/2', state: { STATE_KEY_FROM_PREVIOUS } }}>Go to Next Page</Link>
      </p>
    </div>
  )
}

export default DirectAccessGuardOne
