import React, { useState } from "react";
import "./Display.css";
import Menu1 from "./Menu1";
// Display1.use('/local-files', express.static('/'));

const Display1 = () => {
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  // _style because style is blocked scoped
  const [_style, setStyle] = useState();

  const inputsHandler = (e) => {
    setId(e.target.value);
  };

  const submit = async () => {
    setImage(id);
    const _style1 = Menu1.find((item) => item.style.trimEnd() === id);
    if (_style1) setStyle(_style1);
    else {
      alert("Style not found!");
      setStyle();
    }
  };

  const errorHandler = () => {
    // alert('Image not found');
    setImage("err");
  };

  // console.log(style);

  return (
    <>
        <label className="label">
          Enter Artikel :
          <input
            type="search"
            placeholder="#style number"
            onChange={inputsHandler}
          ></input>
        </label>
        <input type="Button" id="search-btn" value="Submit" onClick={submit} />
     

      <div id="main-content">
        <div>
          {_style && (
            <div id="div-left">
              <table>
                {/* <caption> {_style.des}</caption> */}
                <tr>
                  <th>Artikel:</th>
                  <td>
                    <p>
                      {_style.style} <span>{_style.des}</span>
                    </p>
                  </td>
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
                {/* <tr>
                  <th>Valid Sizes</th>
                  <td>{_style.siz}</td>
                </tr> */}
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

               <img src ="http://localhost:3000/details/img/myImage.png" />
              src={process.env.PUBLIC_URL + `/IMAGES/${image}.jpg`}
               src={ `file://///BLADEW3KSVR06/Bilder/err.jpg`}
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
                                           when id is not in folder and it exists in  Menu11  , then not getting  error image 
             */}

            {!(image && _style) ? (
              <img
              // src="http://127.0.0.1:8887/err.jpg"
              // src= {win.loadURL("file:\\\C:\Users\PEARLX\displayImageFromFolder\src\Display\IMAGE\err.jpg")}
              // src= {`file:///C:/Users/PEARLX/project-2/public/IMAGES/err.jpg`}
              // src="file://1.104.4.121/e/NishuProjects/images/err.jpg"

                src={`http://1.104.4.121/dotproject_2_1_8/images/err.jpg`}
                // src="http://1.104.4.121/e/NishuProjects/images/err.jpg"
                alt="images"
                height={350}
                width={300}
                // title ={`Image not found in image folder`}
                className="hover-zoom"
              />
            ) : (
              <img
              // src={`C:\Users\PEARLX\displayImageFromFolder\src\Display\IMAGE\${image}.jpg`}
              
                src={`http://1.104.4.121/dotproject_2_1_8/images/${image}.jpg`}
                //  src={process.env.PUBLIC_URL + `/IMAGES/${image}.jpg`}

                // src= {`file://1.104.4.121/e/NishuProjects/images/${image}.jpg`}

                // src= {`file://1.104.4.121/e/NishuProjects/images/${image}.jpg`}
                alt="images"
                height={350}
                width={300}
                onError={errorHandler}
                className="hover-zoom"
              />
            )}

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
