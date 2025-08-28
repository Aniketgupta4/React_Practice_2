// not make global file in components it make it in global space pe -> simple banao kisi ke ander ni banao bs
// ******** global file banao -> so usecontext ka use karna hoga -> direct kahi bhi use kar shakte hai
// is file mai kuch bhi rakh shakte hai array string state and jo bhi
// multiple global files bana shakte hai 


// phase2 solution -> globalcontext createcontent banao -> use karo jaha use karna ho
import { createContext } from "react";


const GlobalContext = createContext("Rohit") // ******* rohit ki space pe state ayega if first se state pass kare toh 


export default GlobalContext




// s1 -> createContext karo so sabke pass access hoga iska 
// s2 -> useContext se use kar shakte hai
// s3 -> for state wagera ke liye -> <GlobalContext.Provider value={{count,setCount}}> use like this   
                                // <h1>hello</h1>
                        //          <Third /> 
                        //          <Second />
                            //     </GlobalContext.Provider>