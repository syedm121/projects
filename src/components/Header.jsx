import React from 'react'

function header() {
const myStyle ={
        backgroundColor :'rgba(0,0,0,0.4)',
        color :'#ff6a95'
    }
  return (
    <header style={myStyle}>
        <div className='container'>
            <h2>FeedBack UI</h2>
        </div>
    </header>
  )
}

export default header