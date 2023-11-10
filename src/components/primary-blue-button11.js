import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './primary-blue-button11.css'

const PrimaryBlueButton11 = (props) => {
  return (
    <div className="primary-blue-button11-container">
      <Link
        to="/contact"
        className="primary-blue-button11-button ButtonSmall button"
      >
        <img
          alt={props.image_alt11}
          src="/external/p1.svg"
          className="primary-blue-button11-image"
        />
        <img
          alt={props.image_alt2}
          src="/external/a1.svg"
          className="primary-blue-button11-image1"
        />
        <img
          alt={props.image_alt3}
          src="/external/y1.svg"
          className="primary-blue-button11-image2"
        />
        <span className="primary-blue-button11-text">{props.text2}</span>
        <img
          alt={props.image_alt5}
          src="/external/e1.svg"
          className="primary-blue-button11-image3"
        />
        <img
          alt={props.image_alt4}
          src="/external/n1.svg"
          className="primary-blue-button11-image4"
        />
        <img
          alt={props.image_alt6}
          src="/external/t1.svg"
          className="primary-blue-button11-image5"
        />
        <img
          alt={props.image_alt7}
          src="/external/s1.svg"
          className="primary-blue-button11-image6"
        />
        {props.button}
      </Link>
    </div>
  )
}

PrimaryBlueButton11.defaultProps = {
  image_alt10: 'image',
  image_src6: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt3: 'image',
  image_alt2: 'image',
  image_src13:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/31741e80-85fb-4963-a3fd-c4eb59815266/a0abf4be-247a-498c-a2dd-00f048d00f8e?org_if_sml=1629&force_format=original',
  image_alt9: 'image',
  image_alt4: 'image',
  image_alt14: 'image',
  image_src9:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/31741e80-85fb-4963-a3fd-c4eb59815266/64b01d69-2a3b-4bf0-a9ff-df074679fb15?org_if_sml=1356&force_format=original',
  text2: 'M',
  image_src11:
    'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt6: 'image',
  image_src5: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_src2: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_src4: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt15: 'image',
  image_alt8: 'image',
  image_src15:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/31741e80-85fb-4963-a3fd-c4eb59815266/d5395a94-fc0a-4d1a-9b3c-90f04710f907?org_if_sml=1474&force_format=original',
  image_src8:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/31741e80-85fb-4963-a3fd-c4eb59815266/e00e04d4-115d-45de-a589-b932c0ae0091?org_if_sml=1668&force_format=original',
  image_alt1: 'image',
  image_alt: 'image',
  button: '',
  image_alt13: 'image',
  image_src12:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/31741e80-85fb-4963-a3fd-c4eb59815266/a25b8513-f688-4038-98fc-fe06b43307eb?org_if_sml=1421&force_format=original',
  image_src14:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/31741e80-85fb-4963-a3fd-c4eb59815266/dcf702e8-fca4-4901-b84f-7463bde68d71?org_if_sml=1346&force_format=original',
  image_alt7: 'image',
  Text: 'M',
  image_alt5: 'image',
  image_src3: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_src1: '2d3147b2-33de-4cae-b5c9-dd0c2a538255',
  image_alt11: 'image',
  image_src10:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/31741e80-85fb-4963-a3fd-c4eb59815266/d3ad4173-d16e-4e98-ad4c-f39c2b57d3e4?org_if_sml=1775&force_format=original',
  rootClassName: '',
  image_src: 'fe812b82-fa4a-4987-aea9-94523d894474',
  image_src7: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt12: 'image',
}

PrimaryBlueButton11.propTypes = {
  image_alt10: PropTypes.string,
  image_src6: PropTypes.string,
  image_alt3: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src13: PropTypes.string,
  image_alt9: PropTypes.string,
  image_alt4: PropTypes.string,
  image_alt14: PropTypes.string,
  image_src9: PropTypes.string,
  text2: PropTypes.string,
  image_src11: PropTypes.string,
  image_alt6: PropTypes.string,
  image_src5: PropTypes.string,
  image_src2: PropTypes.string,
  image_src4: PropTypes.string,
  image_alt15: PropTypes.string,
  image_alt8: PropTypes.string,
  image_src15: PropTypes.string,
  image_src8: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  button: PropTypes.string,
  image_alt13: PropTypes.string,
  image_src12: PropTypes.string,
  image_src14: PropTypes.string,
  image_alt7: PropTypes.string,
  Text: PropTypes.string,
  image_alt5: PropTypes.string,
  image_src3: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt11: PropTypes.string,
  image_src10: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_src7: PropTypes.string,
  image_alt12: PropTypes.string,
}

export default PrimaryBlueButton11
