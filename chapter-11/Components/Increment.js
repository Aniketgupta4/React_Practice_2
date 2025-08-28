   {/* ****** Parent ke state variables ko child access use handle kar shakta hai as a props pass karna hoga to child */}
   {/* ******** PROBLEM(multiple children) : state variable is in child1 and a function to increment the count -> child2 also has a fucntion decrement count of child1 and child1  ka state change ho jaye child2 se   */}
    //  ********   mere pass(child2) na state ka access hai child1 ka or na parent ke pass access hai so -> 



import React, { useState } from 'react'

// function Increment({counts,setCounts}){    // phase 1
  
//function Increment(){  // for phase2

    // only for problem analysis phase2 
   // const [count,setCount] = useState(0)
  

   // phase 3 -> solution
    function Increment({counts,setCounts}){ 

    return (
    <>

       {/* <h2>Child Counter is : {counts}</h2>
       <button onClick={()=>setCounts(counts+1)}>Increment</button> */}


      
       {/* phase 2 problem analysis */}

        {/* <h2>Child Counter is : {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button> */}

      
      {/* phase 3 solution */}

        <h2>Child Counter is : {counts}</h2>
        <button onClick={()=>setCounts(counts+1)}>Increment</button>
       


    </>
  )
}

export default Increment
