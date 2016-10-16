#React Tutorial 


###Setup:
before using JSX, we're going to require some setup, and bundling of 
JS. There's a handy article [
here](https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack)

We will require:
   + webpack - takes a 'main' and bundles code in one bundle.js
   + babel - to translate the jsx files

note there are other bundlers out there, notable browserfiy and it might 
be worth checking out the [difference later](https://gist.github.com/substack/68f8d502be42d5cd4942)

also a reloader for the html might be [useful](http://gaearon.github.io/react-hot-loader/getstarted/) (recommended by top article)

the article also handily gives examples on splitting up projects into
different files, and working in development mode.

most importantly ` ./node_modules/.bin/webpack -d` and 
for continuous development `./node_modules/.bin/webpack -d --watch`

finally also it highlighted that react has been split into two modules:
    + react - the bare basics, real components
    + react-dom - handles the rendering. 
    + for more see SO post [here](http://stackoverflow.com/questions/34114350/react-vs-reactdom): long story need at top of files:
        
        import React from 'react';
        import ReactDOM from 'react-dom';

###React
- React.createClass(object);
    + takes an object and creates a class
    + class must implement render method
    + react itself will take care of calling method to generate HTML
    + note that the render method can return an arbitrarily deep tree, even if it is just returning a single child
    
- React.createElement(tag, attributes, text??)
    + singleton that can be used to create a ReactElement 
    + note this is the internal representatin of DOM  
    + note tag can also be a React.Class

- React.render(React.createElement(App), document.body)
    + note any DOM element can be passed instead of document.body
    + can pass an element like <App/> instead of create element as argument

###JSX
- can insert dynamic variables into jsx using {}, where it refers to an a javascript object with name nameA in {nameA}.
- leads us to simply define reuseable components an dpopulate with info. see commit [here](https://github.com/condnsdmatters/react-tutorial-playground/commit/785ca877d88055b628cc0ef1c61d2068df3bf4b5)
- jsx components start w Upper Case (`<App/>`) html starts lower case (`<h1>`). thats how internally distinguishes
- also: as jsx based on xml, can have self closing tags (see above). all tags must be closed.
- if you put components into another one they appear in this.props.children `<Custom1><CustomChild1/><CustomChild2></Custom1>` 
- You can name space components this way: Custom1.CustomChild1 = React.createClass, etc
- Can use ... operator to unpack objects as attributes in tags eg `var props = {a:1, b:2}` then `<Custom {...props}>`. These are called spread attributes and are ES6 standard
- 

##UP TO: 2.9 Styles in JSX [here](https://www.safaribooksonline.com/library/view/reactjs-by-example/9781785289644/ch01s05.htmlb)



