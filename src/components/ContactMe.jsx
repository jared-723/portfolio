
import emailjs from "@emailjs/browser";

const ContactMe = () => {


  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = "service_88a1zvq";
    const templateId = "template_p7g9aer";
    const apiKey = "yOD6reuoL9ZysEt3H";

    emailjs.sendForm(serviceId, templateId, e.target, apiKey).then(
      (result) => {
        console.log(result.text)
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className="w-full grid px-4 text-center pb-4">
      <h3>Contact me</h3>
      <form onSubmit={sendEmail} className="grid gap-2 px-4 bg-red-300 rounded-lg py-4">
        <div className="grid">
          <label htmlFor="userName">Name</label>
          <input type="text" name="user_name" id="userName" className="text-black"/>
        </div>
        <div className="grid">
          <label htmlFor="userEmail">Email</label>
          <input type="email" name="user_email" id="userEmail" className="text-black"/>
        </div>
        <div className="grid">
          <label htmlFor="userMessage">Message</label>
          <textarea name="message" id="userMessage" className="text-black"/>
        </div>
        <input type="submit" value="Send" />
      </form>
    </section>
  );
};
export default ContactMe;
