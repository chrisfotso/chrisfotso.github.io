import React from 'react'
import SocialIcons from '../components/icons/SocialIcons'

const Intro = () => {
  return (
    <React.Fragment>
      <div className="intro__container">
        <section className="intro">
          <h1 className="intro__name">CHRIS FOTSO</h1>
          <h2 className="intro__title">Software Developer</h2>
          <hr className="intro__divider"/>
          <SocialIcons />
        </section>
      </div>
    </React.Fragment>
  )
}

export default Intro
