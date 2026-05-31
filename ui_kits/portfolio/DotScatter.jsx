// DotScatter — the signature red-dot motif from the villa wall.
// Top-dense, bottom-sparse. Each dot fades in sequence on mount.

function DotScatter({ width = 200, height = 380, count = 70, seed = 7, color = '#B6432A', autoStart = true }) {
  const dots = React.useMemo(() => {
    let s = seed;
    const r = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    const out = [];
    const cols = 6, rows = 16;
    for (let row = 0; row < rows && out.length < count; row++) {
      for (let col = 0; col < cols && out.length < count; col++) {
        const density = 1 - (row / rows) * 0.88;
        if (r() > density) continue;
        const bx = (col + 0.5) * (width / cols);
        const by = (row + 0.5) * (height / rows);
        const jx = (r() - 0.5) * (width / cols) * 0.7;
        const jy = (r() - 0.5) * (height / rows) * 0.7;
        out.push({
          cx: bx + jx,
          cy: by + jy,
          rad: 3 + r() * 5,
          op: 0.55 + r() * 0.45,
          driftDur: 6 + r() * 4,
          driftDelay: r() * 4,
        });
      }
    }
    return out;
  }, [width, height, count, seed]);

  const [visible, setVisible] = React.useState(0);
  React.useEffect(() => {
    if (!autoStart) return;
    let id;
    let i = 0;
    const tick = () => {
      i += 1;
      setVisible(i);
      if (i < dots.length) id = setTimeout(tick, 28);
    };
    id = setTimeout(tick, 200);
    return () => clearTimeout(id);
  }, [dots.length, autoStart]);

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: 'visible' }}>
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.rad}
          fill={color}
          fillOpacity={i < visible ? d.op : 0}
          style={{
            transformOrigin: `${d.cx}px ${d.cy}px`,
            transform: i < visible ? 'scale(1)' : 'scale(0)',
            transition: 'fill-opacity 480ms cubic-bezier(0.22,1,0.36,1), transform 480ms cubic-bezier(0.22,1,0.36,1)',
            animation: i < visible ? `dotBob${i % 3} ${d.driftDur}s ease-in-out ${d.driftDelay}s infinite alternate` : 'none',
          }}
        />
      ))}
      <style>{`
        @keyframes dotBob0 { from { translate: 0 0; } to { translate: 0 -2px; } }
        @keyframes dotBob1 { from { translate: 0 0; } to { translate: 1px 1px; } }
        @keyframes dotBob2 { from { translate: 0 0; } to { translate: -1px 1px; } }
      `}</style>
    </svg>
  );
}

window.DotScatter = DotScatter;

// ---------- Shared utility: useInView ----------
// Sets `.in` on the returned ref's element once it enters the viewport.
function useInView(options = {}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.15, ...options });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
window.useInView = useInView;

// ---------- Word-stagger reveal helper ----------
// Splits text into words wrapped in span — animates with .word-stagger / .in
function StaggerText({ children, delayBase = 0, perWordDelay = 60, as = 'span' }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const spans = el.querySelectorAll('.word-stagger');
          spans.forEach((s, i) => {
            setTimeout(() => s.classList.add('in'), delayBase + i * perWordDelay);
          });
          io.unobserve(el);
        }
      });
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, [delayBase, perWordDelay]);

  const text = typeof children === 'string' ? children : '';
  const Tag = as;
  return (
    <Tag ref={ref}>
      {text.split(' ').map((w, i) => (
        <React.Fragment key={i}>
          <span className="word-stagger"><span>{w}</span></span>
          {i < text.split(' ').length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </Tag>
  );
}
window.StaggerText = StaggerText;

// ---------- Animated counter ----------
function Counter({ to, suffix = '', duration = 1600, decimals = 0 }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(to * eased);
            if (t < 1) requestAnimationFrame(tick);
            else setVal(to);
          };
          requestAnimationFrame(tick);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  const formatted = decimals > 0
    ? val.toFixed(decimals)
    : Math.round(val).toLocaleString();
  return <span className="counter" ref={ref}>{formatted}{suffix}</span>;
}
window.Counter = Counter;

// ---------- Scroll progress bar ----------
function ScrollProgress() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? (window.scrollY / h) * 100 : 0;
      if (ref.current) ref.current.style.width = p + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="scroll-progress" aria-hidden="true">
      <i ref={ref} />
    </div>
  );
}
window.ScrollProgress = ScrollProgress;

// ---------- Floating dot bridge between sections ----------
function DotBridge() {
  return (
    <div className="dot-bridge" aria-hidden="true">
      <i /><i /><i /><i /><i />
    </div>
  );
}
window.DotBridge = DotBridge;
