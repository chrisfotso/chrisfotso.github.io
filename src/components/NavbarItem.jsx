import React from 'react'

const NavbarItem = ({ text, dest, isNewTab }) => {
  return (
    <a className="navbar__link" href={dest} target={isNewTab ? '_blank' : '_self'}>
      <li className="navbar__item">{text}</li>
    </a>
  )
}

export default NavbarItem
