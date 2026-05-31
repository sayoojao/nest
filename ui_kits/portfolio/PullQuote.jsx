// PullQuote — single line, italic display serif, centered.
function PullQuote() {
  const ref = useInView();
  return (
    <section className="pull-quote reveal" ref={ref} data-screen-label="06 Pull Quote">
      <div className="pq-inner">
        <div className="pq-mark">—</div>
        <div className="pq-text">
          On a rainy afternoon, you can hear the courtyard <em>from every room</em>.
        </div>
        <div className="pq-by">Field note · monsoon 2024</div>
      </div>
    </section>
  );
}
window.PullQuote = PullQuote;
