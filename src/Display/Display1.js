import React, { useState } from "react";
import "./Display.css";
import Menu from "./Menu";

const Display1 = () => {
 

  const [id, setId] = useState("");
  const [image, setImage] = useState("");

  const inputsHandler = (e) => {
    setId(e.target.value);
  };

  const submit = () => {
    setImage(id);
  };
  const style = Menu.find((item) => item.style.trimEnd(' ') === image);

  
  // console.log(style);
  
  return (
    <>
    

      <form className="form-control">
      <label className="label">Enter Artikel : 
      <input
        type="search"
        placeholder="#style number"
        onChange={(e) => inputsHandler(e)}
      ></input>
      </label>
      <input type="Button" id="search-btn" value="Submit" onClick={submit} />
       </form>
   

     
       
       <div id="main-content">
        <div>
          {style && (
            <div id="div-left">
              <table>
                <caption> {style.des}</caption>
                <tr>
                  <th>Artikel:</th>
                  <td><p>{style.style }  <span>{style.des} </span> </p></td>
                </tr>
                {/* <tr>
              <th>Desc:</th>
              <td>{style.des}</td>
            </tr>  */}

                <tr>
                  <th>Sea-Div-Koll</th>
                  <td>{style.txt01}</td>
                </tr>
                <tr>
                  <th>Sizes</th>
                  <td>{style.siztxt}</td>
                </tr>
                <tr>
                  <th>Valid Sizes</th>
                  <td>{style.siz}</td>
                </tr>
                <tr>
                  <th>Ek Preis</th>
                  <td>{style.ek}</td>
                </tr>
                <tr>
                  <th>Vk Preis</th>
                  <td>{style.vk}</td>
                </tr>
                <tr>
                  <th>Warrengruppe</th>
                  <td>{style.wgr}</td>
                </tr>
                <tr>
                  <th>Produktgruppe</th>
                  <td>{style.prdgrp}</td>
                </tr>
                <tr>
                  <th>Fabricgruppe</th>
                  <td>{style.fbg}</td>
                </tr>
                <tr>
                  <th>Oberstoff</th>
                  <td>{style.obst}</td>
                </tr>
                <tr>
                  <th>Futterstoff</th>
                  <td>{style.ftst}</td>
                </tr>
                <tr>
                  <th>Fullung</th>
                  <td>{style.flst}</td>
                </tr>
                <tr>
                  <th>Weaving/Knitting</th>
                  <td>{style.kw}</td>
                </tr>
              </table>
            </div>
          )}
        </div> 

        <div>
          <div className="img-wrapper">

             {/* {(!id && !image) && <div>show img3</div>} */}
               {/* {(id && style) &&<div><img
              src={process.env.PUBLIC_URL + `/IMAGES/${image}.jpg`}
              alt="images"
              height={350}
              width={300}
              className="hover-zoom" /></div>}
              
              {(!id && style) &&<div><img
              src={process.env.PUBLIC_URL + `/IMAGES/err.jpg`}
              alt="images"
              height={350}
              width={300}
              className="hover-zoom" /></div>}
               */}


             {/* {( style && !id)<div><img
            src={process.env.PUBLIC_URL + `/IMAGES/err.jpg`}
            alt="images"
            height={350}
            width={300}  /> }</div>  */}
             {  style || !image
            ?<img
              src={process.env.PUBLIC_URL + `/IMAGES/${image}.jpg`}
              alt="images"
              height={350}
              width={300}
              className="hover-zoom"
            />  : <img
            src={process.env.PUBLIC_URL + `/IMAGES/err.jpg`}
            alt="images"
            height={350}
            width={300} />} 
          </div> 
        </div>
      </div>
      
      {/* <p> {id?<p> {style?.name}</p> :  NO such style number exist }</p> */}
    </>
  );
};


export default Display1;

