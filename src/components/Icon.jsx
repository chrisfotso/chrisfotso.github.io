import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon, dest, className }) => {
  return (
    <a href={dest} target="_blank" className={className}>
      <FontAwesomeIcon icon={icon}/>
    </a>
  )
}

export default Icon
