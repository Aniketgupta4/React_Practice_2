// useref hook -> rerender ni karta -> value store karke rakhta hai -> jab koi dushra fucntion render hota hai tab ye ye value ui pe show karta hai

import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client"


function App(){
    
     const [count,setCount] = useState(0)
     
     //let money = 0; // ****** bascically -> in each rerender iske value 0 se initialize hogi -> beacuse state manage ni karra hai apan state variable ni banaye hai 
     // so across rerender value 0 na ho -> pehle wali value rahe -> iska reference ajaye money ka pehle wale ka -> so use useref hook
     // useref hook -> return object -> iske ander kisi key pe valuse hoti hai -> so ----.value karke access karte hai  
     // ******* and jab koi rerender karega tab ye function apni value ui pe show karega
     const money = useRef(0) // money purani value store karke rakhe ga 
     console.log(money)

    return(
        <>
          <h1>Counter is : {count}</h1>
          <button onClick={()=>setCount(count+1)}>Increment</button>
        
         {/* console pe work karegi because state variable ni banaye apan */}
         {/* by useref hook -> sahi ho jayega -> return object so ------.value karke use karo  */}
         {/* ******** money apni previous value store(hold) karke rakhega -> rerender ni karega useref -> only state variable rerenders */}

          <h1>Money is : {money.current}</h1>
          <button onClick={()=>{
            money.current = money.current + 1
          }}>Increment</button>
        
        </>
    )


}



ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)