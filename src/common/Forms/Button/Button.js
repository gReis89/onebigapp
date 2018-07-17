import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({text, className}) => {
  return (
    <button className={'btn ' + className}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Button
