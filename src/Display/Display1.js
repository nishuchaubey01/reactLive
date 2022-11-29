import React, { useState } from "react";
import "./Display.css";

const Display1 = () => {
  const Menu = [
    // { style: "1", name: "RUNDHALS DOPPELPACK " },
    // { style: "2", name: "red denim shirt " },
    // { style: "3", name: " DOPPELPACK " },
    // { style: "4", name: " DOPPELPACK " },
    // { style: "204321E", name: "RUNDHALS DOPPELPACK " },
    // { style: "red", name: "RUNDHALS DOPPELPACK " },
    // { style: "white", name: "RUNDHALS DOPPELPACK " },
    // { style: "7", name: "RUNDHALS DOPPELPACK " },
    {style: "1", "des":"O-NECK CHEST PRINT", "txt01":"J-02-007", "siztxt":"  S    M    L   XL  XXL XXXL", "size":"  X    X    X    X    X    X", "ek":"6,52", "vk":"15,99", "wgr":"K12 T-SHIRT/SERAFI", "prdgrp":"D4  FRONTPRINT","fbg":"01 100%CO","obst":"","ftst":"","flst":"","kw":"KNITTED"} ,

    {style: "2", "des":"V-NECK SOLID ", "txt01":"J-02-007", "siztxt":"  S    M    L   XL  XXL XXXL", "siz":"  X    X    X    X    X    X","ek":"8,17","vk":"19,99","wgr":"K12 T-SHIRT/SERAFI","prdgrp":"D0  SOLID","fbg":"01 100%CO","obst":"","ftst":"","flst":"","kw":"KNITTED"}                                                    

  ];

  const [id, setId] = useState("");
  // const [image, setImage] = useState("");

  const inputsHandler = (e) => {
    setId(e.target.value);
  };

  // const submit = () => {
  //   setImage(id);
  // };
  const style = Menu.find((item) => item.style === id);

  // const style = Menu.find((item) =>{
  //   if(item.style !== id) {
  //     return
  //      <img src="/IMAGES/1.jpg"/>
  //   }

  return (
    <>
      <h1 className=" mt-5 text-center main-heading">Artikel Image</h1>
      <label>Enter Artikel : </label>
      <input
        type="search"
        placeholder="#style number"
        onChange={inputsHandler}
      ></input>
      <button
        type="button"
        className="btn btn-warning"
        //  onClick={submit}
      >
        click here
      </button>
      <hr />
      <p>
         {style?.style}
      </p>
        <table>
        <caption>T-SHIRT RUNDHALS:</caption>
        </table>
      <img
        src={process.env.PUBLIC_URL + `/IMAGES/${id}.jpg`}
        alt="images"
        height={300}
      />

      {/* <p> {id?<p> {style?.name}</p> :  NO such style number exist }</p> */}
    </>
  );
};

export default Display1;
