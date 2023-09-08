const MainInfo = () => {
  return (
    <section className="flex flex-col items-center h-auto w-full bg-[#181823] pt-12 pb-6 gap-4 text-white">
      {/* img for presentations, later */}
      {/* <div className="w-full h-[300px] bg-red-400">
        <img src="" alt="" />
      </div> */}
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
