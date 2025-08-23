import { useState,useEffect } from "react"
import React from "react"

function Colorful({name}){ // props

         // set initial color as black in background
    const [color,setColor] = useState("black")
       // change colors -> rerender hoga when we click button -> so color change hoga means function dubara call hoga -> 1st memory allocate hoga then value set hogi and changes hongai

    // hm khud dom manipulte karray hai 
    // ******** hm ek baar click kare so render hua  -> 2nd time click kare toh render hua thik -> then ab ye render ni hoga -> kisi ek button pe -> this is only done for primitive value not for objects , arrays -> beacuse react hosiyar hai normal 1 baar change hua 2nd time mai samjh gya same hua so kar diya 3rd time ni karga -> and objects mai ye call by refrence hoga so 1 baar bs render karega
   // *********  so 2 baar kyu hua rerender (for primitive values) this is exception -> but 3rd time ni hoga 
     // for primitive(small) -> bailout problem named by react -> basically color red hai so again click kare so kyu rerender ho phir se red kyu kare -> so sirf 1 baar hoga next time samjhega then 3rd time se ni karega -> beacuse energy resource lagega bar bar same work karne mai


     // ***** isko hm ayse open ni likhne -> kyuki ye 2 baar run na ho -> so useeffect ka concept aya
   // document.body.style.backgroundColor = color

    
   // or 

    // useeffect(callback function,dependency)
    // useeffect hook -> more correct way -> basically ye 1 baar work karegi -> jab color hongi -> problem solve dom wala part ni work kara for same change -> ex: color red hua ek baar button click kare toh 2 nd time useeffect ke andar wala ni change beacuase same thing hai so dom work ni hua is baar 
     // ******* useeffect -> it is a speciaal hook -> work at last jab uper wale niche wale work ho gaye hongai tab useeefect wala execute hoga  -> ex: first second 
    // ******* basically initial render pe work hoga 1 baar -> next time tab work hoga jab isme depenency hogi tab -> agar dependency ni hai so next time work ni hoga -> same ko bar bar click karegi so ni chalega useeffect hook
    // ******* agar dependency aray khali diya so 1 baar chalega -> agar dependency aray hi ni diya so baar baar chalega -> pehle wali problem 
    // ******** basically apan button click kare so 1 baar chalega main and useeffect chalega -> and next time same ko click karegai so main chalega and useeffect ni chalegi 2 nd time  

      console.log(name)
    
     console.log("first")

     useEffect(()=>{
        console.log("third -> useeffect -> at last execute") 
        document.body.style.backgroundColor = color
     },[color]) 

     console.log("second") 

   return(
      <>
          
           <h1>Background Color Changer:</h1>
            <div className="but">
               <button onClick={()=>setColor("red")}>Red</button>
               <button onClick={()=>setColor("blue")}>Blue</button>
               <button onClick={()=>setColor("orange")}>Orange</button>
               <button onClick={()=>setColor("green")}>Green</button>
               <button onClick={()=>setColor("pink")}>Pink</button>
            </div>
            
      </>
   )

}


//export default Colorful

// or

 {/* ********* so colorful pura ni chale agar counter mai change ho toh -> so new hook aya -> react memo during export */}
export default React.memo(Colorful)