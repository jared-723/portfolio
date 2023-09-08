
import "./App.css";
import ContactMe from "./components/ContactMe";
import Knowledge from "./components/Knowledge";
import MainInfo from "./components/MainInfo";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {

  return (
    <>
      <section className="bg-black text-white max-w-screen grid place-content-center gap-4 font-main">
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
