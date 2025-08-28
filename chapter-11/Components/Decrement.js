   {/* ****** Parent ke state variables ko child access use handle kar shakta hai as a props pass karna hoga to child */}
   {/* ******** PROBLEM(multiple children) : state variable is in child1 and a function to increment the count -> child2 also has a fucntion decrement count of child1 and child1  ka state change ho jaye child2 se   */}
   //  ********   mere pass(child2) na state ka access hai child1 ka or na parent ke pass access hai so -> 

import React from 'react'

function Decrement ({counts,setCounts}) {
  return (
    <div>
         {/* phase 2 */}
        {/* <button onClick={()=>setCounts(counts+1)}>Decrement</button> */}

       
       {/* phase 3 solution */}

        <button onClick={()=>setCounts(counts-1)}>Decrement</button>

    </div>
  )
}

export default Decrement
