import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
    <h1>Custom function under main.jsx</h1>
    
  </div>
  )
  
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// } our expectation of rendering so we have to rebuild an custom render function.

//what react expects to render is:-
const ReactElement = React.createElement(
  'a', //type
  {href:'https://google.com', target: '_blank'}, //props
  "Click here and visit google :)" //the children or text part (innerHTML)
)
  


ReactDOM.createRoot(document.getElementById('root')).
render(
  
    //MyApp() will also execute cause react AED is js :)
    <div>
      <App/>
    </div>
    
  
)
