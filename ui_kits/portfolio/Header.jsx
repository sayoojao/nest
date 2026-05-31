// Header — fixed, transparent over hero, tinted backdrop after scroll.
// Mobile: hamburger toggles a full-screen drawer.

function Header({ overHero, onLogo, onContact }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const klass = ['site-header'];
  if (scrolled) klass.push('scrolled');
  if (overHero && !scrolled && !open) klass.push('over-hero');

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    // Allow drawer to start closing before scrolling
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 80);
  };

  return (
    <>
      <header className={klass.join(' ')}>
        <div className="logo-lockup" onClick={() => { setOpen(false); onLogo && onLogo(); }}>
          <span className="word">Nest<span className="logo-dot" /></span>
          <span className="tag">the happy place</span>
        </div>
        <nav className="nav">
          <a href="#story" onClick={scrollTo('story')}>Story</a>
          <a href="#gallery" onClick={scrollTo('gallery')}>Gallery</a>
          <a href="#walk" onClick={scrollTo('walk')}>Walkthrough</a>
          <a href="#plan" onClick={scrollTo('plan')}>Plan</a>
          <a href="#guestbook" onClick={scrollTo('guestbook')}>Guestbook</a>
        </nav>
        <a className="cta-btn" href="#guestbook" onClick={(e) => { e.preventDefault(); onContact && onContact(); }}>
          Sign the guestbook <span className="arr">→</span>
        </a>
        <button
          className={`menu-toggle ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span />
        </button>
      </header>
      <div className={`mobile-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <nav className="nav-mobile-list">
          <a href="#story"     onClick={scrollTo('story')}>Story</a>
          <a href="#gallery"   onClick={scrollTo('gallery')}>Gallery</a>
          <a href="#walk"      onClick={scrollTo('walk')}>Walkthrough</a>
          <a href="#plan"      onClick={scrollTo('plan')}>Plan &amp; details</a>
          <a href="#guestbook" onClick={scrollTo('guestbook')}><em>Sign the guestbook</em></a>
        </nav>
        <a className="mobile-cta" href="#guestbook" onClick={(e) => { e.preventDefault(); setOpen(false); setTimeout(() => onContact && onContact(), 80); }}>
          Leave us a note <span>→</span>
        </a>
        <div className="mobile-foot">a home in olipram</div>
      </div>
    </>
  );
}

window.Header = Header;
