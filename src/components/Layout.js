import React from 'react';
import { Link } from 'react-router';
import Header from './Header';
import SideMenu from './SideMenu';




export default class Layout extends React.Component {
  constructor() {
  super();
  this.state={
    clickedIndex:""
  }

  this.handleGetData = this.handleGetData.bind(this);
}

 handleGetData(clickedLinkIndex,e){
   e.preventDefault();
   console.log(clickedLinkIndex);
   this.setState({clickedIndex:clickedLinkIndex});

   /*fetch('http://localhost:3000/src/images/Panda.png')
    .then(function(response) {
      return response.blob();
    })
    .then(function(imageBlob){
      console.log("image")
      document.querySelector('img').src = URL.createObjectURL(imageBlob);
    })
    .catch(function(err) {
	// Error :(
  });*/

 }
  render() {
    console.log("Layout render")
    var self=this;
    var children = React.Children.map(this.props.children, function (child) {
        return React.cloneElement(child, {

            clickedIndex:self.state.clickedIndex,
        })
    });

    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <Header handleClick={this.handleGetData}/>
      <SideMenu/>
        <main className="mdl-layout__content">
          <div className="page-content">
            {children}
          </div>
        </main>
      </div>
    );
  }
}
