import React from 'react'
import NavbarItem from './NavbarItem'
import { NAVBAR_ITEMS } from '../data';

const Navbar = () => {
    return (
      <nav class="navbar">
        <span className="navbar__logo">CF</span>
        <ul className="navbar__items">{ NAVBAR_ITEMS.map(item => <NavbarItem {...item} />)}</ul>
      </nav>
    )
}

export default Navbar
