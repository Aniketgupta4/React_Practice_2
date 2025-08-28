import React from 'react'
import GlobalContext from '../Global'
import { useContext } from 'react'

//    phase1 problem
// first wale se lega props 2nd and third ko bheje ga
//function Third ({count,setCount}) {
  

function Third(){ // phase2 solution


    {/* phase2 solution -> import globalcontext file and usecontext */}
   // const Data = useContext(GlobalContext)

   // or

    /* use state -> as a object lete hai  */
   const {count,setCount} = useContext(GlobalContext)
              

    return (
    <div>
        {/* phase1 problem */}
        {/* <h2>third hu mai yr {count} {setCount}</h2> */}
    
    
    
          {/* phase2 solution -> import globalcontext file and usecontext */}
         
          {/* <h1>third me direct pass data by global file {Data}</h1> */}



           {/* use state -> as a object lete hai  */}
          <h1>{count} , {setCount}</h1>

    </div>
  )
}

export default Third
