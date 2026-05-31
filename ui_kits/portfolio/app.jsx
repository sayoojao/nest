// app.jsx — single-page portfolio for one home.
function App() {
  return (
    <>
      <ScrollProgress />
      <Header
        overHero={true}
        onLogo={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onContact={() => {
          const el = document.getElementById('guestbook');
          if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 12, behavior: 'smooth' });
        }}
      />
      <Hero />
      <TheStory />
      <Gallery />
      <Walkthrough />
      <DetailsPlan />
      <PullQuote />
      <Montage />
      <Guestbook />
      <Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
