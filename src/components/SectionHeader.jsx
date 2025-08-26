
function SectionHeader({title, desc}) {
  return (
    <header
      data-aos="fade-down"
      className="pb-24 w-full md:w-[500px] relative 
        before:absolute before:-top-1 before:start-0 before:h-1 before:w-[100px] before:bg-[#4aacf2]
        after:absolute after:bottom-20 after:end-0 after:h-1 after:w-[100px] after:bg-[#4aacf2]"
    >
      <h2 className="text-[25px] md:text-[55px] text-body">{`<${title} />`}</h2>
      <p className="text-slate-500">{desc}</p>
    </header>
  );
}

export default SectionHeader