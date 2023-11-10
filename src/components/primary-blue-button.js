import React from 'react'

import PropTypes from 'prop-types'

import './primary-blue-button.css'

const PrimaryBlueButton = (props) => {
  return (
    <div className="primary-blue-button-container">
      <button
        type="submit"
        id="contact-button"
        className="primary-blue-button-button button ButtonSmall"
      >
        {props.button}
      </button>
    </div>
  )
}

PrimaryBlueButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

PrimaryBlueButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default PrimaryBlueButton
