// in this we use increment decrement page too 

// state up lifting  or state lifting

   {/* ****** Parent ke state variables ko child access use handle kar shakta hai as a props pass karna hoga to child */}
   {/* ******** PROBLEM(multiple children) : state variable is in child1 and a function to increment the count -> child2 also has a fucntion decrement count of child1 and child1  ka state change ho jaye child2 se   */}
   //  ********   mere pass(child2) na state ka access hai child1 ka or na parent ke pass access hai so -> 

                 // parent
                //      // 
                //       //  
        // child1        child2
  //   (increment)       (decrement)
  // state isme hai         so isme se child1 ke state kaise access kare 



   // ****** parent ke pass hai state function so child ko bhej shakte hai but child to parent call kar i shakte and sibling ka access hi hai so share kaise karuga props wagera
   // soltuion -> state lifting -> count and setcount of child1 ko parent ka part banado -> so parent se child pe pass kar shakte hai that is state lifting

                // parent (state and setstate isme bana do so sab access kar shalte hai ab)
                //      // 
                //       //  
        // child1        child2
  //   (increment)       (decrement)

  // ****** most common ancestor ke pass hona chaiye state functions wagera so child bhi use kar shake -> state lifting




import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import Increment from "./Components/Increment"
import Decrement from "./Components/Decrement"


function App(){
   
            // phase 1
    //    const [count,setCount] = useState(0)
   

        
      {/* phase 3 : solution */}
      const [count,setCount] = useState(0)


    return(
        <>
            {/* ****** Parent ke state variables ko child access use handle kar shakta hai as a props pass karna hoga to child */}
            {/* ******** PROBLEM(multiple children) : state variable is in child1 and a function to increment the count -> child2 also has a fucntion decrement count of child1 and child1  ka state change ho jaye child2 se   */}
            {/*  ********   mere pass(child2) na state ka access hai child1 ka or na parent ke pass access hai so -> */}

             {/* phase1 */}

            {/* <h1>Parent Counter is : {count}</h1>
            <Increment counts={count} setCounts={setCount}/>  */}
           
            {/* as an argument send karray hai count ko -> as a props receive karegai in increment.js */}
            {/* ****** Props pass kar diye to child so parent ke state variable sand function ko handle kar shakte hai in child  */}
        
        
        

        {/* phase 2 problem analysis */}
        
         {/* <Increment />        
         <Decrement /> */}



         {/* phase 3 : solution -> state lifting */}
          
         <Increment counts={count} setCounts={setCount}/>        
         <Decrement counts={count} setCounts={setCount}/>
        
        </>
    )
} 


ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)