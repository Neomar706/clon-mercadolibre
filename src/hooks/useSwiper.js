import { useState, useRef, useEffect } from 'react'

export const useSwiper = () => {
    const [element, setElement] = useState(null)
    const ref = useRef(null)
  
    useEffect(() => {
      setElement(ref.current)
    }, [])
  
    return [element, ref]
}