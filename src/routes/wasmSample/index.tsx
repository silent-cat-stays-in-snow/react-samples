import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useWasm } from '../../utils/useWasm'

const WasmSample = () => {
  const [isWasmLoaded, wasm] = useWasm()
  const [dataUrl, setDataUrl] = useState('')
  const [pixel, setPixel] = useState('')
  const [message, setMessage] = useState('')

  const handleDataUrlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDataUrl(e.target.value)
  }

  const convert = () => {
    if (!wasm) return

    setMessage('')

    const result = wasm.convert(dataUrl)

    if (!result) {
      setMessage('Failed to convert')
      return
    }

    setPixel(JSON.stringify(Array.from(result)))
  }

  return (
    <div style={{ margin: '0 20px' }}>
      <h1>WebAssembry Sample</h1>
      <p>Please paste dataUrl of Image(jpg, png...). it will be processed in wasm and returns pixel(rgb) array.</p>
      <p>If file is too big, it may crash sorry...</p>
      {message && <p>{message}</p>}
      <button onClick={convert} disabled={!isWasmLoaded || dataUrl === ''}>
        Convert
      </button>
      {isWasmLoaded && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '500px',
            marginTop: '20px'
          }}
        >
          <textarea
            onChange={handleDataUrlChange}
            value={dataUrl}
            placeholder='Put your dataUrl here'
            style={{ width: '100%' }}
          />
          <textarea value={pixel} placeholder='Result here!' style={{ width: '100%' }} />
        </div>
      )}
      <p>
        <Link to='/'>Home</Link>
      </p>
    </div>
  )
}

export default WasmSample
