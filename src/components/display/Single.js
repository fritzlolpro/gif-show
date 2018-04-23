import React from 'react'
import Closer from '../control/Closer'
import Photo from './Photo'
import './Single.css'


const Single = ({photos, activeId, onClick}) => {

    const selectedPhoto = photos.filter(photo => activeId === photo.id)[0] || false
    const photosIds = photos.map(photo => photo.id)
    const prevPhotoId = photosIds[photosIds.indexOf(activeId) - 1]
    const nextPhotoId = photosIds[photosIds.indexOf(activeId) + 1]
    const prevPhoto = photos.filter(photo =>  photo.id === prevPhotoId)[0]
    const nextPhoto = photos.filter(photo =>  photo.id === nextPhotoId)[0]

    return (

        <div className='single-photo-display'>
            <div className='single-photo'>
                {!!selectedPhoto ? <Photo photo={selectedPhoto} clickable={false}/> : <div>error</div>}
            </div>
            <div className='thumbnails'>
                {!!prevPhoto && <div onClick={onClick} className='single-photo thumbnail prev'>
                    <Photo photo={prevPhoto}/>

                </div>}
                <Closer/>

                {!!nextPhoto && <div onClick={onClick} className='single-photo thumbnail next'>
                    <Photo photo={nextPhoto}/>

                </div>}
            </div>
        </div>

    )
}


export default Single