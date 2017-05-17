import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const User = ({ name }) =>
<div className="User">{ name }</div>;

const App = () =>
<div>
    <User name="Tim" />
</div>;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
