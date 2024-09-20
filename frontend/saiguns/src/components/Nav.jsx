import React, { useState } from 'react';
import '../css/Nav.css'
import { CiMenuFries } from "react-icons/ci";
function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    function handleClick() {
        setShowMenu(!showMenu);
        const menucircle = document.querySelector('.navbar .text .menu-circle');
        menucircle.classList.remove('spin');
        void menucircle.offsetWidth;
        menucircle.classList.add('spin');
    }


    return (
        <div className='navbar'>
            <div className='text'>
                <div className='menu-circle' onClick={handleClick}>
                    <CiMenuFries style={{ fontSize: '20px' }} />
                </div>
                {showMenu ? <h1>cheese</h1> : <></>}
            </div>
        </div >
    )
}

export default Nav
