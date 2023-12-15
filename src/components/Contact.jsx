const Contact = () => {
  return (
    <div id="contact" className="max-w-[1048px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <form
        action="https://getform.io/f/2603df91-dff1-44d3-b0a6-3c553a41a66e"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="flex border-2 rounded-lg p-3 border-gray-300"
              type="text"
              placeholder="Enter Name"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Contact</label>
            <input
              className=" flex border-2 rounded-lg p-3 border-gray-300"
              type="text"
              placeholder="Enter Phone Number"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="flex border-2 rounded-lg p-3 border-gray-300"
            type="email"
            placeholder="example@gmail.com"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="flex border-2 rounded-lg p-3 border-gray-300"
            type="text"
            placeholder="Subject"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="flex border-2 rounded-lg p-3 border-gray-300"
            rows="10"
            placeholder="Message"
            name="message"
          />
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
