import React , {useState} from 'react' ;

const Display1 = () => {

  

  // const Menu =[
  //   {"style":"1", "name":"RUNDHALS DOPPELPACK "} ,
  //   {"style":"2", "name":"RUNDHALS DOPPELPACK "} ,
  //   {"style":"3", "name":"RUNDHALS DOPPELPACK "} ,
  //   {"style":"red", "name":"RUNDHALS DOPPELPACK "} ,
  //   {"style":"white", "name":"RUNDHALS DOPPELPACK "} ,
  //   {"style":"7", "name":"RUNDHALS DOPPELPACK "} ,
  // ]

      const [id , setId]= useState('');
//   const [inputField, setInputField] = useState("");
      const [image , setImage]= useState('');


  const inputsHandler = (e) => {
    setId(e.target.value);
  };

   const submit =()=>{
    setImage(id);
   }
     
  
  //  function submit() {
  //   var resultData = Menu.filter(function (ob) {
  //     return ob.stylnum == inputField;
  //   });

  //   setItem(resultData);
  // }
  
  

  return (
    <>
      

      
       <h1 className=' mt-5 text-center main-heading'>Artikel Image</h1>
      <label>Enter Artikel : </label>
      <input type= "search" placeholder='style number'onChange={inputsHandler} ></input>
      <button  type='button' className='btn btn-warning'  onClick={submit}>click here</button>
      <hr/>
            
      <img src={(`./IMAGE/${image}.jpg`)}   alt= "shirt"  />
       
          
          </>
        )
    
            } 

export default Display1 ; 
