// usememo
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client"


// usememo hook

   // 1. counter button : increase count
   // 2. input field : fibonnaci number give


   // globally bana diye so 1 baar bs bane ye 
    // function Fibonnaci(n){  // usecallback ka use kar shkate hai yaha pe because ye depend ni hai jyada pe sirf number pe depend hai but hogya avoid karo and use kar shakte hai usecallback ka
    //     if(n==0 || n==1)     // ****** or -> usecallback kardo ya global bana do
    //                        
    //         return n
    //     else
    //         return Fibonnaci(n-1)+Fibonnaci(n-2)
    //   }




   function App(){
     // counter
      
     const [count,setCount] = useState(0)
     const [number,setNumber] = useState(0)
    // const [result,setResult] = useState("") // useeffect use karegai tab extra state banana padega
     

      // ******** fibonnaci code -> 2^n complexity -> expensive calculation -> time taking -> our websites whole functions slow
      // ex: pehle fibo nikale 40 ka time lagega answer ayega -> then ab apan counter inc dec kare so usme time lagega -> hoga kya ki again rerender hoga pura so again counter inc dec hoga and fibo 40 calculate hoga so -> why do again this expensive operation fibo wala -> ki jab change counter pe change ho fib purana use ho and jab result pe change tab new cal ho fib -> so use usememo hook store previous result of fibo 
      // usememo hook -> use karke 1 render bacha lete hai useeffect mai 1 extra render lagta hai to show result -> so use usememo



    //   function Fibonnaci(n){  // usecallback ka use kar shkate hai yaha pe because ye depend ni hai jyada pe sirf number pe depend hai but hogya avoid karo and use kar shakte hai usecallback ka
    //     if(n==0 || n==1)      // or isko globally bana do so 1 baar bs bane ye 
    //         return n
    //     else
    //         return Fibonnaci(n-1)+Fibonnaci(n-2)
    //   }
          
    // or by usecallback


     const Fibonnaci = useCallback((n)=>{  // usecallback ka use kar shkate hai yaha pe because ye depend ni hai jyada pe sirf number pe depend hai but hogya avoid karo and use kar shakte hai usecallback ka
        if(n==0 || n==1)      // or isko globally bana do so 1 baar bs bane ye 
            return n
        else
            return Fibonnaci(n-1)+Fibonnaci(n-2)
      },[]) // kisi pe depend nu karra hai ye -> [] empty hai 1 baar bs create hoga






      const result = useMemo(()=>{return Fibonnaci(number)},[number]) // usememo(callback function leta hai ()=>{}) use karo and dependency ki number change ho tab new result cal karo fib ka warna purana use karo counter change ho toh
      // usememo -> se smooth hogya improve hogya
      
      // useeffect -> if weare using use effect insetaed of usememo then we have to make new state variable -> useeffect calls at last -> work smooth -> sab chal jayega tab ye chalega useeffect wala and rerender extra karna padega result show karne ke liye -> 1 render extra due to useeffect to show result -> so use usememo
    //   useEffect(()=>{
    //       setResult(Fibonnaci(number))
    //   },[number])

     return(
        <>
        <div className="co">
         <h1>Counter is : {count}</h1>
         <button onClick={()=>setCount(count+1)}>Increase Count</button>
         <button onClick={()=>setCount(count-1)}>Decrement Count</button>
        </div>

         <div className="fi">
            <h2> Fibonnaci Number : {result}</h2>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
         </div>
        </>
     )
   }



ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)