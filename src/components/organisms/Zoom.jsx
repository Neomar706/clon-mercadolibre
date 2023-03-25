import { useState } from 'react'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'

import { ImagesCol } from '../molecules/ImagesCol'

export const Zoom = function({ images }){
    const [img, setImg] = useState(images[0])

    return (
        <div className='flex'>
            <ImagesCol images={images} currentImg={_img => setImg(_img)} />
            <div className='w-full ml-4 mr-10'>
                <div className="w-full h-auto">
                    <InnerImageZoom
                        className='w-full h-[27rem] flex items-center'
                        // src={'https://laurenashpole.github.io/react-inner-image-zoom/images/unsplash-10-large.jpg'}
                        src={img ? img.link : ''}
                        zoomType="hover"
                        zoomPreload={true}
                    />
                </div>
            </div>
        </div>
    )
}