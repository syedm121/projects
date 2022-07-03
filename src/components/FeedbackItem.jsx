import {FaTimes, FaEdit} from 'react-icons/fa'
import React from 'react'
import Card from './shared/Card'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
function Feedbackitem({item}) {

   const {feedbackDelete,FeedBackEdit} = useContext(FeedbackContext)
  return (
    <Card >
        <div className='num-display'>{item.rating}</div>
         <button className='close' onClick={()=> feedbackDelete(item.id)}> <FaTimes color='purple'/></button>
         <button className='edit' onClick={()=> FeedBackEdit(item)}><FaEdit color='purple'/></button>
        <div className='text-display' >{item.text}</div>
    </Card>
  )
  
}



export default Feedbackitem