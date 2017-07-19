// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Including our ListContainer and Container components
import ListContainer from "./components/ListContainer";
import Container from "./components/Container";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
// Creating an App component which renders a ListContainer inside of a Container
const App = () => (
  <div>
    {/*<Container />*/}
    <About id='about'/>
    <Experience id='experience'/>
    <Skills id='skillset'/>
    <Projects id='projects'/>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
