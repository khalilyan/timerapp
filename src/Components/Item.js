import React from 'react'

export default function Item({h,m,s,ms}) {

  return (
    <div >
        <label >
        
        {h} : {m} : {s} : {ms}
        
        </label>
    </div>
  )
}
