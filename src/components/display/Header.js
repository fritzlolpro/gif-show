import React from 'react';
import Refresher from '../control/Refresher'
import {Route, Link} from "react-router-dom";
import './Header.css';

const Header = ({handleRefresh}) => {
    return (
        <div className='header-menu'>
            <Link to='/'>
               <i className="material-icons">public</i>
               <label>giphlar</label>
            </Link>


               <Route exact path='/' render={() => (
                   <Refresher onRefresh={handleRefresh}/>
               )}/>

        </div>
    )
}




export default Header