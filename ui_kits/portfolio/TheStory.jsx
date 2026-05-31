// TheStory — opening letter, serif italic prose in a narrow column.

function TheStory() {
  const ref = useInView();
  return (
    <section className="section story-section" id="story" data-screen-label="02 The Story">
      <div className="story-inner reveal" ref={ref}>
        <span className="eyebrow">A letter from the family</span>
        <div className="story-prose">
          <p>
            We wanted a home that felt like an <em>old letter</em> —
            warm to the touch, slow to read.
          </p>
          <p>
            Light first. Then walls. A verandah that you walk through
            to come inside, and a courtyard where the light moves all day.
            The arches came from the sketches we'd kept on the fridge for years.
          </p>
          <p>
            The red dots on the tower wall were the last thing we drew.
            Our daughter said the wall looked lonely. We agreed.
          </p>
        </div>
        <div className="signature">
          <span className="sig-name">— Sayooj &amp; family</span>
          <span className="sig-place">Olipram · 2024</span>
        </div>
      </div>
    </section>
  );
}
window.TheStory = TheStory;
