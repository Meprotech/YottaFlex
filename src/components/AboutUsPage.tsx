import React, { useState, useEffect, useRef } from 'react';

interface AboutUsPageProps {
  onWaitlistClick: () => void;
}

type TabType = 'culture' | 'mission' | 'vision' | 'purpose';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
}

function AnimatedCounter({ target, duration = 1500 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !animatedRef.current) {
        animatedRef.current = true;
        let start = 0;
        const end = target;
        if (start === end) return;

        const totalSteps = 60;
        const stepTime = Math.max(Math.floor(duration / totalSteps), 15);
        const increment = end / totalSteps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, stepTime);

        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  return <span ref={elementRef}>{count}</span>;
}

export default function AboutUsPage({ onWaitlistClick }: AboutUsPageProps) {
  const [activeTab, setActiveTab] = useState<TabType>('culture');
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const values = [
    {
      title: "Relentless Innovation",
      desc: "Cutting-edge technology, shipped at pace.",
      color: '#f97316',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M14 2c4 2 6 6 6 10l-4 4-4-4 4-4-4 4-2-2-4 4" />
          <path d="m9 15-3 3" />
          <path d="M19 5a5.008 5.008 0 0 1-5 5" />
        </svg>
      )
    },
    {
      title: "Engineering Excellence",
      desc: "Continuous learning. No shortcuts.",
      color: '#10b981',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19.439 10.158a2.5 2.5 0 0 0-3.522-3.522l-1.353 1.353a4 4 0 0 1-5.657 0L7.554 6.636a2.5 2.5 0 1 0-3.522 3.522l1.353 1.353a4 4 0 0 1 0 5.657l-1.353 1.353a2.5 2.5 0 1 0 3.522 3.522l1.353-1.353a4 4 0 0 1 5.657 0l1.353 1.353a2.5 2.5 0 1 0 3.522-3.522l-1.353-1.353a4 4 0 0 1 0-5.657z" />
        </svg>
      )
    },
    {
      title: "Generative AI Pioneers",
      desc: "Building the future of software, today.",
      color: '#ec4899',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />
        </svg>
      )
    },
    {
      title: "Above & Beyond",
      desc: "Exceeding expectations is the baseline.",
      color: '#3b82f6',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
          <path d="m22 2-7.5 7.5M22 2v5M22 2h-5" />
        </svg>
      )
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      desc: "We arrive with a working prototype so discovery becomes a hands-on conversation, not a document."
    },
    {
      step: "02",
      title: "AI Builder",
      desc: "Our AI engineers and AI platforms accelerate you to the last mile in days versus months."
    },
    {
      step: "03",
      title: "Last Mile",
      desc: "Engineers refine, integrate, and optimize where human expertise creates real impact."
    },
    {
      step: "04",
      title: "Support",
      desc: "Continuous monitoring and improvement ensure stability, security, operational excellence, and maintainability."
    }
  ];

  const tabContents = {
    culture: {
      subtitle: "From computing power to intelligent systems.",
      text: "At YottaFlex, we believe technology should do more than compute. It should think, adapt, and evolve. Our culture is built around innovation, flexibility, and responsible AI, empowering people and machines to work smarter together."
    },
    mission: {
      subtitle: "Accelerating global software capabilities.",
      text: "We design, build, support, and operate intelligent systems and platforms powered by advanced AI technologies and guided by human expertise to help organizations work smarter, move faster, and scale with confidence."
    },
    vision: {
      subtitle: "Powering the future of business.",
      text: "To build and support intelligent platforms that power the future of business. We envision a world where AI takes care of execution pipelines while humans drive creative vision and architectural integrity."
    },
    purpose: {
      subtitle: "Why we exist.",
      text: "To ensure our customers always win, create meaningful growth for our employees, and amplify human potential by eliminating repetitive work so people can focus on creativity, innovation, and impact."
    }
  };

  return (
    <div className="about-page-wrapper" style={{ color: 'var(--text-primary)' }}>
      {/* 1. HERO SECTION */}
      <section className="about-hero" style={{ paddingTop: '9rem', paddingBottom: '4rem', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <div className="hero-badge-wrapper" data-aos="fade-down">
              <div className="hero-badge" style={{ display: 'inline-block', background: 'rgba(0, 210, 255, 0.1)', border: '1px solid rgba(0, 210, 255, 0.3)', padding: '0.4rem 1.2rem', borderRadius: '100px' }}>
                <span className="accent-label" style={{ margin: 0 }}>Who We Are</span>
              </div>
            </div>
            
            <h1 className="hero-title gradient-text" data-aos="fade-up" data-aos-delay="100" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              The Team Behind the Technology
            </h1>
            
            <p className="hero-subheading" data-aos="fade-up" data-aos-delay="200" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
              Virginia-headquartered. 150+ professionals worldwide. Delivering enterprise AI-first platforms at scale.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }} data-aos="fade-up" data-aos-delay="350">
              <button className="btn btn-gradient" onClick={onWaitlistClick}>
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="separator-gradient"></div>

      {/* 2. SNAPSHOT & CORE NUMBERS */}
      <section className="about-snapshot" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            {/* Snapshot Details */}
            <div data-aos="fade-right">
              <span className="accent-label">Company Snapshot</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
                Built on Experience
              </h2>
              <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem' }}>
                A decade of enterprise delivery. Now AI-first with YottaBuilder.ai. We combine traditional engineering rigors with the cutting-edge capability of generative models.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>HQ</span>
                  <span style={{ fontWeight: 700, color: 'var(--accent-cyan)' }}>Virginia, USA</span>
                </div>
                <div style={{ display: 'flex', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Team</span>
                  <span style={{ fontWeight: 700 }}>150+ Engineers</span>
                </div>
                <div style={{ display: 'flex', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Offices</span>
                  <span style={{ fontWeight: 700 }}>VA · TX · NC · Hyderabad</span>
                </div>
                <div style={{ display: 'flex', paddingBottom: '0.25rem', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Approach</span>
                  <span style={{ fontWeight: 700, color: 'var(--accent-green)' }}>Fearless Culture &amp; AI-First</span>
                </div>
              </div>
            </div>

            {/* Glowing Counters Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }} data-aos="fade-left">
              {[
                { label: "Active Clients", target: 30, suffix: "+" },
                { label: "Projects Done", target: 50, suffix: "+" },
                { label: "Team Advisors", target: 10, suffix: "+" },
                { label: "Glorious Years", target: 8, suffix: "+" }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="about-stat-card glass-card" 
                  style={{ 
                    textAlign: 'center', 
                    padding: '2.5rem 1.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'default'
                  }}
                >
                  <div className="stat-glow-effect" style={{
                    position: 'absolute',
                    width: '60px',
                    height: '60px',
                    background: 'var(--accent-cyan)',
                    filter: 'blur(30px)',
                    opacity: 0.15,
                    borderRadius: '50%'
                  }}></div>
                  <h3 className="gradient-text" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 900, marginBottom: '0.5rem', fontFamily: 'var(--font-headings)' }}>
                    <AnimatedCounter target={stat.target} />{stat.suffix}
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="separator-gradient"></div>

      {/* 3. CORE VALUES SECTION */}
      <section className="about-values" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
            <span className="accent-label">Our Values</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginTop: '0.5rem' }}>
              What We Stand For
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="about-value-card glass-card hover-glow-card" 
                data-aos="fade-up" 
                data-aos-delay={idx * 100}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '2.5rem 2rem'
                }}
              >
                <div style={{
                  color: val.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease',
                  marginBottom: '0.25rem'
                }} className="value-card-icon">
                  {val.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '0.92rem', margin: 0, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="separator-gradient"></div>

      {/* 4. MISSION & CULTURE INTERACTIVE HUB */}
      <section className="about-hub" style={{ padding: '6rem 2rem', position: 'relative' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} data-aos="fade-up">
            <span className="accent-label">Core Philosophy</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginTop: '0.5rem' }}>
              Mission &amp; Culture Hub
            </h2>
          </div>

          {/* Toggle Tab Pills */}
          <div className="workflow-toggle-container about-toggle-container" style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'nowrap',
            gap: '0.5rem',
            background: 'rgba(13, 15, 20, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '100px',
            padding: '6px',
            maxWidth: '650px',
            margin: '0 auto 3.5rem auto',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)'
          }} data-aos="fade-up">
            {(['culture', 'mission', 'vision', 'purpose'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`workflow-toggle-btn ${activeTab === tab ? 'active' : ''}`}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  letterSpacing: '0.03em',
                  fontFamily: 'var(--font-headings)',
                  textTransform: 'uppercase',
                  transition: 'flex 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease, color 0.4s ease, box-shadow 0.4s ease',
                  ...(activeTab === tab ? {
                    background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
                    color: '#ffffff',
                    boxShadow: '0 0 15px rgba(0, 210, 255, 0.3)',
                  } : {
                    background: 'transparent',
                    color: '#ffffff',
                    opacity: 0.7
                  })
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <div data-aos="fade-up" key={activeTab}>
            <div className="glass-card" style={{
              border: '1px solid rgba(0, 210, 255, 0.15)',
              padding: '3rem',
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
            }}>
              <span style={{ color: 'var(--accent-cyan)', fontFamily: 'monospace', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '1rem' }}>
                YottaFlex // {activeTab}
              </span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                {tabContents[activeTab].subtitle}
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, margin: 0, color: '#e2e8f0' }}>
                {tabContents[activeTab].text}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="separator-gradient"></div>

      {/* 5. PROCESS WORKFLOW TIMELINE */}
      <section className="about-process" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
            <span className="accent-label">Our Process</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginTop: '0.5rem' }}>
              How We Deliver
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Connecting Timeline Line */}
            <div className="about-timeline-line" style={{
              position: 'absolute',
              top: '50px',
              left: '50px',
              bottom: '50px',
              width: '2px',
              background: 'rgba(255, 255, 255, 0.1)',
              zIndex: 1
            }}>
              {/* Active glowing indicator */}
              <div style={{
                position: 'absolute',
                top: hoveredStep !== null ? `${hoveredStep * 33.3}%` : '0%',
                left: '-1px',
                width: '4px',
                height: hoveredStep !== null ? '100px' : '0px',
                background: 'var(--accent-cyan)',
                boxShadow: '0 0 10px var(--accent-cyan)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
              }}></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative', zIndex: 2 }}>
              {processSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="about-process-step"
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '2.5rem',
                    textAlign: 'left'
                  }}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  {/* Glowing bubble indicator */}
                  <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    border: hoveredStep === idx ? '2px solid var(--accent-cyan)' : '1px solid rgba(255,255,255,0.1)',
                    background: hoveredStep === idx ? 'rgba(0, 210, 255, 0.15)' : 'var(--bg-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: hoveredStep === idx ? '0 0 20px rgba(0, 210, 255, 0.3)' : 'none',
                    transition: 'all 0.3s ease'
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-headings)',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: hoveredStep === idx ? 'var(--accent-cyan)' : 'var(--text-secondary)'
                    }}>
                      {step.step}
                    </span>
                  </div>

                  {/* Step Description Card */}
                  <div className="glass-card" style={{
                    flexGrow: 1,
                    border: hoveredStep === idx ? '1px solid rgba(0, 210, 255, 0.25)' : '1px solid var(--glass-border)',
                    boxShadow: hoveredStep === idx ? '0 10px 25px rgba(0, 210, 255, 0.05)' : 'none',
                    transform: hoveredStep === idx ? 'translateX(10px)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    padding: '2rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      marginBottom: '0.75rem',
                      color: hoveredStep === idx ? 'var(--accent-cyan)' : 'var(--text-primary)',
                      transition: 'color 0.3s ease'
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <div className="separator-gradient"></div>
      
      <section className="about-cta" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }} data-aos="zoom-in">
          <span className="accent-label">Collaborate With Us</span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Let’s Build Something Smart
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
            Partner with YottaFlex to create AI-driven tools that solve real-world challenges. Accelerate your roadmap with human-governed code intelligence.
          </p>
          <button className="btn btn-gradient" onClick={onWaitlistClick}>
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
