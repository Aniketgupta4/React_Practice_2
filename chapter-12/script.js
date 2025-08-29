// react routing -> jo command de wo page khul jaye
// src folder use in this project
// details pe outlet ka use kare hai and nested content show karega by outlet -> ki details bohot saro ka details dikhaye

import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter,Routes,Route, Link } from "react-router";
import Home from "/src/Home";
import Contact from "/src/Contact";
import DashBoard from "/src/DashBoard";
import "./style.css";
import Details from "./src/Details";
import Zero from "./src/Zero";
import Hello from "./src/Hello";
import Hi from "./src/Hi";


function App(){

    return (

        // 1) Routing -> without reload dushre page pe ja shakte hai 
        // browserrouter batayega kon se page pe jana hai
        
        
        <BrowserRouter>
                  {/* har page pe ye content show hoga -> ui pe show hoga page switch karne ke liye -> without page reload */}
                  {/* ********* Link tag is convert into anchor tag in console -> beacuse it is library optimized way mai Link and browser understand html css js so convert hoga html css js pe  */}
                  {/* ****** nav hardcode hai yaha -> or kahi bhi likh shakte hai ki agar dashboard pe header ni aye so -> in header ko yaha ni likh ke alag alag individual page jake nav likho yaha common ni likho bs  */}
         {/* header section  */}
         <nav>   
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/DashBoard">DashBoard</Link>
            <Link to="/Details">Details</Link>
         </nav>

                  {/* ****** routes ke ander wale at a time 1 hi chalega -> beacause in each route only 1 page is there to render */}
                  {/* **** ye root wale hai -> start with "/...." -> child wale "...." normal likho */}
           <Routes>
              <Route path="/" element={<Home></Home>}></Route> 
              <Route path="/Contact" element={<Contact></Contact>}></Route>
              <Route path="/DashBoard" element={<DashBoard></DashBoard>}></Route>
              

               {/* 2) ******* nested routing -> index ayse hi likh diye -> http://localhost:1234/details/hello */}
               {/* **** ye root wale hai -> start with "/...." -> child wale "...." normal likho not use "/" in child direct le leta hai wo apne se -> if "/...." isme se start kare so phir root se find karega -> "...." isme direct apne parent se find karega ki "/...../...." ye self */}
               {/* ******* Outlet use -> inko show karane ke liye render karna hoga -> jis page pe show karna hai uspe jao and use Outlet -> details pe  */}

              <Route path="/Details" element={<Details></Details>}>
                  {/* index likhna hoga to fix content -> ye fix kar de ray hai details pe open hoye zero wala menas in detail page zero wale ka content show hoye in detail page -> baki dushre route pe show ni hoga content */}
                   {/* ******* iski nav link details page pe hai -> kyuki nested routing details pe hui hai */}
                   <Route index element={<Zero></Zero>}></Route>
                   <Route path="Hello" element={<Hello></Hello>}></Route>
                   <Route path="Hi" element={<Hi></Hi>}></Route>
              </Route>
          
           </Routes>


           {/* footer section bana do yaha */}
        </BrowserRouter>



         


    )
   
}


ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)