// Walkthrough — featured video embed with arched mask.
function Walkthrough() {
  const ref = useInView();
  const vRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const toggle = () => {
    const v = vRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };
  return (
    <section className="section walk-section" id="walk" data-screen-label="04 Walkthrough">
      <div className="section-head reveal" ref={ref}>
        <h2>A <em>walk</em> through the rooms.</h2>
        <div className="meta">
          <span className="eyebrow">Film · 00:42</span>
          <span className="count">Tap to play</span>
        </div>
      </div>
      <div className="video-frame reveal" ref={useInView()} onClick={toggle}>
        <video
          ref={vRef}
          src="../../assets/walkthrough.mp4"
          muted
          playsInline
          loop
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <button className={'play-btn ' + (playing ? 'hidden' : '')} aria-label={playing ? 'Pause' : 'Play'}>
          <svg viewBox="0 0 24 24" width="22" height="22"><path d="M5 3.5v17l16-8.5L5 3.5z" fill="currentColor"/></svg>
          <span>{playing ? 'Pause' : 'Play'}</span>
        </button>
      </div>
    </section>
  );
}
window.Walkthrough = Walkthrough;
