import React from 'react'
import {Link} from 'react-router-dom'
import './Closer.css'

const Closer = () => {
    return (
        <Link to="/">
        <div className='closer'>

            <div className="icon"></div>
        </div>
        </Link>
    )
}

export default Closer