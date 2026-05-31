// Guestbook — a small form for visitors to leave a note.
function Guestbook() {
  const ref = useInView();
  const [entries, setEntries] = React.useState([
    { name: 'Anjana', note: 'The dots! I knew it. — felt like a hug.', date: 'today', fresh: false },
    { name: 'Vinod', note: 'The verandah is everything. Where do I sit first?', date: 'yesterday', fresh: false },
  ]);
  const [name, setName] = React.useState('');
  const [note, setNote] = React.useState('');
  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !note.trim()) return;
    const newE = { name: name.trim(), note: note.trim(), date: 'just now', fresh: true };
    setEntries([newE, ...entries]);
    setName(''); setNote('');
    // strip fresh after animation
    setTimeout(() => {
      setEntries((curr) => curr.map((x, i) => i === 0 ? { ...x, fresh: false } : x));
    }, 1700);
  };
  return (
    <section className="guestbook" id="guestbook" data-screen-label="08 Guestbook">
      <div className="gb-inner reveal" ref={ref}>
        <div className="gb-head">
          <span className="eyebrow">Sign the guestbook</span>
          <h2>Visiting? <em>Leave a note</em>.</h2>
          <p className="gb-blurb">
            A short paragraph is fine. We read every one — and we keep the
            book on the verandah table.
          </p>
        </div>
        <form className="gb-form" onSubmit={submit}>
          <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          <textarea placeholder="What did you notice?" rows="3" value={note} onChange={(e) => setNote(e.target.value)} />
          <button type="submit">Sign <span>→</span></button>
        </form>
        <div className="gb-list">
          {entries.map((e, i) => (
            <div className={`gb-entry ${e.fresh ? 'fresh' : ''}`} key={i + '-' + e.note.slice(0,8)}>
              <div className="gb-note">"{e.note}"</div>
              <div className="gb-by"><span>{e.name}</span><span className="dot">·</span><span>{e.date}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Guestbook = Guestbook;
