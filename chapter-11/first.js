// in this project we use global first second third page too 


// parent (state and setstate isme bana do so sab access kar shalte hai ab)
                //      // 
                //       //  
        // child1        child2
             //            // 
             //            // 
     //   subchild1      subchild2
// ******  (isme use karna hai state ) -> so parent to chlid1 then child1 to subchild1




//      ---------------- props drilling ( solution -> usecontext hook ) ---------------------

                // parent (state and setstate isme bana do so sab access kar shalte hai ab)
                //      // 
                //       //  
        // child1        child2
             //            // 
             //            // 
     //   subchild1      subchild2
             //
            //
 //      subchild11 
            //
            //
 //     subchild21  
     // ******  ( isme use karna hai state ) -> so parent to chlid1 then child1 to subchild1 then pass to subchild11 then from subchild11 to subchild21 )

// -> ******* and if only subchild21 ko use karna hai states wagera so props pass honge from parent then usko ab in sabmese  child1 subchild1 subchild11 pass hona padega subchild21 pe use karne ke liye -> or in 3 no bich walo ko use ni karna hai phir bhi pass hongai -> overhead increase beacuse last wale ko use karna hai but pass toh hoga sabse 
// -> ******* this props drilling problem use in big projects -> direct send kar shake parent to subchild21 direct -> usecontext introduce



// solution -> ****** global file bana do sab koi access kar shake -> jo state change ho global pe bhi change ho props pass na karna pade -> global file ko access kare sab direct and use direct

                // parent                          (state and setstate isme bana do so sab access kar shalte hai ab sab log)
                //      //                            // global file
                //       //  
        // child1        child2
             //            // 
             //            // 
     //   subchild1      subchild2
             //
            //
 //      subchild11 
            //
            //
 //     subchild21




import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Second from "/Components/Second";
import Third from "/Components/Third";
import GlobalContext from "./Global";
import { useContext } from "react";



function App(){

    // parent ke pass count and setcount hai -> second ko pass karra hai and -> 2nd 3rd ko pass karega 

//    phase1 problem
    //const [count,setCount] = useState(5)



    // phase2 solution -> isko globalcontext pe kaise dale
    const [count,setCount] = useState(1)


    return(
        <>
        {/* phase1 problem */}
           {/* <h1>Hello</h1>
           <Second count={count} setCount={setCount}/> */}
       
       
         
         {/* phase2 solution */}

          {/* <Third />
         <Second /> */}
         



           {/* ye globalcontext se bahar hai so isko purana rohit wala access hoga only state wala ni hoga access */}
                      <Second /> 


         
         {/* ********* globalcontext fisrt.js se wale jari hai global page ko and spread to all pages -> isko apan global file pe ni likh shakte hai state wager ko */}
         {/* jis page ko use karna hai use kar shata hai usecontext se */}
         {/* props pass karne ki jarurat ni hai ab  */}
         {/* state walo ko global ke andar dalna hai so ye karo -> as a object {} send karo -> ab isko sab access kar shakte hai */}
        {/* iske ander walo ko hi updated value milegi -> state ki */}

        <GlobalContext.Provider value={{count,setCount}}>
             <h1>hello</h1>
             <Third /> 
             {/* <Second /> */}
        </GlobalContext.Provider>

        
       
        </>
    )
}




ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)