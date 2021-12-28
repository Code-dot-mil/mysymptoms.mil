import { useRef, useEffect } from 'react'

export const useSetFocus = <T extends HTMLElement>() => {
    const ref = useRef<T>(null)
    useEffect(() => ref.current?.focus(), [])
    return ref
}