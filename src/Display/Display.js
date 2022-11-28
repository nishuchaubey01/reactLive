import React from 'react';


// import ReactDOM from 'react-dom';
var listOfImages =[];

class Display extends React.Component{


   
    
    importAll(r){
       var index= `./IMAGE/${index}.jpg` ;
        return r.keys().filter(r==index);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context( `./IMAGE/${index}.jpg`, false, /\.(png|jpe?g|svg)$/));
    }
    render(){
        return(

          <>

       <h1 className=' mt-5 text-center main-heading'>Artikel Image</h1>
      <label>Enter Artikel : </label>
      <input type= "search" placeholder='#Artikel No.' 
      //  value={this.state.id}
      //  onChange={this.onInputChange}
      ></input>
      <button  type='button' className='btn btn-warning' >click here</button>
      <hr/>
          <div>
              
                   {
                    listOfImages.map(
                      (image, index) =>    <img key={index} src={image} alt="info"   height={300} width={250}></img>
                    )
              }
              
          </div>
          </>
        )
    }
  }

export default Display;