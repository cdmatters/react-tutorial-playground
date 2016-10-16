import React from 'react';
import ReactDOM from 'react-dom';

(function (){

console.log("Starting the tutorial...");


// var App = React.createClass(
//   { 
//     render: function()
//       {
//         return (React.createElement("div", null, "Hello React World!"));
//       }
//   });

// var JSXApp = React.createClass(
//   { 
//     render: function()
//       {
//         console.log(this.props.title);
//         console.log(this.props); //properties passed in as attributes, below

//         var headings = this.props.headings.map(
//           function(heading){return(<th>{heading}</th>);}
//         );

//         var rows = this.props.data.map(
//           function(row)
//           {
//             return(<tr>
//               <td>{row.when}</td>
//               <td>{row.who}</td>
//               <td>{row.description}</td>
//             </tr>);
//           }
//         );

//         return(<div>
//           <h1> {this.props.title} </h1>
//           <table>
//             <thead>
//               {headings}
//             </thead>
//             {rows}
//           </table>
//         </div>);
//       }
//   });

var Heading = React.createClass(
  {
    render: function()
    {
      return(<th>{this.props.heading}</th>);
    }
  });

var Headings = React.createClass(
  {
    render: function() 
    {
      var headings = this.props.headings.map(function(heading)
        {
          return <Heading heading={heading}/>
        });
      
      return(<thead><tr>{headings}</tr></thead>);
    }
  });

var Row = React.createClass(
  {
    render: function()
    {
      return(<tr>
              <td>{this.props.changeSet.when}</td>
              <td>{this.props.changeSet.who}</td>
              <td>{this.props.changeSet.description}</td>
            </tr>);
    } 
  });

var Rows = React.createClass(
  {
    render: function()
    {
      var rows = this.props.changeSets.map(function(changeSet)
        {
          return (<Row changeSet={changeSet}/>);
        });

      return(<tbody>{rows}</tbody>);
    }
  });

var Title = React.createClass(
  {
    render: function()
    {
      return(<h1>{this.props.title}</h1>);
    }
  });

var ComponentApp = React.createClass(
  {
    render: function()
    {
      console.log(this.props);
      return( <div>
                {/* a comment goes here */}
                <Title title={this.props.title} />
                <table className='table'>
                  <Headings headings = {this.props.headings}/>
                  <Rows changeSets = {this.props.changeSets}/>
                </table>
              </div>);
    }
  });

var headings = ['When', 'Who', 'Description'];
var data = [
  { 
    "when": "2 minutes ago",
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
var title = "Recent Changes";


// ReactDOM.render(React.createElement(App), document.body);
// ReactDOM.render(<JSXApp title={title} headings={headings} data={data} />, document.body);
ReactDOM.render(<ComponentApp title={title} headings={headings} changeSets={data}/>, document.getElementById('container'));


console.log("...Ending the tutorial");
})()
