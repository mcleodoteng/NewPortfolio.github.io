import "./App.css";
import Contact from "./components/Contact";
import Page from "./components/Page";
import Projects from "./components/Projects";
import Sidenav from "./components/Sidenav";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Sidenav />
      <Page />
      <Work />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
