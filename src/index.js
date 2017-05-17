import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const hoc = (BaseComponent) => (props) =>
    <BaseComponent {...props}/>;

const User = ({ name }) =>
    <div className="User">{ name }</div>;

const User2 = hoc(User);

const App = () =>
    <div>
        <User name="Tim" />
        <User2 name="Joe" />
    </div>;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
