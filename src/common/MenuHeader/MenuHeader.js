import React, {Component} from 'react'
import {Button} from 'common/Forms'
import PropTypes from 'prop-types'
import whiteLogo from 'assets/images/logo-white.svg'
import MenuButton from 'common/MenuButton'
import './MenuHeader.css'

export class MenuHeader extends Component {
  render () {
    return (
      <div className='menu-header row'>
        <div className='col'>
          <div className='logo'><img src={whiteLogo} alt='OneApp Logotype' /> <span>OneApp</span></div>
        </div>
        <div className='col-6 text-center'>
          <ul>
            <li><MenuButton path='/' name='Talent' match={this.props.match} /></li>
            <li><MenuButton path='/company-landing' name='Company' match={this.props.match} /></li>
          </ul>
        </div>
        <div className='col btn-holder text-right'>
          <Button text='Talent Sign Up' className='btn-white' />
          <Button text='Log In' className='btn-outlined' />
        </div>
      </div>
    )
  }
}

MenuHeader.propTypes = {
  match: PropTypes.object.isRequired
}

export default MenuHeader
