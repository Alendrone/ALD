import React from 'react'

import PropTypes from 'prop-types'

import './primary-blue-button.css'

const PrimaryBlueButton = (props) => {
  return (
    <div className="primary-blue-button-container">
      <button
        id="contact-button"
        type="submit"
        className="primary-blue-button-button ButtonSmall button"
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
