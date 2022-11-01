import React, { Component } from 'react'
import '../Styles/About.css'

export class About extends Component {
  render() {
    const aboutText = "Texas Turbine, Inc. wants to be your supplier for all your turboexpander needs. As an independent company dealing only in turboexpanders and compressors, we are able to fully focus on providing our customers with the best products and services in all phases of this industry. With complete engineering, manufacturing, and service departments, we are fully equipped to handle any of your needs. TTI manufactures complete turboexpander compressor packages including the lubrication system and annunciator. Close attention to detail throughout the design process produces a remarkably open, uncluttered skid for the ease of operation. The use of high-quality pumps, coolers, regulators, and filters ensure that the reliability of the support system is equal to the quality level of the unit it protects."
    return (
      <div className='tti-about'>
        <div className='tti-about-title'><p>About us</p></div>
        <div className='tti-about_container'>
          <div className='tti-about_container--image'>
            <img src={require("../Assets/turbine-image-section-1.jpg")}></img>
          </div>
          <div className='tti-about_container--text'>
            {aboutText}
          </div>
        </div>
      </div>
    )
  }
}

export default About