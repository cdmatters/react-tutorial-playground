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

var RecentChangesTable = React.createClass(
  {
    render: function()
    {
       return(<table  className='table'>{this.props.children}</table>);
    }
  });

RecentChangesTable.Heading = React.createClass(
  {
    render: function()
    { 
       var headingStyle = {
         backgroundColor: 'FloralWhite',
         fontsize: '19px'
       };
       return(<th style={headingStyle}>{this.props.heading}</th>);
    }
  });

RecentChangesTable.Headings = React.createClass(
  {
    render: function() 
    {
      var headings = this.props.headings.map(function(heading, index)
        {
          return <RecentChangesTable.Heading key={index} heading={heading}/>
        });
      
      return(<thead><tr>{headings}</tr></thead>);
    }
  });

RecentChangesTable.Row = React.createClass(
  {
    render: function()
    {
      var trStyle = {backgroundColor:'aliceBlue'};
      return(<tr style={trStyle}>
              <td>{this.props.changeSet.when}</td>
              <td>{this.props.changeSet.who}</td>
              <td>{this.props.changeSet.description}</td>
            </tr>);
    } 
  });

RecentChangesTable.Rows = React.createClass(
  {
    render: function()
    {
      var rows = this.props.changeSets.map(function(changeSet, index)
        {
          return (<RecentChangesTable.Row  key={index} changeSet={changeSet}/>);
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

var StateExampleApp = React.createClass(
  {
    componentWillMount: function()
    {
      // triggered when the component is first loaded into DOM
      // CAN call set state, but will not trigger a rerender
      console.log("componentWillMount");
    },

    componentDidMount: function()
    {
      // triggered after first time component loaded (and rendered) into DOM
      console.log("componentDidMount");
    },

    componentWillReceiveProps: function(nextProps)
    //UP TO HERE "We are only left with componentWillReceiveProps."
    {
      console.log('componentWillReceiveProps');
    },

    shouldComponentUpdate: function(nextProps, nextState)
    {
      // called when state changes
      // can also compare nextProps and nextState to existing values and decide
      // returning true here triggers a render. default is true
      // you cant setState here 
      console.log('shouldComponentUpdate');
      return true;
    },

    componentWillUpdate: function()
    { 
      console.log('componentWillUpdate');
    },

    getInitialState: function()
    {
      console.log('getInitialState');
      return { status: true};
    },

    getDefaultProps: function()
    {
      console.log('getDefaultProps')
      return {name:'John'};
    },

    render: function()
    {
      console.log('render');
      return(   <h1 onClick={this.toggleState}>
                  {this.state.status.toString()}
                </h1>);
    },

    componentWillUnmount: function()
    {
      console.log('componentWillUnmount');
    },

    toggleState: function()
    {
      // as this function affects this.state, normally triggers a rerender
      // however specifically it calls shouldComponentUpdate, and by default returns true
      console.log('toggleState');
      this.setState({status: !this.state.status});
    }

  });

var ComponentApp = React.createClass(
  {
    getInitialState: function()
    {
      return {
        changeSets: [],
        headings: ['Updated At', 'Author', 'Change']
      };
    },
    
    handleEvent: function(data)
    {
      this.setState({changeSets: data.changeSets});
    },

    getDefaultProps: function()
    {
      return {
        headings: ['When it happened', 'Who did it', 'What changed']
      };
    },

    propTypes: {
      changeSets: React.PropTypes.array,
      author: React.PropTypes.string.isRequired,
      headings: function(props, propName, componentName)
      { 
        if (propName !== 'headings')
        {
          return Error('Failed Validation');
        }
      }
    },

    render: function()
    {
      console.log(this.props);
      return( <div>
                {/* a comment goes here */}
                <Title title={this.props.title} />
                <RecentChangesTable>
                  <RecentChangesTable.Headings headings = {this.props.headings}/>
                  <RecentChangesTable.Rows changeSets = {this.props.changeSets}/>
                </RecentChangesTable>
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

var props = {title: title, headings:headings, changeSets:data}
// ReactDOM.render(<ComponentApp {...props}/>, document.getElementById('container'));
ReactDOM.render(<StateExampleApp name='Jane'/>, document.body)

console.log("...Ending the tutorial");
})()
