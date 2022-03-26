import "./App.css";
import AllDogs from "./Components/AllDogs/AllDogs";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <AllDogs />
      <div className="question">
        <div className="react-works">
          <h2>How React Works?</h2>
          <p className="lead">
            React, invented by Facebook, is the most popular library of
            JavaScript which is created to make browser DOM manipulation
            efficient and faster. <br />
            <br />
            React is used to make beautiful UIs for the client-side. In React,
            developers can create an independent 'React Component' for each part
            of the Application. Also, they can set components inside another
            component to produce a more complex React Application. Developer use
            code in JSX (JavaScript XML, which is almost the same as HTML) file
            format to write efficient code and better readability. Afterwards,
            React compiles the JSX file into JavaScript code using 'Babel'.
            Actually, React makes virtual DOM and then compares it with the
            Browser DOM. After that, it pushes the changes to the Browser DOM
            and it renders the changes only instead of rendering the whole DOM
            Manipulation. This is how React optimize the browser speed whenever
            the Browser renders any new DOM Manipulation.
          </p>
        </div>
        <div className="props-state">
          <h2>Props vs State - The Difference</h2>
          <p className="lead">
            Props and State are one of the most important concepts of React.
            There are many differences between these two major aspects in React
            even though many React Developer can't discriminate the
            dissimilarities. <br/> <br/>
            Props is used to pass data from one Functional
            Component to another Component but State is used to Store and Pass
            data in the local Component. Secondly, The data of the props can be
            changed but the State's data cannot be changed. Thirdly, Props is
            immutable and read-only whereas State isn't mutable and both can be
            read as well as written. Fourthly, in Props, data can be passed from
            the parent Component and in State, data is defined in the Component
            itself. The data of Props is controlled externally( pass data from
            outside of the component). However, the data of the state is
            accessed internally(update or pass from inside of the local
            Component itself).
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
