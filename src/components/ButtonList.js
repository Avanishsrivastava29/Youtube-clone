import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex flex-wrap'><Button name="cricket"/>
    <Button name="news"/>
    <Button name="gameing"/>
    <Button name ="movies"/>
    <Button name="trending"/>
    <Button name="coding"/>
    
    
    </div>
  )
}

export default ButtonList