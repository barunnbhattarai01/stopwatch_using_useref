import React,{useState,useRef,useEffect} from "react";


function Stopwatch(){

    const[running,setisrunning]=useState(false); 
    const[elapsed,setelapsed]=useState(0); //it store the time that passed
    const intervalref=useRef(null);  
    const startref=useRef(0);


  useEffect(()=>{

   if(running){
    intervalref.current=setInterval(()=>{            //it is need for pause and start
        setelapsed(Date.now() - startref.current);  //it will show the  how much time passed after  start 
    },10);

   }

  return ()=>{
    clearInterval(intervalref.current)
  }


  },[running])

   function start(){
   
     setisrunning(true);
     startref.current=Date.now() -elapsed; //it will show the current time
      
   }

  function stop(){

   setisrunning(false); 


  }
  function reset(){

  setelapsed(0);   //it reset all
  setisrunning(false)

  }
  function formattime(){
  let hours= Math.floor(elapsed / (1000* 60 * 60))
     let minute= Math.floor(elapsed / (1000* 60 )% 60)
       let second= Math.floor(elapsed / (1000) % 60)

return `${hours}:${minute}:${second}`
  }






return(
<>
<div className="flex flex-col items-center mt-96">
<div className="text-6xl">
    {formattime()}
</div>
<div className="flex gap-3 text-2xl mt-4">
    <button className="border border-black rounded-2xl p-2" onClick={start}>Start</button>
    <button className="border border-black rounded-2xl p-2" onClick={reset}>reset</button>
     <button className="border border-black rounded-2xl p-2" onClick={stop}>Stop</button>

</div>
</div>
</>




)



}

export default Stopwatch;