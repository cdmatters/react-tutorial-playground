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
        console.log(this.props.title);
        console.log(this.props); //properties passed in as attributes, below


        var headings = this.props.headings.map(
          function(heading){return(<th>{heading}</th>);}
        );

        var rows = this.props.data.map(
          function(row)
          {
            return(<tr>
              <td>{row.when}</td>
              <td>{row.who}</td>
              <td>{row.description}</td>
            </tr>);
          }
        );

        return(<div>
          <h1> {this.props.title} </h1>
          <table>
            <thead>
              {headings}
            </thead>
            {rows}
          </table>
        </div>);
      }
  });


var headings = ['When', 'Who', 'Description'];
var data = [
  { "when": "2 minutes ago",
     "who": "Jill Weeze",
     "description": "Created new account"
   },
   {
     "when": "1 hour ago",
     "who": "Lose White",
     "description": "Added fist chapter"
   },
   {
     "when": "2 hours ago",
     "who": "Jordan Whash",
     "description": "Created new account"
   }];


ReactDOM.render(React.createElement(App), document.body);
ReactDOM.render(<JSXApp title="Recent Changes" headings={headings} data={data} />, document.body);



console.log("...Ending the tutorial");
})()
