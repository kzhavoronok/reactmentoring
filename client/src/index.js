import React from "react";
import ReactDOM from "react-dom";


const HelloWorldSimple = () => (<div>Hello, world! (pure)</div>);

function HelloWorldFunc() {
    // Import result is the URL of your image
    return <div>Hello, world! (functional component)</div>;
  }

var HelloWorldElement =  React.createElement("div", null, "Hello, World! (element)");

class Hello extends React.Component {
    render() {
      return <div>
                Hello, World! (component)
                <HelloWorldSimple /> 
                {HelloWorldElement}
                {HelloWorldFunc()} 
            </div>;
    }
  }

ReactDOM.render(<Hello />, document.getElementById("root")); //, <Hello />, HelloWorldImage()