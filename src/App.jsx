
import "./App.css";
import ContactMe from "./components/ContactMe";
import Knowledge from "./components/Knowledge";
import MainInfo from "./components/MainInfo";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {

  return (
    <>
      <section className="bg-black text-white min-w-screen grid place-content-center">
        <NavBar />
        <MainInfo />
        <Projects />
        <Knowledge />
        <ContactMe />
      </section>
    </>
  );
}

export default App;
