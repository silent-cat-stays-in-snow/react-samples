import React from 'react'
import { Link } from 'react-router-dom'

import { STATE_KEY_FROM_PREVIOUS } from '../../utils/boundary'

const DirectAccessGuard = () => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h1>Direct Access Guard</h1>
      <p>Preventing direct access where you would like protect by changing URL directly.</p>
      <p>This logic is effective for Register pages.</p>
      <p>
        Next page is <code>/direct-access-guard/1</code>. You can go with link below, but you cannot go with changing
        URL.
      </p>
      <p>
        <Link to={{ pathname: '/direct-access-guard/1', state: { STATE_KEY_FROM_PREVIOUS } }}>Go to Next Page</Link>
      </p>
    </div>
  )
}

export default DirectAccessGuard
