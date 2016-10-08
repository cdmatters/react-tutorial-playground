import React from 'react';
import ReactDOM from 'react-dom';

(function (){

console.log("Starting the tutorial...");


var App = React.createClass(
  { 
    render: function()
      {
        return (React.createElement("div", null, "Hello React World!"));
      }
  });


var JSXApp = React.createClass(
  { 
    render: function()
      {
        return <div>
            Hello, from Eric! It works
            </div>;
      }
  });


ReactDOM.render(React.createElement(App), document.body);
ReactDOM.render(React.createElement(JSXApp), document.body);



console.log("...Ending the tutorial");
})()
