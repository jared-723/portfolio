import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = "service_88a1zvq";
    const templateId = "template_p7g9aer";
    const apiKey = "yOD6reuoL9ZysEt3H";

    emailjs.sendForm(serviceId, templateId, e.target, apiKey).then(
      (result) => {
        console.log(result.text);
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center px-4 text-center pb-4 gap-4 ">
      <div>
        <h3 className="font-bold">Contact me</h3>
        <p>
          You can send me a message throught email and i´ll answer you as soon
          as possible
        </p>
      </div>
      <section className="w-full flex flex-col items-center gap-4 lg:flex-row lg:justify-center lg:gap-8">
      <form
        onSubmit={sendEmail}
        className="grid gap-2 px-4 bg-slate-700 rounded-lg py-4 w-[min(300px,_400px)]"
      >
        <div className="grid gap-2">
          <label htmlFor="userName" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="userName"
            className="text-black outline-none rounded-md"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="userEmail" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="userEmail"
            className="text-black outline-none rounded-md"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="userMessage" className="font-semibold">
            Message
          </label>
          <textarea
            name="message"
            id="userMessage"
            className="text-black outline-none rounded-md"
          />
        </div>
        <input
          type="submit"
          value="Send"
          className="p-2 bg-blue-950 rounded-full hover:bg-blue-900 hover:font-semibold"
        />
      </form>
      </section>
    </section>
  );
};
export default ContactMe;
