// Footer — slow marquee + minimal credits.
function Footer() {
  const phrase = ['the happy place', 'a home in olipram', 'stucco · terracotta · arches'];
  const items = [...phrase, ...phrase, ...phrase];
  return (
    <footer className="site-footer" data-screen-label="09 Footer">
      <div className="marquee">
        <div className="marquee-track">
          {items.map((n, i) => (
            <React.Fragment key={i}>
              <span>{n}</span>
              <div className="dot" />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="footer-bottom footer-bottom--simple">
        <div>
          <div className="word">Nest</div>
          <div className="tag">the happy place</div>
        </div>
        <div className="f-cols">
          <div>
            <h5>The home</h5>
            <ul>
              <li><a href="#story">Story</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#walk">Walkthrough</a></li>
              <li><a href="#plan">Plan</a></li>
            </ul>
          </div>
          <div>
            <h5>Credits</h5>
            <ul>
              <li>For the Sayooj family</li>
              <li>Architects · VAS Associates</li>
              <li>Olipram, Kerala · 2024</li>
            </ul>
          </div>
          <div>
            <h5>Stay in touch</h5>
            <ul>
              <li><a href="#guestbook">Sign the guestbook</a></li>
              <li><a href="mailto:hello@olipram.house">hello@olipram.house</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <span>© 2026 · A home in Olipram</span>
        <span>Designed for the long view</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
