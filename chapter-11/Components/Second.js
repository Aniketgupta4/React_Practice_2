import React, { useContext } from 'react'
import Third from './Third'
import GlobalContext from '../Global'

//    phase1 problem
// first wale se lega props wagera and third ko bheje ga

function Second ({count,setCount}) {

  // phase2 solution
  const Data = useContext(GlobalContext)

    return (
    <div>
        {/* phase1 problem */}
        {/* <h2>yoyo kaise hai ap log 2nd hu mai {count } {setCount}</h2>
        <Third count={count} setCount={setCount}/> */}
   
   
        {/* phase2 solution -> isme sirf rohit wala use kar shakte hai string -> ayse hi state ko use ni kar shakte b/c as a object use kar shakte hai {} */}
        
        {/* <h1>direct use of globalcontext in second pe {Data}</h1> */}

    </div>
  )
}

export default Second
