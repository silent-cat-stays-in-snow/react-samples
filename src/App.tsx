import React from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import CustomHooks from './routes/customHooks'
import DirectAccessGuard from './routes/directAccessGuard'
import DirectAccessGuardOne from './routes/directAccessGuard/1'
import DirectAccessGuardTwo from './routes/directAccessGuard/2'
import { CheckLocation, LocationBoundary, STATE_KEY_FROM_PREVIOUS } from './utils/boundary'
import Home from './routes/home'
import WasmSample from './routes/wasmSample'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} exact />
      <Route path='/custom-hooks' component={CustomHooks} exact />
      <Route path='/direct-access-guard' component={DirectAccessGuard} exact />
      <LocationBoundary fallback={() => <Redirect to='/' />}>
        <Route
          path='/direct-access-guard/1'
          exact
          render={(props) => (
            <CheckLocation stateKey={STATE_KEY_FROM_PREVIOUS} render={() => <DirectAccessGuardOne />} />
          )}
        />
        <Route
          path='/direct-access-guard/2'
          exact
          render={(props) => (
            <CheckLocation stateKey={STATE_KEY_FROM_PREVIOUS} render={() => <DirectAccessGuardTwo />} />
          )}
        />
      </LocationBoundary>
      <Route path='/wasm-sample' component={WasmSample} exact />
    </BrowserRouter>
  )
}

export default App
