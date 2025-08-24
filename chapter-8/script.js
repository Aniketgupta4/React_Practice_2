// password generator webpage

// -------------- usecallback hook ----------------- rerender pe catch karke rakhta hai purana function jo pehle create hua tha value stare karke sakhta hai
// for optimization in code -> optimization is liye karn hai because bar bar memory allocation (generatepassword) hora hai agar koi sa bhi set wale call horay hai toh -> so purane wala function ek baar chalao and usko hi chalao generatepassword ko -> so use usecallback
// sabse pehle memory allocate hoga 
// pehla function passwordgenerator and iske ander 2nd function generatepassword -> so ab generatepassword wale ko bar bar kyu create kare memeory storage ke usme se bar bar memor y allocate kyu ????????
// setPassword(pass) call kare so generatepassword ko kyu call karegai new memory allocate hogi and meko generatepassword ki jarurat ni hai main baat ye hai -> so purana wala hi memory allocation use ho ->purane wale code ko tab use ni kar shakte jab set wale call hongai -> except setpassword se koi change ni hoga in generatepassword pe
// bascially jab useeffect call hoga generatepassword wala tab mai purana wala use ni kar shakta -> so ye new value ke hisab se value ni dega
// set wale bhi ek hi baar create hote hai and reference fix ho jata hai -> and pass len numch charahan bar bar creae hote hai

// ******** so basically closure hi use hora hai -> as usecallback

import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"




function PasswordGenerator(){
    
    //  basically har set wale ki liye function again call hoga main (rerender)  -> jo set wala call hoga uski valuse change hogi and baki sab ki same value rahegi
    // jitni values change in webpage utni -> states are there
    const [Password,setPassword] = useState("")
    const [length,setLength] = useState(10) 
    const [numberChanged,setnumberChanged] = useState(false)
    const [charChanged,setcharCharacter] = useState(false)

     

     // optimise hogya 
    // so isko usecallback hook ke ander daldo
    // ******* generatepassword passwordgenerator ke ander hai -> so bar bar create na ho generatepassword purana wala use ho jaye so as a closure pass hora hai function in usecallback ke form mai -> ki agar generatepassword iska kuch change ni hora hai so ye dushri outside call pe use ho jayega -> agar change hua so new banao 

     const generatepassword = useCallback(()=>{
   
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


     },[length,charChanged,numberChanged]) // so jab ye sab change hoga tab ye sab again create hoga -> verna purana chalega 


    
    // ******* generatepassword() -> infinite loop pe chale jayega -> 1st time function call hua so it give password -> set kar diye so again function call and value update -> so again function chalega and yahi bar bar hoga -> so infinte loop because direct function call kar diye and bar bar rerender hora hai -> useeffect use hoga

    // ******* so ab ache se work karega : useffect use karo -> beacuse ye sabse last mai chalega -> [] empty hai so ek baar bs chalega 
    useEffect(()=>{
        generatepassword()
    },[length,numberChanged,charChanged]) // [length] yaha length diye so jitni length hai utna password ayega length -> because abhi tk kisi ke pass access ni tha jab length pass kare tab access agya har set walo ke pass generatepassword ka access agyega

         // or
     
     //  },[passwordgenerate])



  // same for numberChanged and charChanged ->ki inme kuch bhi change hua so function call kar dega generatepassword wala -> parent call hoga so ye call ni hoga useeffect hai toh

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