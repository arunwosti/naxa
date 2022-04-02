import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import './service-content.styles.scss'
import { ReactComponent as ConstIcon } from '../../../assets/servicesection/constant-icon.svg'


export default function ServiceContent({servicesRef}) {
  const services = useSelector(state => state.serviceStore.services)
  

 
  return (
    <div className='container mt-5 service-container'>
      {
        services.map((service, index) => {
          let reverse = false;
          if (index % 2 !== 0) {
            reverse = true
          }
          return <div className="row" ref={(element) => servicesRef.current[index] = element}>

            <div className={`col-lg-6  col-sm-12 order-sm-1 img-box ${reverse ? 'order-lg-2' : 'order-lg-1'}  `}>
              <div className='content-img' >
                <img src={service.photo}  className='imgfluid'/>
                {/* <ImageComponent svgUrl={service.photo} size={100} color='#ccc' /> */}
              </div>
            </div>
            <div className={`col-lg-6  order-sm-2 content-box ${reverse ? 'order-lg-1' : 'order-lg-2'}`}>
              <ConstIcon className="constIcon" />
              <div className='title'>{service.title}</div>
              <div className='description1'>{service.description1}</div>
              <div className='description2'>
                {service.description2}

              </div>
            </div>
          </div>
        })

      }
    </div>


  )
}
