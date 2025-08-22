
import React from "react";
import ReactDOM from "react-dom/client"

function Counter(){
    let count = 0;
    
// event listner(onclick) lagao in button -> ki button dabane se work ho -> and callback function execute hoga
// dom change ni hora hai only console likhne se work ni karra value not inc dec -> document select kareke karo so work hoga 

    function increment(){
        count = count+1;
        console.log(count)
       // not a good habit -> we are doing dom manipulation -> hm karray hai but ye react ka kaam hai -> react self dom manipulation acha karta hai hm ni kar pate dom manipulation ache se
        document.querySelector('h1').innerText = `count is ${count}`
    }

     function decrement(){
        count = count-1;
        console.log(count)
       // not a good habit -> we are doing dom manipulation -> hm karray hai but ye react ka kaam hai
        document.querySelector('h1').innerText = `count is ${count}`
    }

    // basically changes hora hai but hm dom manipulation karray hai -> and ui pe show ni hora change -> so react give hooks -> apne se state change hoga reflect in ui -> react do dom manipulation
    // so solve this problem hooks aye -> functions hai use state hooks -> data change so state change hua but not visible in ui 
    
    return(
        <div className="first">
           <h1>Count is : {count}</h1>
           <button onClick={increment}>Increment</button>
           <button onClick={decrement}>Decrement</button>
        </div>
       
    )
}

const op = ReactDOM.createRoot(document.getElementById("root")).render(<Counter/>)

