import './App.css';
import Display1 from './Display/Display1';



function App() {
  return (
    <div className="App">
       <div id='logo'> <img src={process.env.PUBLIC_URL + `/IMAGES/logo.JPG`}  alt= "images" height={100}/>   </div> 

     
       
      <Display1/>
    

    </div>
  );
}

export default App;
