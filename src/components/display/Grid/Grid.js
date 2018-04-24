import React from 'react'
import Photo from '../Photo/Photo'
import './Grid.css'

class Grid extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && !this.props.isLoading) {
            this
                .props
                .loadMore(this.props.photosToDisplayPerPage);
        }
    }

    render() {
        const {photos} = this.props

        return (
            <div className='photo-grid'>
                {photos ? photos.map((photo, i) => <Photo photo={photo} key={i}></Photo>) : <div className='error-output'>Nothing to display</div>}
            </div>
        )
    }
}
export default Grid