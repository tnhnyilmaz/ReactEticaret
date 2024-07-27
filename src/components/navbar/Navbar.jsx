import React from 'react';
import NavbarLeft from './NavbarItem/NavbarLeft';
import NavbarRight from './NavbarItem/NavbarRight';

const Navbar = () => {
    console.log("header rendered")
    return (
        <div   className={`flex items-center justify-between p-3}`} >
            <NavbarLeft />
            <NavbarRight />
        </div>
    )
}

export default Navbar