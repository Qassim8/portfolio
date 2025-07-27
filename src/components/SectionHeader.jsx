
function SectionHeader({title, desc}) {
  return (
    <header
      className="pb-24 w-full md:w-[500px] relative 
        before:absolute before:-top-1 before:start-0 before:h-1 before:w-[100px] before:bg-amber-400
        after:absolute after:bottom-20 after:end-0 after:h-1 after:w-[100px] after:bg-amber-400"
    >
      <h2 className="text-[25px] md:text-[55px] text-white">
        {`<${title} />`}
      </h2>
      <p className="text-slate-300">
        {desc}
          </p>
    </header>
  );
}

export default SectionHeader