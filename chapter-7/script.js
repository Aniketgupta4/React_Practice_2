import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Colorful from "/Component/Colorful";

// creating background color changer -> useeffects hooks 

function Main(){

   // working ex: setcount(1) => usestate(1) => count=1 and same repeat jitne baar button press hogi

   const [count ,setCount] = useState(0)

    return( 
        <>
        <div>
          <h1>Counter is: {count}</h1>
          <button onClick={()=>setCount(count+1)}>Counter</button>
        </div>

        <hr />
          
          {/* ******** kya ye bhi render hoga dubara agar counter pe karegai kuch toh ????? -> colorful is a function call -> counter click se main function chalge so -> clorful bhi chalega beacuse memory allocate hogi and so colorful ko chalega but useeffect ni chalega colorful ke ander ka baki work hoga print hoga first and second but useeffect wala ni chalega -> so all instructions execute -> memory allocate then instructions execute hongi all kyuki counter call hoga toh colorful bhi chalega beacuse it is a function call */}
          {/* if use effect use ni kare and document.body.style.backgroundColor = color -> ye khula likha hai so again chalega ye -> memory jyada lega bekar hogi performance -> beacuse ye dom manipulation part hai -> usko khula ni rakho useeffect use karo */}
          
          {/* ********* so colorful pura ni chale agar counter mai change ho toh -> so new hook aya -> react memo during export -> so ab counter ke changes colorful ye ni reflect hongai -> first second kuch bhi ni chalgea ab colorful ka */}
          {/* ********* react memo -> ni chalge agar counter pe change hua so colorful ni chalega -> har jagay use memo ni use kare -> beacuase iski bhi kuch cost hai */}
          {/* react memo -> jab props change hongai -> so kuch changes hongai so ye allow karegai -> ki render hoga counter pe colorful bhi */}
          <Colorful name={count}></Colorful>
          
          {/* ****** react memo -> basically jab parent bohot sara changes kare tab memo ka use karna */}
          {/* isme value (props) fix (hardcode) hai -> so render ni hoga bar bar -> react memo dhyan rakhega */}
          {/*  <Colorful name="john"></Colorful> */}

          {/* <Colorful></Colorful> */}
        </>
    )


}



ReactDOM.createRoot(document.getElementById("root")).render(<Main></Main>)