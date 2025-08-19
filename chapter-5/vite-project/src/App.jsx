// vite is also a bundler -> easy to use 
// start it -> npm create vite@latest

// ye karne se package.json ayi pehle -> then apan npm i karke node module install karliye -> package.lock.json agyi
// dependencies -> go to production example react and reacrdom
// devdependencies -> not go to production -> vite babel etc

// run karne ke liye apns hisab se manage kar shake hai -> big big run karne ko cmd hogi so manage apns se -> by package.json se
//   "scripts": {
  //   "dev": "vite", -> npm run dev -> change kar shakte hai dev ki space se start karo so use -> npm run start
  //   "build": "vite build", -> npm run build -> production ready code 
  //   "lint": "eslint .",
  //   "preview": "vite preview"
  // },

  import React from 'react'
  
  const App = () => {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
  
  export default App
  