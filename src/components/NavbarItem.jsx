import React from 'react'

const NavbarItem = ({ text, id }) => {
  return (
    <a href={id}>{text}</a>
  )
}

export default NavbarItem
