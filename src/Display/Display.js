import React, { useState } from "react";
import "./Display.css";


const Display1 = () => {


  const [id, setId] = useState("");
  const [image, setImage] = useState("");

  const inputsHandler = (e) => {
    setId(e.target.value);
  };

  const submit = () => {
 if (!id) return 
            <img
              src={`/IMAGES/err.jpg`}
              alt="images"
              height={450}
              width={350}
              className="hover-zoom"
            />
   setImage(id);
  };
 

  

//   console.log(style);
  
  return (
    <>
   

      <div id></div>
      <label>Enter Artikel : </label>
      <input
        type="search"
        placeholder="#style number"
        onChange={inputsHandler}
      ></input>

      <button type="button" className="btn btn-warning" onClick={submit}>
        click here
      </button>
      <hr />


        

        <div>
          <div className="img-wrapper">
            <img
              src={process.env.PUBLIC_URL + `/IMAGES/${image}.jpg`}
              alt="images"
              height={450}
              width={350}
              className="hover-zoom"
            />
            </div>
            </div>
         </>

     
  );
};


export default Display1;
