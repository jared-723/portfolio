import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactMe from "./pages/ContactMe";
import MainInfo from "./pages/MainInfo";
import NavBar from "./components/NavBar";
import Projects from "./pages/Projects";
import Page404 from "./pages/Page404";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
        <section className="bg-black text-white max-w-screen grid place-content-center  gap-4 font-main">
          <NavBar />
          <Routes>
            <Route path="/" element={<MainInfo />} />
            <Route path="/experience" element={<Projects />} />
            <Route path="/contactme" element={<ContactMe />} />

            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer/>
        </section>

    </>
  );
}

export default App;
