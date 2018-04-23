import React from 'react'

const Refresher = ({onRefresh}) => {

    return (
        <button className='refresher=button' onClick={onRefresh}><i className="material-icons">sync</i></button>
    )
}

export default Refresher