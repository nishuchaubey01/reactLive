import React , {useState}from "react";

const Display1 = () => {
  const Menu = [
    { style: "1", name: "RUNDHALS DOPPELPACK " },
    { style: "2", name: "red denim shirt " },
    { style: "3", name: " DOPPELPACK " },
    { style: "4", name: " DOPPELPACK " },
    { style: "204321E", name: "RUNDHALS DOPPELPACK " },
    { style: "red", name: "RUNDHALS DOPPELPACK " },
    { style: "white", name: "RUNDHALS DOPPELPACK " },
    { style: "7", name: "RUNDHALS DOPPELPACK " },
  ];

  const [id, setId] = useState("");
  const [image, setImage] = useState("");

  const inputsHandler = (e) => {
    setId(e.target.value);
  };

  const submit = () => {
    setImage(id);
  };
    const style = Menu.find((item) => item.style === id);

  return (
    <>
      <h1 className=" mt-5 text-center main-heading">Artikel Image</h1>
      <label>Enter Artikel : </label>
      <input
        type="search"
        placeholder="#style number"
        onChange={inputsHandler}
      ></input>
      <button type="button" className="btn btn-warning"
       onClick={submit}
       >
        click here
      </button>
      <hr />
      <img src={ process.env.PUBLIC_URL + `/IMAGES/${image}.jpg`}  alt= "images" height={280} />
      {/* <img src= {require("./IMAGEs/2.jpg/")}/> */}
      <p> {style?.name}</p>
      <p>{style?.style}</p> 

  {/* <p> {id?<p> {style?.name}</p> :  NO such style number exist }</p> */}
    </> 
  );
};

export default Display1;
