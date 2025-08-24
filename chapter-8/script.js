// password generator webpage

// jitni values change in webpage utni -> states are there

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"


function PasswordGenerator(){
    
    //  basically har set wale ki liye function again call hoga main (rerender)  -> jo set wala call hoga uski valuse change hogi and baki sab ki same value rahegi

    const [Password,setPassword] = useState("")
    const [length,setLength] = useState(10) 
    const [numberChanged,setnumberChanged] = useState(false)
    const [charChanged,setcharCharacter] = useState(false)

     
    function generatepassword(){
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(numberChanged)
            str+="0123456789"
        if(charChanged)
            str+="!@#$%^&()_+={}[]\|/><"
        
        let pass = ""

        for(let i=0;i<length;i++){
            pass+=str[Math.floor(Math.random()*str.length)]
        }

         setPassword(pass)

    }

    // ******* generatepassword() -> infinite loop pe chale jayega -> 1st time function call hua so it give password -> set kar diye so again function call and value update -> so again function chalega and yahi bar bar hoga -> so infinte loop because direct function call kar diye and bar bar rerender hora hai -> useeffect use hoga

    // ******* so ab ache se work karega : useffect use karo -> beacuse ye sabse last mai chalega -> [] empty hai so ek baar bs chalega 
    useEffect(()=>{
        generatepassword()
    },[length,numberChanged,charChanged]) // [length] yaha length diye so jitni length hai utna password ayega length -> because abhi tk kisi ke pass access ni tha jab length pass kare tab access agya har set walo ke pass generatepassword ka access agyega

  // same for numberChanged and charChanged ->ki inme kuch bhi change hua so function call kar dega generatepassword wala

    return(
        <>

           <h1>Password-Generator</h1>

           <h2>{Password}</h2>
           <div>
           
            {/* e.target.value se apan ko value milti hai */}
            <input type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input>
            <label>Length is : {length}</label>
            
            <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setnumberChanged(!numberChanged)}></input>
            <label>Number</label>
          
            <input type="checkbox" defaultChecked={charChanged} onChange={()=>setcharCharacter(!charChanged)}></input>
            <label>Character</label>
          
           </div>
        </>
        
    )
}



ReactDOM.createRoot(document.getElementById("root")).render(<PasswordGenerator />)