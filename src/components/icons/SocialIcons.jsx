import React from 'react'
import { SOCIAL_ITEMS } from '../../constants';
import Icon from './Icon';

const SocialIcons = () => {
  return (
    <span className="social">
      { SOCIAL_ITEMS.map(item => <Icon {...item} className="social__link" />)}
    </span>
  )
}

export default SocialIcons
