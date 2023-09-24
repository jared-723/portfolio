export const Footer = () => {
  return (
    <footer className="flex flex-col items-center pb-4">
      <h3 className="font-bold">Social media</h3>
      <section className="flex gap-4 lg:flex-col">
        <div className="hover:text-blue-600">
          <a
            href="https://www.linkedin.com/in/jarwend-morales-478b41273"
            target="blank"
          >
            <i class="bx bxl-linkedin text-2xl"></i>
          </a>
        </div>
        <div className="hover:text-blue-600">
          <a href="https://github.com/jared-723" target="blank">
            <i class="bx bxl-github text-2xl"></i>
          </a>
        </div>
      </section>
    </footer>
  );
};
