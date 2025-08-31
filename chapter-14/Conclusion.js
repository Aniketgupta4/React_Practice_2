//                        --------------------------- REACT WORKING ----------------------------
// 
//
// ------------------------------------------------------MYTHS---------------------------------------------------------------
// 1) virtual dom react main use ni hota hai 
// 2) js code wo dubara rerender karta hai pure code koa where react 1 component ko rerender karta hai 
// ---------------------------------------------------------------------------------------------------------------------------
// 
//  ----> A) js mai kya dikkat hai so react aya
// 
//                  dom tree (js html ke sath interact kar shake)
//    btn ->        /      \
//  (bg red)       ----     ----
//  (color blue)   / \      /  \
//              ---  ---   ---  ---        
// 
//      -> 1 1 karke execute hongi -> ** 1 sath sab execute ho -> 2 concept reflow and reconcept
//        (dom pe code likha hai -> ui pe show karne ke liye ye do chiz repaint and reflow calculate karna padta hai)
//     
//      * reflow (**expensive)-> position nikalna element konsi position pe ayega and size kya hoga
//      * repaint (little expensive)-> pixel color ko attach karana hai
// 
//       -> ** for this btn 2 baar calculate(repaint and reflow) hoga (for bg and color) so cost lagri na double -> so 1 baar mai ho aysa karna hai cost kam lage -> 1 sath execute kardo 2no work ko but js is single threaded -> 1 1 karke execute karega    
//       -> ** screen visible kaise hai koisi bhi -> by 60fps approx -> 60 frame per second -> lagega video chalri hai but 60 photos per second dikhara hai
//       ->             60fps (1 inst ko karne mai 1/60 time lagega)
//                     / \ / \  
//           frames  -- -- -- -- .........60 (frame mai code likha hai-> 1/60 sec pe change karna hai)
//           so har frame ko show hone ke liye time milega so in 2 no instruction ko execute kardi in frames and lagega ek sath execute kardi -> and show in ui final -> in 1/60 seconds
//           ---- All this done by javascript ----
//   
//       -> JS -> instructions ek ek karke js execute karega -> 1 1 karke execute karega in frames so har baar repalint reflow calculate hoga     
//       -> **** REACT(Automatically segment mai divide kar dega hai) -> but agar bundle bana ke bhej diye (in 1 frame) all instrucitons ko so ek sath execute karega -> batch update ki batch bana diye and execute -> and react -> js ko dega to execute
//       -> **** js pe externally code likhna hoga to apply fragemnt ki batch banke execute ho
// 
// --------------------------------------------------------------------------------------------------------------------------------------------
// 
//   -----> B) 2 types of DOM are there 1) Real DOM 2) Virtual DOM 
//         -> Real DOM -> any change in real dom reflect in ui (har ek component ke change pe real dom change render hota hai)
//         -> Virtual DOM -> react khud create karta hai -> copy of real dom -> code pe change hua so dom create karega (virtaul) and reflect changes in it (virtual dom) -> basically 2 copy banegi 1 mai as it is rahega and 2 mai changes hongai and compare karega 1 se (i.e. diffing algorithm-> kis node pe change hua hai) -> so jis node pe change hua hai sirf usko hi batch bana ke bhej dega real dom ke pass   
//                        -> not direct change in real dom -> 1st change in virtual dom compare it then reflect in real dom   
//                        -> **** DIFFING ALGORITHM -> ex-> pehle color black hai ye karo wo karo atlast color black karo so -> no changes beacause at the last first and last color toh black hai na -> ye react smajh jata hai by diffing algorithm  
//                        -> **** basically any change new virtual dom create and changes in it compare with previous one then reflect in real dom in the form of batches 
//                           
//                   virtual dom -> light weight small in size a/c to real dom -> copy of real dom
//                   /      \
//                 ----     ----
//                 / \      /  \
//              ---  ---   ---  --- 
// 
//         ex -> 
//  
//                  virtual dom1                    virtual dom2 (changes ispe hongai match with dom1 and reflect change in real dom)
//                   /      \                        /    \
//                 ----     ----  <-diffing algo-> ----   ----
//                 / \      /  \                   /  \    / \ 
//              ---  ---   ---  ---              ---  --- --- ---
//                                                  / (batch banke jayega in real dom -> jisme jisme changes hue hai nodes pe)
//                                                 \/   
//                                   ////REAL DOM///////
//                                   //               // (is is node pe change hua hai)
//                                   ///////////////////
// 
//        ex ->  count = 0 1 2 -> 3 final 
// 
//                setcount(count+1)
//                setcount(count+1)      -> ***3 baar kyu karu 1 bar karuga direct 3 inc karuga b/c same kaam karne ko bolray hai toh kyu 3 baar chalo 1 1 1 
//                setcount(count+1)
//
// --------------------------------------------------------------------------------------------------------------------------------------------------
// 
//          q1) ->            parent element           (code see in script.js and Add.js)
//                             /  /   /   /
//                            \/  \/ \/  \/
//                           c1  c2  c3  c4 (child)
//                        add   add  add   add       (function)
//                        key=1  k=2  k=3  k=4
//            
//      -> add.js ke ander state banaye hai 
//      -> **** question ye hai add child2 onclick ko call kare -> so kaise pata chalega konse ko call karna hai 4 tho hai yaha -> 2nd walo ko onclick kare so kaise pata chalgea konse function ko rerun karna hai -> confusion -> ki kaise uniquely define kare -> keys ka concept aya 
//      -> **** so jiske child ko rerun kare gai so pta chal jayega kisko rerun karna hai by key -> so key attach with state and isko render karo -> key must be unique
//      ------------ keys -------------
// 
//       or
//                                              diffing algorithm   
//       ex ->               parent          -----------------------    parent 
//                        /   \   /   \                               /   \ |  /  \  
//                   milk chai samosa dabeli                    pates milk chai samosa dabeli
//       
//          -> match hoyega ek ek element
//  (worst) -> update (send hoyega ki ye karo) : milk compare with pates so milk delete and new pates add and chai delete then milk and so on 
//          -> diffing algorithm node compare karega and ayse work karega -> delete add -> apan ne key ni di hai -> so dena jaruri hai -> warna delete hoga add hoga faltu ka
// 
//   (best) -> ideal update : pates wala node add karo and ek ek node piche kishka do
// 
// 
// 
// ----------------------------------------------------------------------------------------------
// 
//                                    
// 
//         
// 
//
//
//