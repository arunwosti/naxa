import React from 'react'
import { useSelector } from 'react-redux'
import './Service.styles.scss'

export default function ServiceItem({servicesRef}) {
  const services = useSelector(state=> state.serviceStore.services)
  console.log(services)
  const scrollFunction=(index)=>{
    servicesRef.current[index].scrollIntoView({behavior: 'smooth', block:'start'})
  }
  return (
    <div className='container section-container'>
    <div className='list-wrap'>
      {services.length>0? services.map((service, index)=>{
        return <div className='service-items' onClick={()=>scrollFunction(index)} >  {service.title} </div>
      }) : null}
      
    </div>
  </div>
  )
}
