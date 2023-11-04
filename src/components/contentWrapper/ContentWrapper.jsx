import React, { Children } from 'react'
import './ContentWrapper.scss'

const ContentWrapper = ({Children}) => {
  return (
   <div className="contentWrapper">
    {Children}
   </div>
  )
}

export default ContentWrapper