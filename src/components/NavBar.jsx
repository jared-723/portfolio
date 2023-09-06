import { useState } from "react";

const NavBar = () => {
  const [isShowMenu, setisShowMenu] = useState(false);

  const handleClickShowMenu = () => {
    setisShowMenu(!isShowMenu);
  };
  return (
    <>
      <section className="w-screen h-[50px] fixed">
        <nav className="w-full h-full bg-transparent p-4 flex justify-between items-center ">
          <h2 className="font-semibold text-lg">Jarwend A.</h2>
          <div onClick={handleClickShowMenu} className="bg-green-500">
            <i className="bx bx-menu-alt-right"></i>
          </div>
        </nav>
        <div
          className={`absolute  w-full h-auto bg-black text-white grid place-items-center top-0 right-0 py-4 transition-transform ${
            isShowMenu ? "-translate-x-0" : "translate-x-[20rem]"
          }`}
        >
          <p onClick={handleClickShowMenu}className="absolute top-2 right-2">X</p>
          <ul className={`grid gap-2`}>
            <li>Experience</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default NavBar;