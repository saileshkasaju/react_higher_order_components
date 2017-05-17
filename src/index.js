import React from 'react';
import ReactDOM from 'react-dom';
import { compose, setDisplayName, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';
import "./index.css";

const { connect } = Redux();

const enhance = compose(
    setDisplayName('User'),
    setPropTypes({
        name: PropTypes.string.isRequired,
        status: PropTypes.string
    }),
    connect()
);


const User = enhance(({ name, status, dispatch }) =>
    <div className="User" onClick={
        () => dispatch({ type: "USER_SELECTED" })
    }>
        { name }: { status }
    </div>
);

console.log(User.displayName);
/*

const hoc = (BaseComponent) => (props) =>
    <BaseComponent {...props} />;

const overrideProps = (overrideProps) => (BaseComponent) => (props) =>
    <BaseComponent {...props} {...overrideProps} />;
const neverRender = (overrideProps) => (BaseComponent) =>
    class extends React.Component {
        shouldComponentUpdate() {
        return false;
    }
    render() {
        return <BaseComponent {...this.props}/>
    }
};

const User = ({ name }) =>
    <div className="User">{ name }</div>;

const User1 = hoc(User);
const alwaysBob = overrideProps({ name: 'Bob' });
const User2 = alwaysBob(User);
const User3 = neverRender(User);
const App = () =>
    <div>
        <User name="Tim" />
        <User1 name="Joe" />
        <User2 name="Joe" />
        <User3 name="Steve" />
    </div>;



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/
ReactDOM.render(
    <User name="Tim" status="active" />,
    document.getElementById('root')
);

// fake implementation of redux

function Redux() {
    return {
        connect: () => (BaseComponent) => (props) =>
            <BaseComponent
                {...props}
                dispatch={ ({ type }) => console.log(type + ' dispatched') }
            />
    }
}