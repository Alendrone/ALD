import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryBlueButton11 from './primary-blue-button11'
import PrimaryBlueButton1 from './primary-blue-button1'
import './navigation-links.css'

const NavigationLinks = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink">
        <div className="navigation-links-container">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navigation-links-image"
          />
          <span className="navigation-links-text">{props.text}</span>
        </div>
      </Link>
      <Link to="/contact" className="navigation-links-navlink1">
        {props.text1}
      </Link>
      <PrimaryBlueButton11 className=""></PrimaryBlueButton11>
      <Link to="/contact" className="navigation-links-navlink2">
        <PrimaryBlueButton1
          rootClassName="primary-blue-button1-root-class-name"
          className="navigation-links-component1"
        ></PrimaryBlueButton1>
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  image_src6: '7663655a-c969-4ebb-bae5-d30bacf02fa2',
  image_alt7: 'image',
  image_src4: '84c13ca0-04f5-48dc-b2a7-2bb3e9d07976',
  image_src3: 'a7cc472b-77e9-464f-b6b6-5912590ab32f',
  image_alt6: 'image',
  rootClassName: '',
  text: 'ome',
  image_src1: 'e867c89c-0f30-4c7a-ac41-9cb47e14f54d',
  text2: 'M',
  image_alt: 'image',
  image_alt1: 'image',
  image_src2: '176d3696-b568-40b1-9b59-8cdfde444b70',
  image_alt3: 'image',
  image_src7: 'c5b5302d-b7c1-4089-b619-d6dbc7bc1744',
  image_src: '/external/home-svg.svg',
  image_alt5: 'image',
  text1: 'Services',
  image_alt2: 'image',
  text3: 'Merch',
  image_alt4: 'image',
  image_src5: '9b8ab724-54d0-4ed7-b9e4-5146333fea62',
}

NavigationLinks.propTypes = {
  image_src6: PropTypes.string,
  image_alt7: PropTypes.string,
  image_src4: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt6: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  image_src1: PropTypes.string,
  text2: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src7: PropTypes.string,
  image_src: PropTypes.string,
  image_alt5: PropTypes.string,
  text1: PropTypes.string,
  image_alt2: PropTypes.string,
  text3: PropTypes.string,
  image_alt4: PropTypes.string,
  image_src5: PropTypes.string,
}

export default NavigationLinks
