import React, {useState, useEffect } from 'react';
import "./Nav.css";
import wura from './wura.jpeg';
function Nav() {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect(() => {
window.addEventListener("scroll", transitionNavBar);
return () => window.removeEventListener("scroll", transitionNavBar);
    },[])
    return (
        <div className={`nav ${show &&'nav_black'}`}>
            <div className="nav_contents">

            <img className='nav_logo' src={wura} alt="" />
            <img 
            className='nav_avatar'
            src="https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-avatar-icon-abstract-user-login-icon-png-image_3917181.jpg" alt="" />
            
            </div>
           
        </div>
    );
}

export default Nav;