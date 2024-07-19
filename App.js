import React from "react";
import ReactDOM from "react-dom/client";

//React.createelement => Object => HTNLElement(render)

//const heading = React.createElement("h1",{id:"heading"},"Namaste React");


//JSX  - is not HTML in JS. It is HTML-like or XML- like syntax. transpiled before it reaches the JS- parcel-Babel
//JSX=> Babel transpiles it to React.createElement=> ReactElement.JS Object=> HTMLElement(render)

//React Element
const heading = (
<h1 className="head" tabIndex={5}>
    Namaste React using JSX 
    </h1>
);

const elem = <span>React element</span>

const title=  (
    <h1 className="head" tabIndex={5}>
        {elem}
        Namaste React using JSX
    </h1>
);

// const fn =() => true;

// const fn2 = ()=> {
//     return true;
//};
//above two function do the same thing

//React component
//Class based components-OLD
//Functional components-NEW

//React Functional component

//component composition

const Title= () => (
    <h1 className="head" tabIndex={5}>
        Namaste React using JSX
    </h1>
);

const number = 10000;

const HeadingComponent = () => (
    <div id="container">
        <Title />
        {number}
        {title}
    <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

// const HeadingComponent2 = () => (
// <h1>Namaste React Functional Component</h1> 
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);


