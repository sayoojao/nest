// Montage — full-bleed closing video.
function Montage() {
  const sectionRef = React.useRef(null);
  const vRef = React.useRef(null);
  React.useEffect(() => {
    const v = vRef.current; const s = sectionRef.current;
    if (!v || !s) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { v.play().catch(() => {}); }
        else { v.pause(); }
      });
    }, { threshold: 0.4 });
    io.observe(s);
    return () => io.disconnect();
  }, []);
  return (
    <section className="montage" id="montage" ref={sectionRef} data-screen-label="07 Montage">
      <video
        ref={vRef}
        src="../../assets/montage.mp4"
        muted
        playsInline
        loop
        preload="metadata"
      />
      <div className="montage-veil" />
      <div className="montage-text">
        <span className="eyebrow">Closing</span>
        <h2><em>The happy place</em>, all of it together.</h2>
      </div>
    </section>
  );
}
window.Montage = Montage;
