import React from 'react'
import "../Components/btns.css"
export default function Buttons({start,reset,pause,status,resume,add}) {
  return (
    <div className='BtnContainer'>
        {
        (status === 0) ? <button id='start' onClick={start}>Start</button> : ''
        }
        {
            (status === 1) ? <div>
            <button id='pause' onClick={pause}>Pause</button> 
             <button id='reset' onClick={reset}>Reset</button>
             <button id='add' onClick={add}>Add</button> 
            </div> : ''
        }
        {
            (status === 2) ? <div>
             <button id='resume' onClick={resume}>Resume</button> 
             <button id='reset' onClick={reset}>Reset</button>
            </div> : ''
        }
        
    </div>
  )
}
