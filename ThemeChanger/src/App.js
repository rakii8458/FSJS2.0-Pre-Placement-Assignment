
import React, {useState, useEffect} from 'react'
import Theme from './Theme';
import {ThemeContext, themes} from './Context/contextdark';




function App() {
const [mytheme , setTheme] = useState(themes.dark);

const body= document.body;
useEffect(()=>{
  switch(mytheme){
    case themes.light:
      body.classList.remove("bg-dark");
      body.classList.remove("text-light");
      body.classList.add("bg-light");
      body.classList.add("text-dark");
      break
    case themes.dark:
      body.classList.remove("bg-light");
      body.classList.remove("text-dark");
      body.classList.add("bg-dark");
      body.classList.add("text-light");
      break
      default:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
  }

}, [mytheme])

//btn

function onHandleclick(){
 mytheme === themes.dark ? setTheme(themes.light) :setTheme(themes.dark) ;
 
}
  return (
  <>
  <ThemeContext.Provider value={{mytheme , onHandleclick}}>
  <div className="main-container">
      <h1 className="text-center">Theme Changer Web Page</h1>
      <Theme theme={mytheme}/>
    
      
    
   </div>

  </ThemeContext.Provider>
 

 
  </>

    
    
  );
}

export default App;
