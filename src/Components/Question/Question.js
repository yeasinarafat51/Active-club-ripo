import React from 'react';

const Question = () => {
    return (
        <div>
            <h1>how does react work?</h1>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
            <h1>props and state differance</h1>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            <h1>useEffect dataload any other work</h1>
            <p>The useEffect Hook Usages. The callback function we pass a to the useEffect hook runs the side effects. React runs it on every render of a component by default.</p>
        </div>
    );
};

export default Question;