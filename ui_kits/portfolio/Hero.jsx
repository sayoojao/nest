// Hero — full-bleed villa render with arched mask, dot scatter motif, parallax.

function Hero() {
  const bgRef = React.useRef(null);

  React.useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!bgRef.current) return;
        const y = window.scrollY;
        // Subtle parallax — image drifts up at 0.12x scroll rate
        bgRef.current.style.transform = `scale(1.05) translateY(${-y * 0.12}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const Word = ({ children }) => (
    <span className="word-rev"><span>{children}&nbsp;</span></span>
  );

  return (
    <section className="hero" data-screen-label="01 Home Hero">
      <div className="hero-bg" ref={bgRef} style={{ backgroundImage: 'url(../../assets/villa-day-front.jpeg)' }} />
      <div className="hero-veil" />

      <div className="hero-dots">
        <DotScatter width={200} height={380} count={70} seed={13} color="#C96B4C" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <Word>Nest</Word>
          <Word>—</Word>
          <Word>the</Word>
          <Word><em>happy</em></Word>
          <Word>place.</Word>
        </h1>
        <div className="hero-meta">
          <span className="hero-eyebrow">A home in Olipram · for the Sayooj family</span>
          <p className="hero-blurb">
            Two storeys of stucco and terracotta, an arched verandah,
            and a wall of small red dots — because the house felt like
            it wanted them.
          </p>
        </div>
      </div>

      <div className="hero-scroll">
        <span>scroll</span>
        <div className="line" />
      </div>
    </section>
  );
}

window.Hero = Hero;
