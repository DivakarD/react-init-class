# react-init-class
A Simple npm module to create a react init class with a default constructor and render methods. 
It will create a class with the file name provided by <code> -f <className (or) fileName> </code> parameter and in the path provided by <code> -p </path/to/dir></code> parameter.


You can install the module by runnning:

<code>npm install react-init-class</code>

Usage:

You can use the module by running:
<code> react-init-class -f <fileName/className> -p </path/to/dir> </code>

Eg: <code> react-init-class -f SampleComponent -p '~/Desktop/Test' </code>

This will create a SampleComponent.js file in ~/Desktop/Test/SampleComponent.js.

<code>SampleComponent.js</code> file will be created as below:

    
    import React, { Component as ReactComponent } from 'react';
    
    class SampleComponent extends ReactComponent {
        constructor(props) {
            super(props);
            this.state = {};
        }

        render() {
            return (
                <div></div>
            );
        }
    }

    export default SampleComponent;
    
