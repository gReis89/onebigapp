import React from 'react'
import PropTypes from 'prop-types'
import kidDeveloper from 'assets/images/kid-with-maginifier@3x.png'
import kidDesigner from 'assets/images/main-boy-with-paint@3x.png'

export const LandingTop = ({children}) => (
  <div className='landing-top'>
    <div className='container'>
      {children}
    </div>
    <h1 className='text-center'>Be matched with jobs<br />
    that meet your criteria<br /><strong>not somebody else’s</strong></h1>
    <div className='designer-application'>
      <img src={kidDesigner} alt="a boy with painted hands" width='407.5px' height='420px' />
      <button className='btn btn-white'>Are you a designer?</button>
    </div>
    <div className='developer-application'>
      <img src={kidDeveloper} alt="a boy holding a maginifier" width='315.3px' height='420px' />
      <button className='btn btn-white'>Are you a developer?</button>
    </div>
  </div>
)

LandingTop.propTypes = {
  children: PropTypes.object
}

export default LandingTop
