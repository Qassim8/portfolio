function SectionHeader({ title, desc }) {
  return (
    <header
      data-aos="fade-down"
      className="mb-20 w-full md:w-[480px] p-3 relative border-l-4 border-l-[#4aacf2]
        before:absolute before:-top-0 before:start-0 before:h-1 before:w-[180px] before:bg-[#4aacf2] duration-300 before:duration-500 hover:before:w-full"
    >
      <h2 className="text-[25px] md:text-[50px] text-body">{`<${title} />`}</h2>
      <p className="text-slate-500">{desc}</p>
    </header>
  );
}

export default SectionHeader;
