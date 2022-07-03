import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import {useContext,useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext';

function Feedbackform() {
  const [text,setText] = React.useState('');
  const [btnDisabled, setBtnDisabled] = React.useState(true);
  const [message,setMessage] = React.useState('');
  const [rating,setRating] = React.useState(0);
  const {newAdd,feedbackEdit,FeedbackUpdate} = useContext(FeedbackContext)
  


  
 useEffect(()=> {
     if(feedbackEdit.edit === true)
     {
       setBtnDisabled(false);
       setText(feedbackEdit.item.text);
       setRating(feedbackEdit.item.rating);
       
     }

  },[feedbackEdit])
 

 



  function handlechange (event){
       
     
       if(text ===''){
        setBtnDisabled(true);
        setMessage('')
       }
       else if(text !== '' && text.trim().length <= 10)
       {
        setBtnDisabled(true)
        setMessage('Text must be at least equal to 10 characters')
       }
       else{
       setBtnDisabled(false)
       setMessage('')
      }
      return (
    
        setText(event.target.value)
     )
  }

  function handleSubmit(event){
   
     event.preventDefault();
     if(text.trim().length > 10 )
     {
        const newFeedback ={
            text,
            rating
        }
        if(feedbackEdit.edit === true)
        {
          FeedbackUpdate(feedbackEdit.item.id,newFeedback);
        }
        else{
          newAdd(newFeedback);
        }
        
        setText('');
     }
  }
  
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className='input-group'>
                <input type='text' onChange={handlechange} placeholder='write your review' value={text}/>
                <Button type='submit' version='primary' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default Feedbackform