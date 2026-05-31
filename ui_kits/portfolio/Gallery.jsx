// Gallery — a curated set of views of the home with elegant captions.
// Mix of layouts: diptych, arched full, side-by-side day/dusk.

function Gallery() {
  const head = useInView();
  const r1 = useInView();
  const r2 = useInView();
  const r3 = useInView();
  return (
    <section className="section gallery-section" id="gallery" data-screen-label="03 Gallery">
      <div className="section-head reveal" ref={head}>
        <h2>Four views, <em>across a day</em>.</h2>
        <div className="meta">
          <span className="eyebrow">The home, in light</span>
          <span className="count">Renders · day &amp; dusk</span>
        </div>
      </div>

      {/* Block 1 — large arched front, small detail beside */}
      <div className="g-block-1 reveal" ref={r1}>
        <div className="g-arched tilt">
          <img src="../../assets/villa-day-front.jpeg" alt="Front 3/4, morning" />
          <div className="g-caption"><span>01</span><span>Front · morning</span></div>
        </div>
        <div className="g-side">
          <div className="g-side-img tilt">
            <img src="../../assets/villa-detail-dots.jpeg" alt="Red-dot wall, detail" />
          </div>
          <div className="g-side-text">
            <h4>Two hundred small red dots</h4>
            <p>
              A pattern that scatters from the parapet down to the porch.
              From far away it reads as texture; up close, as a count.
            </p>
          </div>
        </div>
      </div>

      {/* Block 2 — full-bleed side elevation */}
      <div className="g-fullbleed reveal" ref={r2}>
        <img src="../../assets/villa-day-side.jpeg" alt="Side elevation under the trees" />
        <div className="g-caption-fb"><span>02</span><span>Side · under the trees</span></div>
      </div>

      {/* Block 3 — day/dusk diptych */}
      <div className="g-diptych reveal" ref={r3}>
        <figure className="tilt">
          <img src="../../assets/villa-day-front.jpeg" alt="Day" />
          <figcaption><span>03</span><span>Day</span></figcaption>
        </figure>
        <figure className="tilt">
          <img src="../../assets/villa-dusk.jpeg" alt="Dusk" />
          <figcaption><span>04</span><span>Dusk · lights on</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
window.Gallery = Gallery;
