import { useState } from 'react'

const localStorageKey = 'settings'

export const useToggle = () => {
    let defaultValue = false

    const storage = localStorage.getItem(localStorageKey)

    if (storage) {
        const settings: { isEnable: boolean } = JSON.parse(storage)

        defaultValue = settings.isEnable
    }

    const [isEnable, setIsEnable] = useState(defaultValue)

    const toggle = () => {
        const newValue = !isEnable

        localStorage.setItem(localStorageKey, JSON.stringify({ isEnable: newValue }))
        setIsEnable(newValue)
    }

    return [isEnable, toggle] as const
}