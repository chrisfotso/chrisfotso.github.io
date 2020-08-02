import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialIcon = ({ icon, dest }) => {
  return (
    <a href={dest} target="_blank" className="social__link">
      <FontAwesomeIcon icon={icon}/>
    </a>
  )
}

export default SocialIcon
