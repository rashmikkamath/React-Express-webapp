import React from 'react';
import { Link } from 'react-router';

export default class DataBlock extends React.Component {
  constructor() {
  super();
  this.getImages = this.getImages.bind(this);
  this.state={clickedIndex:""}
 }
 componentDidMount(){

 }
 getImages(){

   fetch('http://localhost:3000/images/Panda.png')
    .then(function(response) {
      console.log("response"+response)
      return response.blob();
    })
    .then(function(imageBlob){
      var img = new Image();
      img.src = URL.createObjectURL(imageBlob);
      document.getElementById("img-container").appendChild(img);

    })
    .catch(function(err) {
      console.log("error");
	// Error :(
  });

 }
  render(){
    console.log("DataBlock renders"+this.props.clickedIndex);
    if(this.props.clickedIndex=="1"){
      this.getImages();
    }
    return(
      <div className="data-container">
        <div id="img-container">
        </div>
      </div>

    )
  }
}
