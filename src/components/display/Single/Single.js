import React from 'react'
import Closer from '../../control/Closer/Closer'
import Photo from '../Photo/Photo'
import './Single.css'
import {Link} from 'react-router-dom'

const Single = ({photos, activeId, onClick}) => {

    const renderPhotosOrError = (photos) => {
        if (photos) {
            const selectedPhoto = photos.filter(photo => activeId === photo.id)[0] || false
            const photosIds = photos.map(photo => photo.id)
            const prevPhotoId = photosIds[photosIds.indexOf(activeId) - 1]
            const nextPhotoId = photosIds[photosIds.indexOf(activeId) + 1]
            const prevPhoto = photos.filter(photo => photo.id === prevPhotoId)[0]
            const nextPhoto = photos.filter(photo => photo.id === nextPhotoId)[0]

            return (
                <div className='single-photo-display'>

                    <div className='single-photo'>
                        {!!selectedPhoto
                            ? <Photo photo={selectedPhoto} clickable={false}/>
                            : <div className='error-output'>Error loading photo.<br/>
                                <Link to='/'>
                                    To the main page
                                </Link>
                            </div>}
                    </div>

                    <div className='thumbnails'>
                        {!!prevPhoto && <div onClick={onClick} className='single-photo thumbnail prev'>
                            <Photo photo={prevPhoto}/>
                        </div>}

                        <Closer/> {!!nextPhoto && <div onClick={onClick} className='single-photo thumbnail next'>
                            <Photo photo={nextPhoto}/>
                        </div>}
                    </div>
                </div>
            )
        } else {
            return (
                <div className='error-output'>Error occured</div>
            )
        }

    }

    return (
       renderPhotosOrError(photos)
    )
}
export default Single