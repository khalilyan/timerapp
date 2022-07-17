import './App.css';
import { useState } from 'react'
import TimerDisplay from './Components/TimerDisplay';
import Buttons from './Components/Buttons';

function App() {
  const [timer, setTimer] = useState({ms:0, s:0, m:0, h:0})
  const [status,setStatus] = useState(0)
  const [interv,setInterv] = useState()
  let update_ms = timer.ms,
  update_s = timer.ms,
  update_m = timer.ms,
  update_h = timer.ms;
 

  function run(){
    if(update_m === 60){
      update_h++;
      update_m=0;
    }
    if(update_s === 60){
      update_m++
      update_s=0
    }
    if(update_ms === 100){
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
}
 function resume(){
  setStatus(1)
  setInterv(setInterval(run,10))
 }
 function add(){
  console.log(update_ms,update_s,update_m,update_h)
 }

  return (
    <div className="App">
      <TimerDisplay ms={timer.ms} s={timer.s} m={timer.m} h={timer.h}/>
      <Buttons status={status} start={start} pause={stop} resume={resume} reset={reset} add={add}/>
      
    </div>
  );
}

export default App;
