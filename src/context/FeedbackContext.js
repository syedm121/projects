import { createContext, useState } from "react";
import {v4 as uuidv4} from  'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{

   
    const [feedback,setFeedback ] = useState([
        
        {
            id: 1,
            rating: 10,
            text: 'item 1 from context hook',
          },
          {
            id: 2,
            rating: 9,
            text: 'item 2 from context hook',
          },
          {
            id: 3,
            rating: 8,
            text: 'item 3 from context hook',
          },



       ])

       
      const[feedbackEdit,setFeedbackEdit] = useState([{
        item : {},
        edit :false,
      }])

    function newAdd(newFeedBack){
        newFeedBack.id = uuidv4()
        setFeedback([newFeedBack,...feedback]);
     }


    function feedbackDelete (id){
        if(window.confirm("are you want to sure to delete it")){ 
          return (
            
          setFeedback(feedback.filter(item => item.id != id))
       );}}
    
    function FeedBackEdit(item){
      return(
        setFeedbackEdit(
        {item,
         edit:true
        })
      )
    }
  
   //update feedback function
   function FeedbackUpdate (id,updItem){
         
        setFeedback(feedback.map(item=> item.id===id ? {...item,...updItem}  : item))
   }
   {

   }
   
    return(
        <FeedbackContext.Provider value={{
            feedback,
            feedbackDelete,
            newAdd,
            FeedBackEdit,
            feedbackEdit,
            FeedbackUpdate,
            }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext