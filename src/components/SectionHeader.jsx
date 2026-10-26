function SectionHeader({ label, title, desc }) {
  return (
    <header data-aos="fade-up" className="mb-16 max-w-2xl">
      {/* Small label */}

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-main/10 text-main text-sm font-medium">
        <span className="w-2 h-2 rounded-full bg-main animate-pulse"></span>
        {label}
      </div>

      {/* Main title – kept as a left-to-right "code tag" in both languages */}

      <h2 className="text-4xl md:text-6xl font-bold text-ink py-3">
        <span dir="ltr" className="inline-block">
          <span className="text-main">{`<`}</span>
          {title}
          <span className="text-main">{` />`}</span>
        </span>
      </h2>

      {/* Description */}

      <p className="text-muted text-base md:text-lg leading-7 max-w-xl">
        {desc}
      </p>
    </header>
  );
}

export default SectionHeader;
