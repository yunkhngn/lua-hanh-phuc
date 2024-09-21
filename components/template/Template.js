import React from 'react'
import MetaTags from './MetaTags'

const Template = ({children,meta}) => {
  return (
    <div
    className='template'
    >
    <MetaTags meta={meta}/>
    {children}</div>
  )
}

export default Template