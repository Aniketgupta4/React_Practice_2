import React from "react";
import ReactDOM from "react-dom/client";
import Add from "./Add";


 const arr = [1,2,3,4]

function App(){
    
    return(
        // parent ke 4 child-> jitne array ka size utne bar chalega
         
        //   <>
        //         <Add></Add>
        //         <Add></Add>
        //         <Add></Add>
        //         <Add></Add>
        //   </>

              // or
          
              // 4 baar add apne se is liye arr use kare warna manually likhna padega
        <>
         {
            arr.map((value)=>
                <Add key={value}></Add>
            )
         }
        </>
    )
    
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)