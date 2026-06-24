function SectionHeader({ title, desc }) {
  return (
    <header
      data-aos="fade-down"
      className="mb-16 text-center md:text-left max-w-2xl"
    >
      {/* Small label */}

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-main text-sm font-medium mb-4">
        <span className="w-2 h-2 rounded-full bg-main animate-pulse"></span>
        Section
      </div>

      {/* Main title */}

      <h2 className="text-4xl md:text-6xl font-bold leading-tight text-body">
        <span className="text-main">{`<`}</span>

        {title}

        <span className="text-main">{` />`}</span>
      </h2>

      {/* Decorative line */}

      <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-main to-cyan-400"></div>

      {/* Description */}

      <p className="text-slate-500 text-base md:text-lg leading-8 max-w-xl">
        {desc}
      </p>
    </header>
  );
}

export default SectionHeader;
