import React from 'react'

import PropTypes from 'prop-types'

import './primary-blue-button1.css'

const PrimaryBlueButton1 = (props) => {
  return (
    <div className="primary-blue-button1-container">
      <button className="primary-blue-button1-button ButtonSmall button">
        <img
          alt={props.image_alt1}
          src="/external/at-sign1.svg"
          className="primary-blue-button1-image"
        />
        <span className="primary-blue-button1-text">{props.text}</span>
        {props.button}
      </button>
    </div>
  )
}

PrimaryBlueButton1.defaultProps = {
  rootClassName: '',
  image_src1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  button: '',
  image_alt: 'image',
  text: '​ Cont​​​ ​ ​​ ​​ ​ct',
  image_src: 'fe812b82-fa4a-4987-aea9-94523d894474',
  image_alt1: 'image',
}

PrimaryBlueButton1.propTypes = {
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
  button: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default PrimaryBlueButton1
