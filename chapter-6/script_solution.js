import React from "react";
import ReactDOM from "react-dom/client"
import { useState } from "react";
// useState sirf export karke aya hoga isi liye ayse import kare

// useState Hooks 
// basically changes hora hai but hm dom manipulation karray hai -> and ui pe show ni hora change -> so react give hooks -> apne se state change hoga reflect in ui -> react do dom manipulation
// so solve this problem hooks aye -> functions hai use state hooks -> data change so state change hua but not visible in ui 
// sare jagay changes hongai jaha jaha pe {variable} likha hoga     
// usestate conditonal statement mai ni likh shakte 

function Counter(){
    // usestate(0) return array -> and 2 chiz return hongi ek value jo ap diye and ek function  
    // variable change hoga so set wale ko call kardo -> so ui pe data visible hoga ab -> react khud changes karega by dom 
    let [count,setcount] = useState(0)
    
    function increment(){
        count = count+1;
        // use this set function ke ander likh do -> jisko change karna hai
        
        // ********* ye dubara Counter() function call karta hai so setcount() value change -> and new value useState pe set ho jati hai so count reinitializes -> and changes reflect all places 

        setcount(count)
        console.log(count)     
    }

     function decrement(){
       
        setcount(count-1)
        // or
        // count = count-1;
        // setcount(count)
        console.log(count)
    }

   
    return(
        <div className="first">
           <h1>Count is : {count}</h1>
           <button onClick={increment}>Increment {count}</button>
           <button onClick={decrement}>Decrement {count}</button>
        </div>
       
    )
}

const op = ReactDOM.createRoot(document.getElementById("root")).render(<Counter/>)
