var React = require("react");
var ReactDOM = require("react-dom");
class Main extends React.Component{
  render() {
    return React.createElement("h3", null, "Main webpack")
  }
};

ReactDOM.render(React.createElement(Main), document.getElementById('react'));
