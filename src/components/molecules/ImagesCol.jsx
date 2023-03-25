import { useState, useEffect, useRef } from 'react'


export const ImagesCol = function({ images, currentImg }){
    const [img, setImg] = useState(images[0])

    const refs = useRef([])
    refs.current = []

    const addRef = function(elem){
        if(elem && !refs.current.includes(elem))
            refs.current.push(elem)
    }
    
    const hoverHandle = function({id, link}, i){
        setImg({ id, link })
        currentImg(img)
        refs.current[i].classList.add('border-blue-500')
        images.forEach((_, j) => {
            if(i !== j) refs.current[j].classList.remove('border-blue-500')
        })
    }

    useEffect(() => {
        refs.current[0].classList.add('border-blue-500')
    }, [])

    return (
        <div className='flex flex-col'>
            {
                images.map(({ id, link }, i) => (
                    <div 
                        key={id}
                        ref={addRef}
                        onMouseOver={() => hoverHandle({ id, link }, i)}
                        className='hover:border-blue-500 w-14 h-14 border-2 rounded-md overflow-hidden mb-2 cursor-pointer'
                    >
                        <img className='w-full h-full' src={link} />
                    </div>
                ))
            }
        </div>
    )
}