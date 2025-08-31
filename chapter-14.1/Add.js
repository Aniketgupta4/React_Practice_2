import { useState } from "react"

function Add({value}){

    const [count,setCount] = useState(0)

    return(
        <>
          <h1>{value}:{count}</h1>
          <button onClick={()=>setCount(count+1)}>Vote</button>
        </>
    )
}

export default Add