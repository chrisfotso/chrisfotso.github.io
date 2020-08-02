import React from 'react'
import NavbarItem from './NavbarItem'
import { NAVBAR_ITEMS } from '../data';

const Navbar = () => {
    return (
        <nav>
          { NAVBAR_ITEMS.map(item => <NavbarItem {...item} />)}
        </nav>
    )
}

export default Navbar
