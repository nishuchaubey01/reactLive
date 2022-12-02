import React, { useState } from "react";
import "./Display.css";
import Menu from "./Menu";
const Display1 = () => {
 

  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  // _style because style is blocked scoped
  const [_style,setStyle] = useState();

  const inputsHandler = (e) => {
    setId(e.target.value);
  };

  const submit = async () => {
    setImage(id);
    const _style1 = Menu.find((item) => item.style.trimEnd() === id);
    if (_style1)
      setStyle(_style1);
    else {
      alert('Style not found!')
      setStyle();
    }    
  };


  const errorHandler = () => {
    // alert('Image not found');
    setImage('err');
  }

  
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
          {_style && (
            <div id="div-left">
              <table>
                {/* <caption> {_style.des}</caption> */}
                <tr>
                  <th>Artikel:</th>
                  <td><p>{_style.style } <span>{_style.des}</span></p></td>
                </tr>
                {/* <tr>
              <th>Desc:</th>
              <td>{_style.des}</td>
            </tr>  */}

                <tr>
                  <th>Sea-Div-Koll</th>
                  <td>{_style.txt01}</td>
                </tr>
                <tr>
                  <th>Sizes</th>
                  <td>{_style.siztxt}</td>
                </tr>
                <tr>
                  <th>Valid Sizes</th>
                  <td>{_style.siz}</td>
                </tr>
                <tr>
                  <th>Ek Preis</th>
                  <td>{_style.ek}</td>
                </tr>
                <tr>
                  <th>Vk Preis</th>
                  <td>{_style.vk}</td>
                </tr>
                <tr>
                  <th>Warrengruppe</th>
                  <td>{_style.wgr}</td>
                </tr>
                <tr>
                  <th>Produktgruppe</th>
                  <td>{_style.prdgrp}</td>
                </tr>
                <tr>
                  <th>Fabricgruppe</th>
                  <td>{_style.fbg}</td>
                </tr>
                <tr>
                  <th>Oberstoff</th>
                  <td>{_style.obst}</td>
                </tr>
                <tr>
                  <th>Futterstoff</th>
                  <td>{_style.ftst}</td>
                </tr>
                <tr>
                  <th>Fullung</th>
                  <td>{_style.flst}</td>
                </tr>
                <tr>
                  <th>Weaving/Knitting</th>
                  <td>{_style.kw}</td>
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
             {/* ( !id  || !image) || ( !style==image ) */}
             {/* !id ||!image || !style    ------   getting image  and description on matching , but not on 
                                           when id is not in folder and it exists in  menu  , then not getting  error image 
             */}

             {!( image &&_style)
            ? <img
            src={process.env.PUBLIC_URL + `/IMAGES/err.jpg`}
            alt="images"
            height={350}
            width={300} />

             : <img
             
             src={ `file://///BLADEW3KSVR06/Bilder/${image}.jpg`}
             alt="images"
             height={350}
             width={300} 
             onError={errorHandler}/>} 



            {/* {(!id && !image) && <div><img
            src={process.env.PUBLIC_URL + `/IMAGES/err.jpg`}
            alt="images"
            height={350}
            width={300} /></div>}  */}
          </div> 
        </div>
      </div>
      
      {/* <p> {id?<p> {style?.name}</p> :  NO such style number exist }</p> */}
    </>
  );
};


export default Display1;