const MainInfo = () => {
  return (
    <section className="flex flex-col items-center h-auto w-full bg-[#181823] pt-12 pb-6 gap-4 text-white">
      <div className="w-full h-[300px] bg-red-400">
        <img src="" alt="" />
      </div>
      <section className="grid gap-4 px-4">
        <h3 className="font-bold text-2xl">
          I`m Jarwend Morales.
          <br /> A front-end developer{" "}
          <span className="text-slate-300/90">from Venezuela</span>
        </h3>
        <p className="font-medium">
          I’m probably the most passionate designer you will ever get to work
          with. If you have a great project that needs some amazing skills, I’m
          your guy.
        </p>
      </section>
      <div className="hidden"></div>
    </section>
  );
};
export default MainInfo;
