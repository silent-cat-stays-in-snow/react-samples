import React from 'react'
import { useLocation } from 'react-router-dom'

export const STATE_KEY_FROM_PREVIOUS = 'STATE_KEY_FROM_PREVIOUS'

const locationSymbol = Symbol('locationSymbol')

export class LocationError extends Error {
  [locationSymbol] = true
}

export const isLocationError = (o: any): o is LocationError => {
  return o?.[locationSymbol] === true
}

export class LocationBoundary extends React.Component<
  {
    fallback: () => React.ReactNode
  },
  {
    hasError: boolean
  }
> {
  static getDerivedStateFromError(err: unknown) {
    if (isLocationError(err)) {
      return { hasError: true }
    } else {
      throw err
    }
  }

  state = {
    hasError: false
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback()
    }
    return this.props.children
  }
}

export const CheckLocation = <T extends unknown>({
  stateKey,
  render
}: {
  stateKey: string
  render: (value: T) => React.ReactElement | null
}) => {
  const location = useLocation<any>()
  const value = location.state?.[stateKey]

  if (value !== undefined) {
    return render(value)
  } else {
    throw new LocationError(`[${stateKey}] is not included in location.state`)
  }
}
