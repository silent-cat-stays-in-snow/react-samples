import { useEffect, useState } from 'react'

let instance: WasmInstance | undefined
const wasmLoaded = new Event('wasmLoaded')

interface Wasm {
  convert: (dataUrl: string) => Uint8Array | undefined
}

class WasmInstance {
  module: Wasm | undefined

  constructor() {
    const _this = this

    import('../wasm/pkg').then((module) => {
      _this.module = module
      window.dispatchEvent(wasmLoaded)
    })
  }

  static getInstance() {
    if (!instance) {
      instance = new WasmInstance()
    }

    return instance
  }
}

export const useWasm = () => {
  const { module } = WasmInstance.getInstance()
  const initialLoaded = module !== undefined

  const [isWasmLoaded, setIsWasmLoaded] = useState(initialLoaded)

  useEffect(() => {
    const eventListener = () => {
      setIsWasmLoaded(true)
    }

    window.addEventListener('wasmLoaded', eventListener)

    return () => {
      window.removeEventListener('wasmLoaded', eventListener)
    }
  }, [])

  return [isWasmLoaded, module] as const
}
