import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const hoc = (BaseComponent) => (props) =>
    <BaseComponent {...props} />;

const overrideProps = (overrideProps) => (BaseComponent) => (props) =>
    <BaseComponent {...props} {...overrideProps} />;

const User = ({ name }) =>
    <div className="User">{ name }</div>;
const User1 = hoc(User);
const alwaysBob = overrideProps({ name: 'Bob' });
const User2 = alwaysBob(User);

const App = () =>
    <div>
        <User name="Tim" />
        <User1 name="Joe" />
        <User2 name="Joe" />
    </div>;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
