import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [time, setTime] = useState(0);
  
  //solution ki bohot speed se chal ra hai 
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null);


   function start(){
    
    if(!isRunning){ // solution ki check karo interval ko

    // reference store karray hai purane wale ka to perform -> stopinterval
    intervalRef.current = setInterval(()=>{ // settime setinterval ko call karega 1 sec baad -> time = 0 -> as setTime(time+1) ye chalega -> time = 1 render hone pe screen pe ayega stopwatch is 1 -> but purana function stopwala call karte jayega setTime(time+1) time ki value 0 thi update ni hoti thi -> and function ko phir se render karne ko keh ra hai -> so screen pe 1 aara hai beacuse purane wale stopwacth pe value 0 thi -> so wahi value new wala lega -> purane wale time ki valuse 0+1 bar bar hori and new wala render hora so screen pe 1 show hora hai 
       // setTime(time+1) -> problem aari hai isme
        setTime((prevtime)=>prevtime+1) //******* */  iske pass bhi call back function hota hai -> latest time ki valye ajayegi isme callback layega -> prevtime latest value layega i.e 1 then 1+1 =2 then 2+1 and so on  -> and sabse pehle wala chalega function
    },1000)
  
   setIsRunning(true) // ek or run ni karne dena -> solution
}
}

// to execute clearinterval apan ko purane wale ka reference store karke rakhna hoga so use -> ***** useref hook
// apne pass hai reference purane wale ka so -> clear kar do ab -> to stop it previous wale ko jiska refernce intervalref pe hai 
   function stop(){

    if(isRunning){ // solution check karlo 
        
        clearInterval(intervalRef.current)
         intervalRef.current = null

         setIsRunning(false) // solution watch stop hogi hai 
    }
  
   }


   function reset(){
     clearInterval(intervalRef.current)
     intervalRef.current = null // reference hata diye apan
     setTime(0) // 0 se phir se suru karo 
   }


   // ******Problem : basically agar bar bar start pe click kare toh bohot speed pe chalegi watch -> beacuse jitne bar click are utne setinterval chalegai ek sath and sab value ko update karegi
   // solution -> check ki agar koi interval chal ra ho so -> so new interval ko ni ane do -> make state isrunning wala 
  


  return (
    <>
      <div className="w">
        <h1 className="h">StopWatch is : {time}</h1>

        <button className="b" onClick={start}>Start</button>

        <button className="b" onClick={stop}>Stop</button>

        <button className="b" onClick={reset}>Reset</button>
     
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
