import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <section>
        <NavBar />
        <section className="flex flex-col items-center h-screen w-screen bg-slate-400 pt-16 px-2">
          <div className="w-full h-[300px] bg-red-400">
            <img src="" alt="" />
          </div>
          <h3>
            I`m Jarwend Morales.
            <br /> A front-end developer from Venezuela
          </h3>
        </section>

        <section></section>
        <section></section>
      </section>
    </>
  );
}

export default App;
