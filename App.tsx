import React, { useEffect, useMemo, useState } from 'react';

type Route = 'home' | 'tacoandchai' | 'zeyo';

const pages: Record<Route, { title: string; description: string }> = {
  home: {
    title: 'EMEV - AI content studio',
    description:
      'AI-native content production for food and lifestyle brands in Sydney.',
  },
  tacoandchai: {
    title: 'taco & chai - by EMEV',
    description:
      'AI-enhanced food and lifestyle content with a real point of view.',
  },
  zeyo: {
    title: 'Zeyo - AI character by EMEV',
    description: 'A warm AI character experience for mood checks and tiny everyday reactions.',
  },
};

const getRoute = (): Route => {
  const pathname = window.location.pathname.replace(/\/+$/, '');
  if (pathname === '/tacoandchai') return 'tacoandchai';
  if (pathname === '/zeyo' || pathname === '/basil') return 'zeyo';
  return 'home';
};

const App: React.FC = () => {
  const [route, setRoute] = useState<Route>(getRoute);

  useEffect(() => {
    const onPopState = () => setRoute(getRoute());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const page = pages[route];
    document.title = page.title;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', page.description);
  }, [route]);

  const page = useMemo(() => {
    if (route === 'tacoandchai') return <TacoAndChaiPage />;
    if (route === 'zeyo') return <ZeyoPage />;
    return <HomePage />;
  }, [route]);

  return page;
};

const HomePage: React.FC = () => (
  <div className="emev-shell emev-home">
    <nav className="home-nav">
      <a href="/" className="home-logo">EMEV</a>
      <a href="mailto:hello@emev.com.au" className="home-email">hello@emev.com.au</a>
    </nav>

    <main className="home-main">
      <p className="eyebrow">AI content studio - Sydney, AU</p>
      <h1>We make content move at the <em>speed of now</em></h1>
      <p className="sub">
        AI-native content production for food and lifestyle brands. No photoshoot.
        No three-week wait. Just content that works.
      </p>

      <div className="projects">
        <a href="/tacoandchai" className="project-card">
          <div className="project-label"><span className="dot" />Active</div>
          <div className="project-name">taco & chai</div>
          <div className="project-desc">Food & lifestyle content brand</div>
        </a>
        <a href="/zeyo" className="project-card">
          <div className="project-label"><span className="dot soon" />Coming soon</div>
          <div className="project-name">Zeyo</div>
          <div className="project-desc">AI character for tiny mood checks</div>
        </a>
        <a href="mailto:hello@emev.com.au" className="project-card">
          <div className="project-label">Work with us</div>
          <div className="project-name">Get in touch</div>
          <div className="project-desc">hello@emev.com.au</div>
        </a>
      </div>
    </main>

    <footer className="home-footer">
      <span>© 2026 EMEV</span>
      <span>Sydney, Australia</span>
    </footer>
  </div>
);

const TacoAndChaiPage: React.FC = () => (
  <div className="brand-page taco-page">
    <nav className="brand-nav">
      <a href="/" className="nav-back">EMEV</a>
      <span className="brand-logo">taco & chai</span>
      <a href="https://instagram.com/tacoandchai" target="_blank" rel="noreferrer" className="nav-link">@tacoandchai</a>
    </nav>

    <section className="brand-hero">
      <p className="brand-tag">Food & lifestyle content - Sydney</p>
      <h1>proof that ordinary days<br />can still feel <em>cinematic</em></h1>
      <p className="brand-sub">
        AI-enhanced food content with a real point of view. We make your restaurant,
        cafe, or food brand look the way it feels - not the way a stock photo looks.
      </p>
      <div className="cta-row">
        <a href="https://instagram.com/tacoandchai" target="_blank" rel="noreferrer" className="btn btn-fill">Follow @tacoandchai</a>
        <a href="mailto:hello@emev.com.au" className="btn btn-outline">Work with us</a>
      </div>
    </section>

    <div className="strip" aria-hidden="true">
      <div className="strip-inner">
        {['AI-enhanced imagery', '10+ restaurant collabs', '48hr turnaround', 'captions that sound human', 'soft life content', 'emotionally attached to this coffee', 'AI-enhanced imagery', '10+ restaurant collabs', '48hr turnaround', 'captions that sound human'].map((item, index) => (
          <React.Fragment key={`${item}-${index}`}>
            <span>{item}</span><span className="strip-sep">/</span>
          </React.Fragment>
        ))}
      </div>
    </div>

    <section className="section">
      <div className="two-col">
        <div>
          <p className="section-label">What we are</p>
          <h2>food content with a <em>point of view</em></h2>
        </div>
        <div className="body-text">
          <p>taco & chai started as a simple idea: <strong>ordinary days deserve to look extraordinary.</strong> A bowl of ramen. A morning coffee. A walk that accidentally fixed your mood. These things are worth capturing properly.</p>
          <p>We create AI-enhanced food and lifestyle content for Instagram: carousels, reels, and stories that feel like a person made them. Because they do. The AI handles the imagery. <strong>The point of view is entirely ours.</strong></p>
          <p>We also work with restaurants and food brands who want content that reflects how their food actually feels to eat.</p>
        </div>
      </div>

      <div className="captions-grid">
        {[
          ['"autumn is just soup propaganda and I am fully buying it"', 'Seasonal content'],
          ['"my gym motivation is honestly just garlic bread at the end"', 'Food personality'],
          ['"this ramen healed something in me"', 'Restaurant collab'],
          ['"every recipe I make becomes emotional support food"', 'Relatable content'],
          ['"proof that ordinary days can still feel cinematic"', 'Brand voice'],
          ['"currently powered by noodles and delusion"', 'Lifestyle content'],
        ].map(([text, category]) => (
          <article className="caption-card" key={text}>
            <div className="caption-text">{text}</div>
            <div className="caption-cat">{category}</div>
          </article>
        ))}
      </div>
    </section>

    <div className="stats">
      <div className="stat"><div className="stat-n">10<span>+</span></div><div className="stat-d">Restaurant partners doing barter content collabs</div></div>
      <div className="stat"><div className="stat-n">48<span>hr</span></div><div className="stat-d">From brief to delivered content, no photoshoot needed</div></div>
      <div className="stat"><div className="stat-n">AI<span>x</span></div><div className="stat-d">Every image AI-enhanced with our editorial style</div></div>
    </div>

    <section className="services">
      <p className="section-label">For restaurants & food brands</p>
      <h2>what we <em>do for you</em></h2>
      <div className="services-grid">
        {[
          ['01', 'Content starter pack', '1 carousel, 1 reel, 3 stories. AI imagery, captions, hashtags. $500 flat. 48hr turnaround.'],
          ['02', 'Monthly retainer', '4 carousels + 4 reels per month. We become your content team. $1,200/month.'],
          ['03', 'Barter collab', 'Free food in exchange for content. Ask us about current availability with our active partners.'],
          ['04', 'Brand campaign', 'Full storytelling arc, AI ad creative set, usage rights included. From $2,500.'],
        ].map(([number, name, description]) => (
          <article className="svc" key={name}>
            <div className="svc-num">{number}</div>
            <div className="svc-name">{name}</div>
            <div className="svc-desc">{description}</div>
          </article>
        ))}
      </div>
    </section>

    <section className="brand-cta">
      <h2>your food deserves<br />content that <em>feels right</em></h2>
      <p>Tell us about your restaurant or brand. We will come back with ideas within 24 hours.</p>
      <a href="mailto:hello@emev.com.au" className="btn btn-fill">hello@emev.com.au</a>
    </section>

    <BrandFooter label="taco & chai - a project by" location="Sydney, Australia" />
  </div>
);

const ZeyoPage: React.FC = () => (
  <div className="brand-page zeyo-page">
    <nav className="brand-nav">
      <a href="/" className="nav-back">EMEV</a>
      <span className="brand-logo">Zeyo</span>
      <a href="https://zeyo.emev.com.au" className="nav-link">zeyo.emev.com.au</a>
    </nav>

    <main className="zeyo-main">
      <span className="badge">AI character</span>
      <h1>meet the tiny AI friend<br />that reads the <em>room.</em></h1>
      <p className="zeyo-sub">
        Zeyo is the character behind the mood-check experience: quick camera reactions,
        warm voice lines, and gentle AI feedback that feels more like a companion than a tool.
      </p>

      <div className="demo">
        <div className="demo-img zeyo-face" aria-hidden="true">
          <span />
        </div>
        <div className="demo-label">Zeyo says</div>
        <div className="demo-captions">
          <button className="demo-caption selected">"tiny tired sparkle detected. still iconic."</button>
          <button className="demo-caption">"this is giving cozy main character energy."</button>
          <button className="demo-caption">"gentle chaos today. honestly, respect."</button>
        </div>
      </div>

      <div className="cta-row centered">
        <a href="https://zeyo.emev.com.au" className="btn btn-fill">Open Zeyo</a>
        <a href="mailto:hello@emev.com.au" className="btn btn-outline">Partner with EMEV</a>
      </div>
    </main>

    <BrandFooter label="Zeyo - an AI character by" location="Built in Sydney" />
  </div>
);

const BrandFooter: React.FC<{ label: string; location: string }> = ({ label, location }) => (
  <footer className="brand-footer">
    <span>{label} <a href="/">EMEV</a></span>
    <span>{location}</span>
  </footer>
);

export default App;
