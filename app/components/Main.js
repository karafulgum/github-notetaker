var React = require('react');
  var ReactDOM = require('react-dom');

  var Main = React.createClass({
    render: function(){
      return(
        <div>
          <p>Hello World</p>
        </div>
      )
    }
  });

 ReactDOM.render(<Main />, document.getElementById('app'))
