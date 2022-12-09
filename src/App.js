import React from 'react';
import './App.css';
import Display1 from './Display/Display1';
// import Display2 from './Display/Display2';
// import Image from './Display/Image';

function App() {
  return (
    <div className="App">
       <div id='logo'> <img src={process.env.PUBLIC_URL + `/IMAGES/logo.JPG`}  alt= "images" height={100}/>   </div> 

     
        
      {/* <Display1/>  */}
      {/* <Display2/> */}
        <Display1/>
     {/* <Image/> */}
    </div>
  );
}

export default App;
