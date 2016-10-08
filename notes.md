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
    + 

##UP TO: 1.3 BACK TO WORK [here](https://www.safaribooksonline.com/library/view/reactjs-by-example/9781785289644/ch01s05.html)



