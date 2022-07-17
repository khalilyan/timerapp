import React from 'react'

export default function Buttons({start,reset,pause,status,resume,add}) {
  return (
    <div>
        {
        (status === 0) ? <button onClick={start}>Start</button> : ''
        }
        {
            (status === 1) ? <div>
            <button onClick={pause}>Pause</button> 
             <button onClick={reset}>Reset</button>
             <button onClick={add}>Add</button> 
            </div> : ''
        }
        {
            (status === 2) ? <div>
             <button onClick={resume}>Resume</button> 
             <button onClick={reset}>Reset</button>
            </div> : ''
        }
        
    </div>
  )
}
