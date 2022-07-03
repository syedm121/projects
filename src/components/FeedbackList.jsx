import React from 'react'
import Feedbackitem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'
import {motion,AnimatePresence} from 'framer-motion'
function FeedbackList() {
    const {feedback} = useContext(FeedbackContext);
    
  
    if(feedback.length===0){
        return(<h1> no Feedback</h1>)
    }
    return(
      
        <div className='feedback-list'>
         <AnimatePresence>
           {feedback.map(item =>{
            return(
            <motion.div
             key={item.id}
             initial={{opacity:0}}
             animate={{opacity:1}}
             exit={{opacity:0}}
            > 
            <Feedbackitem key={item.id} item={item} />
            </motion.div>  )
           })}
         </AnimatePresence>  
        </div>
         
    )
  
}


export default FeedbackList