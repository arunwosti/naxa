import React from 'react'
import './custom-button.styles.scss'

export default function CustomButton({children}) {
  return (
   <button className="custom-button">
       <span>{children}</span><i className="fas fa-arrow-right"></i>
   </button>
  )
}