import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import PrimaryBlueButton11 from '../components/primary-blue-button11'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Arbour Life Designs, LLC</title>
        <meta
          property="og:title"
          content="Contact - Arbour Life Designs, LLC"
        />
      </Helmet>
      <div data-role="Header" className="contact-header">
        <nav className="contact-nav">
          <div className="contact-container01">
            <div className="contact-menu">
              <nav className="contact-nav1">
                <Link to="/" className="contact-navlink">
                  <div className="contact-container02">
                    <img
                      alt="image"
                      src="/external/home-svg.svg"
                      className="contact-image"
                    />
                    <span className="contact-text">ome</span>
                  </div>
                </Link>
                <span className="contact-text01">Services</span>
                <PrimaryBlueButton11></PrimaryBlueButton11>
                <div className="contact-container03">
                  <button className="contact-button button ButtonSmall">
                    <img
                      alt="image"
                      src="/external/at-sign1.svg"
                      className="contact-image1"
                    />
                    <span className="contact-text02">​Cont​​​ ​ ​​ ​​ ​ct</span>
                  </button>
                </div>
              </nav>
            </div>
            <div className="contact-container04">
              <div data-role="BurgerMenu" className="contact-burger-menu">
                <svg viewBox="0 0 1024 1024" className="contact-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div data-role="MobileMenu" className="contact-mobile-menu">
          <div className="contact-top">
            <span className="contact-text03 Large">Soft UI Design System</span>
            <div data-role="CloseMobileMenu" className="contact-close-menu">
              <svg viewBox="0 0 1024 1024" className="contact-icon2">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="contact-mid">
            <div className="contact-menu1">
              <span className="contact-text04 Large">Home</span>
              <span className="contact-text05 Large">Profile</span>
              <span className="contact-text06 Large">Coming Soon</span>
            </div>
          </div>
          <div className="contact-bot"></div>
        </div>
        <div className="contact-icon-group">
          <div className="contact-row">
            <a
              href="https://www/instagram.com/arborlifedesigns/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/external/insta.svg"
                className="contact-image2"
              />
            </a>
          </div>
          <div className="contact-row1">
            <a
              href="https://x.com/arborlife/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/external/x1.svg"
                className="contact-image3"
              />
            </a>
          </div>
          <div className="contact-row2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/external/facebook_logo_primary.svg"
                className="contact-image4"
              />
            </a>
          </div>
          <div className="contact-row3">
            <a href="https://yt.be/" target="_blank" rel="noreferrer noopener">
              <img
                alt="image"
                src="/external/yt_icon_rgb.svg"
                className="contact-image5"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2 className="contact-text07 HeadingOne">Interested?</h2>
        <span className="contact-text08">
          <span className="contact-text09">We accept your business here.</span>
          <br></br>
          <br></br>
          <span>
            We do not store any information, and only provide it for the
            contractor.
          </span>
          <br></br>
        </span>
        <form
          id="contact-form"
          action="https://formspree.io/f/xyyqvqvv"
          method="POST"
          enctype="multipart/form-data"
          className="contact-form1"
        >
          <label className="contact-text14 Label">Name</label>
          <input
            type="text"
            name="first-name"
            required
            autoFocus
            placeholder="Ex: Ashley, Evan, Herman, Louise..."
            className="contact-textinput Small input"
          />
          <label className="contact-text15 Label">Email Address</label>
          <input
            type="email"
            name="email"
            rows="Ex: 1787 Botanical Boulevard, Houston, Texas  #77027"
            enctype="Ex: 1787 Botanical Boulevard, Houston, Texas  77027"
            required
            placeholder="Ex: info@arborlifedesigns.net"
            className="contact-textinput1 Small input"
          />
          <label className="contact-text16 Label">Location for Job</label>
          <input
            type="text"
            name="address"
            rows="Ex: 1787 Botanical Boulevard, Houston, Texas  #77027"
            enctype="Ex: 1787 Botanical Boulevard, Houston, Texas  77027"
            required
            placeholder="Ex: 1787 Botanical Boulevard, Houston, Texas #77027"
            className="contact-textinput2 input Small"
          />
          <label className="contact-text17 Label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            rows="Ex: 1787 Botanical Boulevard, Houston, Texas  #77027"
            enctype="Ex: +1 (281)-914-7788"
            required
            placeholder="Ex: +1 (281)-914-7788"
            className="contact-textinput3 Small input"
          />
          <label className="contact-text18 Label">Comments</label>
          <textarea
            name="message"
            rows="8"
            target="Ex: I'd like to install some lights"
            placeholder="Ex: I request your services because I need treework..."
            className="contact-textarea textarea Small"
          ></textarea>
          <h2 id="form-status" className="contact-text19">
             
          </h2>
          <div className="contact-container05">
            <div className="contact-container06">
              <div className="contact-container07">
                <button
                  id="contact-button"
                  type="submit"
                  className="contact-button1 button ButtonSmall"
                >
                  Deliver Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div className="contact-container09">
          <Script
            html={`<script>
    var form = document.getElementById("contact-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Contact
