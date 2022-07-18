import './App.css';
import { useState } from 'react'
import TimerDisplay from './Components/TimerDisplay';
import Buttons from './Components/Buttons';
import Item from './Components/Item';
function App() {
  //state
  const [timer, setTimer] = useState({ms:0, s:0, m:0, h:0})
  const [status,setStatus] = useState(0)
  const [interv,setInterv] = useState()
  const [list,setList] = useState([])
  const [mode,setMode] = useState(true)
  //time variables
  let update_ms = timer.ms,
  update_s = timer.s,
  update_m = timer.m,
  update_h = timer.h;
 
 //functions
  function run(){
    if(update_m === 60){
      update_h++;
      update_m=0;
    }
    if(update_s === 60){
      update_m++
      update_s=0
    }
    if(update_ms === 99){
      update_s++
      update_ms=0
    }
    update_ms++
    return setTimer({ms:update_ms, s:update_s, m:update_m, h:update_h})
  }

function start(){
  run();
  setStatus(1)
  setInterv(setInterval(run,10))
 
}
function stop(){
  clearInterval(interv)
  setStatus(2)
}
function reset(){
  clearInterval(interv)
  setStatus(0)
  setTimer({ms:0, s:0, m:0, h:0})
  setList([])
}
 function resume(){
  setStatus(1)
  setInterv(setInterval(run,10))
 }
 function add(){
  setList([...list,[update_h,update_m,update_s,update_ms,Math.random()]])
   
}

  return (
    <div className="Controls">

      <div className='Control-header'>
              
      <TimerDisplay ms={timer.ms} s={timer.s} m={timer.m} h={timer.h}/>
      <Buttons status={status} start={start} pause={stop} resume={resume} reset={reset} add={add}/>
      </div>
    <div className='Control-conteiner'>

      <div className='Lists'>
      {
        list.map((fix, indecx)=>{
          return  <li key={fix[4]}  className='Lists-item'> {indecx + 1 }.<Item  h={(fix[0]>=10) ? fix[0] : "0" + fix[0]} m={(fix[1]>=10) ? fix[1] : "0" + fix[1]} s={(fix[2]>=10) ? fix[2] : "0" + fix[2]} ms={(fix[3]>=10) ? fix[3] : "0" + fix[3]} /> </li>
        })
      }
      </div>
    </div>

    </div>
  );
}

export default App;
