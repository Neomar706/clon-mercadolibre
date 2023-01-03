import { useRef } from 'react'
import { delay } from '../utils/delay'


export const useDropdown = function(){
    const dropRef = useRef()

    const over = function(){
        dropRef.current.classList.remove('hidden')
        dropRef.current.classList.add('block')
    }

    const leave = async function(){
        await delay(300)
        dropRef.current.classList.remove('block')
        dropRef.current.classList.add('hidden')
    }

    return [
        over,
        leave,
        dropRef
    ]
}