import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isShowMenu, setisShowMenu] = useState(false);

  const handleClickShowMenu = () => {
    setisShowMenu(!isShowMenu);
  };
  return (
    <>
      <section className="w-full h-[50px] fixed text-white bg-black">
        <nav className="w-full h-full bg-transparent p-4 flex justify-between items-center ">
          <h2 className="font-semibold text-lg">Jarwend A.</h2>
          <div className="md:hidden" onClick={handleClickShowMenu}>
            <i className="text-slate-300/80 bx bx-menu-alt-right"></i>
          </div>
          <div className="hidden pr-4 md:block">
            <ul className="flex gap-4">
              <Link to="/">Home</Link>
              <Link to="/experience">Projects</Link>
              <Link to="/contactme">Contact me</Link>
            </ul>
          </div>
        </nav>

        <div
          className={`absolute  w-full h-auto bg-black text-white grid place-items-center top-0 right-0 py-4 transition-transform ${
            isShowMenu
              ? "-translate-x-0"
              : "translate-x-[50rem] sm:translate-x-[80rem]"
          }`}
        >
          <p
            onClick={handleClickShowMenu}
            className="absolute top-2 right-2 sm:right-4"
          >
            X
          </p>
          <ul className={`grid gap-2`}>
            <Link to="/">Home</Link>
            <Link to="/experience">Projects</Link>
            <Link to="/contactme">Contact me</Link>
          </ul>
        </div>
      </section>
    </>
  );
};
export default NavBar;
