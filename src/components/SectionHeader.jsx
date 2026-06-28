function SectionHeader({ title, desc }) {
  return (
    <header data-aos="fade-down" className="mb-16 max-w-2xl">
      {/* Small label */}

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-main text-sm font-medium">
        <span className="w-2 h-2 rounded-full bg-main animate-pulse"></span>
        Section
      </div>

      {/* Main title */}

      <h2 className="text-4xl md:text-6xl font-bold text-body py-3">
        <span className="text-main">{`<`}</span>

        {title}

        <span className="text-main">{` />`}</span>
      </h2>

      {/* Description */}

      <p className="text-slate-500 text-base md:text-lg leading-6 max-w-xl">
        {desc}
      </p>
    </header>
  );
}

export default SectionHeader;
