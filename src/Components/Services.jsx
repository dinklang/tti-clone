import React, { Component } from 'react'
import '../Styles/Services.css'
import { servicesData } from '../Assets/servicesData'

class Services extends Component {
  render() {
    const iPath = '../Assets/turbine-image-section-1.jpg';

    return (
      <div className='tti-services_container'>
        <div className='tti-services_container--title'>
          <p>Services</p>
        </div>
        <div className='tti-services_container--sections'>
          {servicesData.map((service, index) => {
            return (
              <div className='tti-services_container--sections__content' key={index}>
                  <>
                    <div className='image'>
                      <img src={require("../Assets/turbine-image-section-" + (index + 1) + ".jpg")}></img>
                    </div>
                    <div className='title'>{service.title}</div>
                    <div className='desc'>{service.desc}</div>
                  </>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Services;