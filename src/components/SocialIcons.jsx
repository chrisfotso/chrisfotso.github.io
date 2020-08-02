import React from 'react'
import { SOCIAL_ITEMS } from '../data';
import SocialIcon from './SocialIcon';

const SocialIcons = () => {
  return (
    <span className="social">
      { SOCIAL_ITEMS.map(item => <SocialIcon {...item} />)}
    </span>
  )
}

export default SocialIcons
