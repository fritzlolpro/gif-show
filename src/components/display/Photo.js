import React from 'react'
import {Link} from 'react-router-dom'
import './Photo.css'
const Photo = ({
    imgLoad,
    photo,
    clickable = true
}) => {
    return (
        <div className='grid-photo-wrap'>
            <Link
                to={clickable
                ? `../view/${photo.id}`
                : `#`}>
                <img
                    src={photo.images.downsized_medium.url}
                    alt={photo.title}
                    data-id={photo.id}
                    className='grid-photo'/>
            </Link>
        </div>
    )
}
export default Photo