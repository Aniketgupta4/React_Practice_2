  {/* ********** chapter-13 -> use params -> dynamic route(:) ko select karne mai help karta hai -> "/...../:....." */}

import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter,Routes,Route, Link } from "react-router";
import "./style.css";
import Github from "./src/Github";


function App(){

    return (
        
        <BrowserRouter>
    
           <Routes>

              {/* ********** chapter-13 -> use params -> dynamic route(:) ko select karne mai help karta hai -> "/...../:....." */}
              {/* ***** http://localhost:1234/Github/:..... -> dynamic route banaye ki kisi bhi user ko dhud shake -> har ek ke liye individual thoda na banaye gai */}
           
           
              {/* <Route path="/Github/:name" element={<Github></Github>}></Route> */}


              
              
              
              {/* custom hooks day9 pe jao */}





                  
           {/* project chota sa */}

            <Route path="/Github" element={<Github></Github>}></Route>



           </Routes>

        </BrowserRouter>



         


    )
   
}


ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)