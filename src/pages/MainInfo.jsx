const MainInfo = () => {
  return (
    <section className="flex flex-col items-center h-screen w-full bg-[#181823] pt-16 pb-6 gap-4 px-4 text-white md:flex-row md:pl-6">

      <div className="w-[300px] h-[220px] overflow-hidden md:w-[700px]">
        <img className="w-full object-contain" src="/img/programmerExample.jpg" alt="" />
      </div>
      <section className="grid gap-4 px-4 pt-4">
        <h3 className="font-bold text-2xl">
          I`m Jarwend Morales.
          <br /> A front-end developer{" "}
          <span className="text-slate-300/90">from Venezuela</span>
        </h3>
        <p className="font-medium">
          I am a junior programmer in a constant learning process, willing to
          explore and innovate in different areas. Also, I have the initiative
          to be self-taught and the knowledge in the English language to read
          the available documentation
        </p>
      </section>
      <div className="hidden"></div>
    </section>
  );
};
export default MainInfo;
