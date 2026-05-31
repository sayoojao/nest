// DetailsPlan — facts list + stylised floor plan, on the marble background.
function DetailsPlan() {
  const ref = useInView();
  return (
    <section className="details-plan" id="plan" data-screen-label="05 Details + Plan">
      <div className="dp-inner reveal" ref={ref}>
        <div className="dp-left">
          <span className="eyebrow">The particulars</span>
          <h2>Built around <em>a stair court</em>.</h2>
          <p className="dp-lead">
            Two storeys. Four bedrooms. A sky-lit stair at the centre,
            so daylight reaches every room without travelling far.
          </p>

          <div className="stat-grid">
            <div className="stat">
              <span className="sv"><Counter to={2710} /></span>
              <span className="sl">ft² built</span>
            </div>
            <div className="stat">
              <span className="sv"><Counter to={2} /></span>
              <span className="sl">storeys</span>
            </div>
            <div className="stat">
              <span className="sv"><Counter to={4} /></span>
              <span className="sl">bedrooms</span>
            </div>
            <div className="stat">
              <span className="sv"><Counter to={200} /></span>
              <span className="sl">red dots</span>
            </div>
          </div>

          <div className="plan-list">
            <div className="plan-row"><span>Ground floor</span><span className="v">1,637 ft²</span></div>
            <div className="plan-row"><span>First floor</span><span className="v">1,073 ft²</span></div>
            <div className="plan-row"><span>Stair court</span><span className="v">88 ft² cutout</span></div>
            <div className="plan-row"><span>Stair</span><span className="v">Rise 16 · thread 30</span></div>
            <div className="plan-row"><span>Year</span><span className="v">2024</span></div>
            <div className="plan-row"><span>Architects</span><span className="v">VAS Associates</span></div>
            <div className="plan-row"><span>Place</span><span className="v">Olipram, Kerala</span></div>
          </div>
        </div>
        <div className="dp-right">
          <PlanDiagram />
        </div>
      </div>
    </section>
  );
}

// PlanDiagram — stylised SVG of the ground-floor plan, draws in on scroll.
function PlanDiagram() {
  const wrapRef = React.useRef(null);
  React.useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    // measure each .room rect's perimeter & set --len for the dash animation
    el.querySelectorAll('rect.room').forEach((rect) => {
      const w = parseFloat(rect.getAttribute('width'));
      const h = parseFloat(rect.getAttribute('height'));
      const len = 2 * (w + h);
      rect.style.setProperty('--len', len);
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add('draw');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="plan-card tilt" ref={wrapRef}>
      <svg viewBox="0 0 460 360" preserveAspectRatio="xMidYMid meet">
        <rect x="20" y="20" width="420" height="320" fill="none" stroke="#1F1A14" strokeWidth="2" />
        <rect x="20" y="20" width="420" height="44" fill="none" stroke="#94654a" strokeWidth="1" strokeDasharray="3 3" />
        <text x="230" y="48" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#946F47">VERANDAH · 180CM</text>

        <g fontFamily="Manrope, sans-serif" fontWeight="600" fontSize="9" letterSpacing="0.12em" fill="#1F1A14">
          <rect className="room" x="30" y="74" width="120" height="110" fill="none" stroke="#4F4639" strokeWidth="1.4" />
          <text x="90" y="125" textAnchor="middle">BED</text>
          <text x="90" y="140" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="400" fontSize="7" fill="#6C6356">390 × 360</text>

          <rect className="room" x="160" y="74" width="140" height="110" fill="none" stroke="#4F4639" strokeWidth="1.4" />
          <text x="230" y="120" textAnchor="middle">STAIR · COURT</text>
          <text x="230" y="134" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="400" fontSize="7" fill="#6C6356">410 × 460</text>
          <rect x="194" y="92" width="72" height="60" fill="#FAFAF7" stroke="#B6432A" strokeWidth="1.2" strokeDasharray="2 3" />
          <text x="230" y="126" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="600" fontSize="7" fill="#B6432A">COURT</text>

          <rect className="room" x="310" y="74" width="120" height="110" fill="none" stroke="#4F4639" strokeWidth="1.4" />
          <text x="370" y="125" textAnchor="middle">BED</text>
          <text x="370" y="140" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="400" fontSize="7" fill="#6C6356">390 × 360</text>

          <rect className="room" x="30" y="195" width="120" height="120" fill="none" stroke="#4F4639" strokeWidth="1.4" />
          <text x="90" y="250" textAnchor="middle">LIVING</text>
          <text x="90" y="264" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="400" fontSize="7" fill="#6C6356">390 × 360</text>

          <rect className="room" x="160" y="195" width="140" height="120" fill="none" stroke="#4F4639" strokeWidth="1.4" />
          <text x="230" y="250" textAnchor="middle">DINING</text>
          <text x="230" y="264" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="400" fontSize="7" fill="#6C6356">472 × 360</text>

          <rect className="room" x="310" y="195" width="120" height="120" fill="none" stroke="#4F4639" strokeWidth="1.4" />
          <text x="370" y="250" textAnchor="middle">KITCHEN</text>
          <text x="370" y="264" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontWeight="400" fontSize="7" fill="#6C6356">360 × 300</text>
        </g>

        <g transform="translate(425, 335)">
          <circle r="11" fill="none" stroke="#4F4639" />
          <path className="compass-arrow" d="M0,-8 L3.5,0 L0,8 L-3.5,0 Z" fill="#B6432A" />
          <text y="-14" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#4F4639">N</text>
        </g>

        <g transform="translate(30, 345)">
          <line x1="0" y1="0" x2="80" y2="0" stroke="#4F4639" strokeWidth="1.2" />
          <line x1="0" y1="-3" x2="0" y2="3" stroke="#4F4639" />
          <line x1="80" y1="-3" x2="80" y2="3" stroke="#4F4639" />
          <text x="40" y="-6" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#4F4639">3 m</text>
        </g>
      </svg>
      <div className="l">Ground floor · schematic (after VAS Associates)</div>
    </div>
  );
}
window.DetailsPlan = DetailsPlan;
