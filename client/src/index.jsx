import React from "react";
import ReactDOM from "react-dom";


const HelloWorldSimple = () => (<div>Hello, world! (func)</div>);

class HelloPure extends React.PureComponent {
  render() {
    return <div>
              Hello, World! (pure component)
          </div>;
  }
}

var HelloWorldElement =  React.createElement("div", null, "Hello, World! (element)");

class Hello extends React.Component {
    render() {
      return <div>
                <HelloPure /> 
                Hello, World! (component)
                <HelloWorldSimple /> 
                {HelloWorldElement}
             </div>;
    }
  }

ReactDOM.render(<Hello />, document.getElementById("root")); //, <Hello />, HelloWorldImage()