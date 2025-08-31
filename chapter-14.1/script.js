// **** index key ni rakho 
// voting app simple


// ******** at the end js work karta hai handle karna hai -> pure ko rerender or ek component ko render manage toh js hi karega na bhale react bole but real dom pe change js hi karega na -> har baar rerender ni hoga code -> js ko thodi na pata hai react ne diya hai code ka or koi ne -> so rerender ni hota hai element change hota hai sirf not whole rerender -> inspect karke dekh lo 

import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Add from "./Add.js" 
  

function App(){
    
     const [language,setLanguage] = useState(["TS","JS","JAVA"])
    

     function handleClick(){
        setLanguage(["C++",...language]) // new value add so new arr lo so spread kar diye
     }

     // **** issue key={index} : ki new add hora hai so first pe add hoga -> and jo pehle first tha uska vote new wale pe aara and last wala 0 aara sab count value exchange hogi dur to key as index
     //      ex:  ts : 2                 c++ : 2
     //           js : 4  -> new add ->  ts  : 4   
     //         java : 5                 js  : 5
     //                                java  : 0
     //
     //     -> key ko index lene se ye issue hota hai

    return(
     <>
        <div style={{display:"flex", justifyContent:"center" , gap:"20px" }}>
            {
                // solve key={value} not key={index}
                language.map((value,index)=> <Add key={value} value={value}></Add>)
            }
        </div> 

         {/* add click kare so add ho jaye c++ wala */}
        <button onClick={handleClick}>Add Language</button>
     </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)


 // explain aysa kyu hua -> **** basically key state ke sath attach hoti hai
 //
 //          ["TS","JS","JAVA"]                          ["C++","TS","JS","JAVA"]
 //                ------                                       ---------
 //              /   \   \        -> new element add ->        /  \   /  \
 //             ts   js  java                                 c++  ts js java   (java ke liye new state variable banega so 0 value hogi -> state rerender hogi value hold rakhega -> state pehle wali only value change -> so galat output mila) 
 //    (key)   k=1  k=2  k=3                                k=1  k=2  k=3  k=4
 //   (vote)    3    2    7                                  3    2    7    0
 //
 //  -> **** so key must be unique -> ap key ni diye so react khud key dega as index jo apne array diya hoga uske hisab se
 //  -> **** key = value bhej do aaray ki agar unique hai toh





 // solution (** state key se sath attach rehta hai) -> key = {value} <- unique

 //
 //          ["TS","JS","JAVA"]                          ["C++","TS","JS","JAVA"]
 //                ------                                         ---------
 //              /   \   \        -> new element add ->         /  \     /  \
 //             ts   js  java                                 c++  ts   js java  
 //    (key)   k=1  k=2  k=3                                k=c++  k=ts  k=js  k=java (unique)
 //   (vote)    3    2    7                                  0     3      2       7
 //
 //  -> key ki value hamehsa unique and key ko index ni lo 





 // **** at the end js work karta hai handle karna hai -> pure ko rerender or ek component ko render manage toh js hi karega na bhale react bole but real dom pe change js hi karega na  