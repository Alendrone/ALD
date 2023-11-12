import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './landing.css'

const Landing = (props) => {
  return (
    <div className="landing-container">
      <Helmet>
        <title>Arbour Life Designs, LLC</title>
        <meta property="og:title" content="Arbour Life Designs, LLC" />
      </Helmet>
      <div data-role="Header" className="landing-header">
        <nav className="landing-nav">
          <div className="landing-container01">
            <div className="landing-menu">
              <NavigationLinks rootClassName="rootClassName8"></NavigationLinks>
            </div>
            <div className="landing-container02">
              <div data-role="BurgerMenu" className="landing-burger-menu">
                <svg viewBox="0 0 1024 1024" className="landing-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div data-role="MobileMenu" className="landing-mobile-menu">
          <div className="landing-top">
            <span className="landing-text Large">Soft UI Design System</span>
            <div data-role="CloseMobileMenu" className="landing-close-menu">
              <svg viewBox="0 0 1024 1024" className="landing-icon2">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="landing-mid">
            <div className="landing-menu1">
              <span className="landing-text01 Large">Home</span>
              <span className="landing-text02 Large">Profile</span>
              <span className="landing-text03 Large">Coming Soon</span>
            </div>
          </div>
          <div className="landing-bot"></div>
        </div>
        <div className="landing-icon-group">
          <div className="landing-row">
            <a
              href="https://www.instagram.com/arborlifedesigns/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/external/insta.svg"
                className="landing-image"
              />
            </a>
          </div>
          <div className="landing-row1">
            <a
              href="https://x.com/arborlife"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/external/x1.svg"
                className="landing-image1"
              />
            </a>
          </div>
          <div className="landing-row2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/external/facebook_logo_primary.svg"
                className="landing-image2"
              />
            </a>
          </div>
          <div className="landing-row3">
            <a href="https://yt.be/" target="_blank" rel="noreferrer noopener">
              <img
                alt="image"
                src="/external/yt_icon_rgb.svg"
                className="landing-image3"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="landing-hero">
        <div className="landing-container03">
          <div className="landing-card">
            <div className="landing-container04">
              <div className="landing-row4">
                <h1 className="landing-text04 HeadingTwo">installation</h1>
              </div>
              <div className="landing-row5">
                <h1 className="landing-text05 HeadingTwo">treecare</h1>
              </div>
              <div className="landing-row6">
                <h1 className="landing-text06 HeadingTwo">illumination</h1>
              </div>
              <div className="landing-row7">
                <h1 className="landing-text07 HeadingTwo">hardscapes</h1>
              </div>
              <h1 className="landing-text08 HeadingTwo">SPECIALIZES IN...</h1>
            </div>
            <div className="landing-container05"></div>
            <h1 className="landing-text09">Arbor Life Designs</h1>
            <div className="landing-container06">
              <div className="landing-container07">
                <img
                  alt="image"
                  src="/external/gallery_pavers-1500h-900w.jpg"
                  className="landing-image4"
                />
              </div>
              <span className="landing-text10">
                <span>
                  &quot;Our mission is to create enduring and sustainable
                  landscapes that 
                </span>
                <span className="landing-text12">
                  enhance the environment, maximize resources, and inspire
                  people.
                </span>
                <br></br>
                <span>
                  We strive to exceed our clients&apos; expectations by
                  providing exceptional design, construction, and maintenance
                  services with attention to detail, 
                </span>
                <span className="landing-text15">
                  innovation, and integrity.
                </span>
                <br></br>
                <span>
                  Our goal is to contribute to the creation of healthy and
                  vibrant 
                </span>
                <span className="landing-text18">
                  communities through the responsible and thoughtful design and
                  management of open spaces.&quot;
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-container08">
        <div className="landing-container09">
          <span className="landing-text19">ALD</span>
          <span>info@arbourlifedesigns.net</span>
          <span className="landing-text21">
            <br></br>
            <span>Phone</span>
          </span>
          <span>
            <span>+1 (281)-914-7788</span>
            <br></br>
          </span>
          <div className="landing-container10">
            <span className="landing-text27">
              <br></br>
              <br></br>
              <br></br>
              <span>Copyright (C) Ducote Industry</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="landing-container11">
          <img
            alt="image"
            src="/external/qrcode.svg"
            className="landing-image5"
          />
        </div>
      </div>
    </div>
  )
}

export default Landing
