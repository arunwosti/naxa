import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './collaboration.styles.scss'


export default function Collaboration() {
  return (
    <div className=' container collab-banner'>
        
        <h2>Seeking Collaboration?</h2>
        <div className='colab-detail'>We constantly look forward to exploring ideas, collaborations, and technical
         innovations. If you want to partner with us, we are just an email away.</div>
         <div className='cust-btn'>
             <CustomButton children={"Let's talk"}/>
         </div>
    </div>
  )
}
