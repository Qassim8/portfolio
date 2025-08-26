import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <section className="py-20 container mx-auto">
      <SectionHeader
        title="ContactMe"
        desc="if you want my services just contact me in what you want"
      />
      <div className="container flex flex-col md:flex-row justify-between gap-20">
        <form data-aos="fade-right" className="w-full md:w-1/2">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
            <input
              type="text"
              className="text-body bg-blue-100/10 w-full border border-blue-300 p-2 rounded-md outline-none"
              placeholder="Your Name"
            />
            <input
              type="number"
              className="text-body bg-blue-100/10 w-full border border-blue-300 p-2 rounded-md outline-none"
              placeholder="Your Number "
            />
          </div>
          <textarea
            name="message"
            id="mesaage"
            className="w-full h-[250px] md:h-[350px] text-body bg-blue-100/10 mt-7 p-2 resize-none border border-blue-300 outline-none rounded-md"
            placeholder="Send message..."
          ></textarea>
          <button
            type="submit"
            className="text-main bg-transparent mt-5 py-2 px-6 border border-blue-400 rounded-md duration-500 hover:bg-blue-700/10 "
          >
            Send
          </button>
        </form>
        <div data-aos="fade-left" className="w-full md:w-1/2 order-first md:order-last">
          <div className="flex flex-col gap-5">
            <div className="text-center p-3 text-lg text-body rounded-md bg-blue-200/20">
              <div className="relative left-1/2 -translate-x-1/2 flex justify-center items-center h-[70px] w-[70px] bg-white rounded-full">
                <i className="bi bi-phone text-body"></i>
              </div>
              <a
                target="_blank"
                href="https://wa.me/201501248489"
                rel="noopener noreferrer"
                className="block my-5 text-main"
              >
                Telephone: +20-150-12484-89
              </a>
            </div>
            <div className="text-center p-3 text-lg text-body rounded-md bg-blue-200/20">
              <div className="relative left-1/2 -translate-x-1/2 flex justify-center items-center h-[70px] w-[70px] bg-white rounded-full">
                <i className="bi bi-geo-alt text-body"></i>
              </div>
              <p className="my-5 text-main">Location: Badr-City, Cairo, Egypt</p>
            </div>
            <d className="text-center p-3 text-lg text-body rounded-md bg-blue-200/20">
              <div className="relative left-1/2 -translate-x-1/2 flex justify-center items-center h-[70px] w-[70px] bg-white rounded-full">
                <i className="bi bi-envelope text-body"></i>
              </div>
              <a
                target="_blank"
                href="mailto:mohammed___dev@hotmail.com"
                rel="noopener noreferrer"
                className="block my-5 text-main"
              >
                Email: mohammed___dev@hotmail.com
              </a>
            </d>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
