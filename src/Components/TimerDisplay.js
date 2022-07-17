import React from 'react'

export default function TimerDisplay({ms,s,m,h}) {

  return (
    <div>
        <span>{(h>=10)?h+"h":"0"+h}</span>  : &nbsp;
        <span>{(m>=10)?m+"m":"0"+m}</span> &nbsp; : &nbsp;
        <span>{(s>=10)?s+"s":"0"+s}</span> &nbsp; : &nbsp;
        <span>{(ms>=10)?ms:"0"+ms}</span> 
    </div>
  )
}
