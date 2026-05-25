import React, { useState, useEffect, useRef } from 'react';

interface PartnershipPageProps {
  onWaitlistClick: () => void;
}

type TabType = 'overview' | 'services' | 'coverage';

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

export default function PartnershipPage({ onWaitlistClick }: PartnershipPageProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>('va');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const allianceBenefits = [
    {
      title: "Bi-National Market Access from Day One",
      desc: "YottaFlex.ai operates from Glen Allen, Virginia with a Canadian subsidiary. Inforica is headquartered in Mississauga, Ontario with a 25-year client base across Canada. Together we offer seamless US and Canadian delivery – local relationships, local compliance knowledge, and a single coordinated team on both sides of the border.",
      iconColor: '#3b82f6',
      iconBg: 'rgba(59, 130, 246, 0.08)',
      iconBorder: 'rgba(59, 130, 246, 0.25)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
        </svg>
      )
    },
    {
      title: "AWS + Microsoft: The Full Cloud Spectrum",
      desc: "YottaFlex.ai's deep AWS expertise — Bedrock, SageMaker, Lambda, EKS — combines with Inforica's 25 years as a Microsoft-authorized partner. Clients running on Azure, AWS, or a hybrid of both now have one accountable team with certified expertise across the full enterprise cloud landscape.",
      iconColor: '#eab308',
      iconBg: 'rgba(234, 179, 8, 0.08)',
      iconBorder: 'rgba(234, 179, 8, 0.25)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "AI Engineering Meets Enterprise AI Governance",
      desc: "YottaFlex.ai's YottaBuilder.ai platform and AI/ML engineering practice accelerates the build side of AI. Inforica's AI Advantage program operationalizes Microsoft AI within secure, governed, identity-first enterprise environments. The combination delivers AI from code to boardroom — end to end, with no gaps.",
      iconColor: '#f97316',
      iconBg: 'rgba(249, 115, 22, 0.08)',
      iconBorder: 'rgba(249, 115, 22, 0.25)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4M8 2h8M12 2v2" />
          <rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2M20 14h2M15 13v2M9 13v2M9 17h6" />
        </svg>
      )
    },
    {
      title: "Broader Industry Coverage Than Either Alone",
      desc: "YottaFlex.ai brings deep expertise in Fintech, Energy, Real Estate, Healthcare, and Legal. Inforica brings a proven track record in Utilities, Insurance, Manufacturing, Finance, and Education — including proprietary platforms like iBilling and iCRM. Together, we serve a wider cross-section of enterprise industries than any single-company engagement can match.",
      iconColor: '#ec4899',
      iconBg: 'rgba(236, 72, 153, 0.08)',
      iconBorder: 'rgba(236, 72, 153, 0.25)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20h20M17 18V9l-5 4V9L7 13V9l-5 4v5" />
        </svg>
      )
    },
    {
      title: "A Structural Investment – Not Just a Partnership Badge",
      desc: "YottaFlex.ai has made a direct equity investment in Inforica, establishing shared go-to-market objectives, coordinated account teams, and integrated delivery infrastructure. For clients, this means a single accountable entity — not two separate vendors who occasionally refer each other — with the depth and breadth to navigate the full complexity of enterprise AI and cloud transformation.",
      iconColor: '#10b981',
      iconBg: 'rgba(16, 185, 129, 0.08)',
      iconBorder: 'rgba(16, 185, 129, 0.25)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0l-1.6 1.6a1 1 0 0 1-1.4 0l-1.6-1.6a1 1 0 0 0-1.4 0l-1.6 1.6a1 1 0 0 0 0 1.4l4 4a1 1 0 0 0 1.4 0z" />
          <path d="m18 14 1.6 1.6a1 1 0 0 0 1.4 0l1.6-1.6a1 1 0 0 0 0-1.4L18 7" />
          <path d="m6 14-1.6 1.6a1 1 0 0 1-1.4 0L1.4 14a1 1 0 0 1 0-1.4L6 7" />
        </svg>
      )
    }
  ];

  const yottaServices = [
    { title: "AI & ML Engineering", desc: "Custom AI model development, LLM integration, agentic AI systems, and ML pipelines — on AWS Bedrock, SageMaker, and any major LLM platform." },
    { title: "YottaBuilder.ai Platform", desc: "Our flagship AI-accelerated software delivery platform — from structured requirements to production-ready code in days, with full human governance." },
    { title: "Cloud & DevOps (AWS)", desc: "AWS architecture, cloud migration, infrastructure automation, and CI/CD delivery. Deep expertise across EC2, Lambda, EKS, and Bedrock." },
    { title: "Data Engineering & Analytics", desc: "Big data platforms, data lake design, real-time streaming pipelines, and enterprise analytics architectures that make AI possible at scale." },
    { title: "Custom Software & Product Development", desc: "Full-cycle product engineering — fintech platforms, compliance tools (SafeChief), enterprise SaaS — backed by 130+ engineers." },
    { title: "Digital Transformation", desc: "End-to-end transformation programs covering automation, process redesign, mobile platforms, and enterprise system integration." }
  ];

  const inforicaServices = [
    { title: "Microsoft AI Advantage", desc: "End-to-end Microsoft AI operationalization — Copilot for M365, Azure OpenAI, Copilot Studio — with identity-first security and governance." },
    { title: "Azure Cloud & Platform Services", desc: "Azure migration, modernization, and managed cloud operations. Cloud-native architecture built for enterprise resilience and scale." },
    { title: "Identity & Security (Microsoft Entra)", desc: "Zero-trust security, Entra ID governance, conditional access, privileged identity management, and AI-specific access controls." }
  ];

  const hotspots = {
    va: {
      name: "Glen Allen, Virginia (USA)",
      role: "YottaFlex.ai Headquarters",
      desc: "Core hub for AWS, generative AI engineering, and full-stack custom software delivery. Strategic consulting, project management, and US market operations are spearheaded from our Virginia office.",
      coords: { x: 33, y: 38 }
    },
    toronto: {
      name: "Mississauga, Ontario (Canada)",
      role: "Inforica Headquarters",
      desc: "A 25-year Microsoft-authorized practice. Specializes in Azure, Entra ID security, M365 Copilot governance, and Canadian regulated enterprise delivery.",
      coords: { x: 37, y: 30 }
    },
    hyd: {
      name: "Hyderabad (India)",
      role: "Global Delivery & R&D Center",
      desc: "Our primary high-scale development center. Houses over 80+ certified AWS and Microsoft cloud architects, data engineers, and AI developers working on 24/7 delivery pipelines.",
      coords: { x: 70, y: 55 }
    },
    medellin: {
      name: "Medellín (Colombia)",
      role: "Nearshore Delivery Center",
      desc: "Nearshore hub aligned to North American timezones. Specializes in rapid application prototyping, custom SaaS engineering, QA testing, and real-time support.",
      coords: { x: 38, y: 68 }
    }
  };

  const industries = [
    "Financial Services & Fintech",
    "Energy & Oil Gas",
    "Healthcare",
    "Legal",
    "Real Estate",
    "Telecom & Networks",
    "Sports & Entertainment",
    "Non-Profit & Public Sector",
    "Retail",
    "Utilities",
    "Insurance",
    "Manufacturing",
    "Education",
    "Accounting & Professional Services"
  ];

  return (
    <div className="partnership-page-wrapper" style={{ color: 'var(--text-primary)', position: 'relative', zIndex: 1 }}>
      
      {/* HERO SECTION */}
      <section className="partnership-hero" style={{ paddingTop: '8.5rem', paddingBottom: '3.5rem', minHeight: '50vh', display: 'flex', alignItems: 'center', background: 'transparent', backgroundImage: 'none' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <div className="hero-badge-wrapper" data-aos="fade-down">
              <div className="hero-badge" style={{ display: 'inline-block', background: 'rgba(0, 210, 255, 0.08)', border: '1px solid rgba(0, 210, 255, 0.3)', padding: '0.4rem 1.2rem', borderRadius: '100px' }}>
                <span className="accent-label" style={{ margin: 0 }}>Strategic Alliance</span>
              </div>
            </div>
            
            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100" style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4.25rem)', fontWeight: 800, marginTop: '1.5rem', marginBottom: '1.5rem', lineHeight: 1.15 }}>
              YottaFlex.ai Invests in <span className="gradient-text">Inforica</span>
            </h1>
            
            <p className="hero-subheading" data-aos="fade-up" data-aos-delay="200" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', color: 'var(--text-secondary)', maxWidth: '850px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
              A structurally integrated alliance spanning AWS, Microsoft Azure, and Generative AI across the United States, Canada, and global delivery centers.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }} data-aos="fade-up" data-aos-delay="300">
              <button className="btn btn-gradient" onClick={onWaitlistClick}>
                Book a Discovery Call
              </button>
              <button className="btn btn-outline" onClick={() => setActiveTab('services')}>
                See Our Offerings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD TABS NAVIGATION */}
      <section style={{ padding: '0 2rem 2rem 2rem', background: 'transparent' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="partnership-radio-tabs" data-aos="fade-up">
            {[
              { id: 'overview', label: 'Partnership Overview' },
              { id: 'services', label: 'Combined Services' },
              { id: 'coverage', label: 'Market Coverage' }
            ].map((tab) => (
              <label key={tab.id}>
                <input
                  type="radio"
                  name="partnership-tab"
                  checked={activeTab === tab.id}
                  onChange={() => setActiveTab(tab.id as TabType)}
                />
                {tab.label}
              </label>
            ))}
            <span className="selection"></span>
          </div>
        </div>
      </section>

      <div className="separator-gradient"></div>

      {/* TAB CONTENT 1: PARTNERSHIP OVERVIEW */}
      {activeTab === 'overview' && (
        <div key="overview-tab" data-aos="fade-in">
          
          {/* STATS & ALLIANCE CARD */}
          <section className="partnership-stats" style={{ padding: '5rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
                
                {/* Visual Alliance Graphic */}
                <div className="glass-card connection-card" data-aos="fade-right" style={{ 
                  padding: '3rem', 
                  borderRadius: '20px', 
                  position: 'relative',
                  border: '1px solid rgba(0, 210, 255, 0.15)',
                  background: 'rgba(13, 15, 20, 0.45)',
                  textAlign: 'center',
                  overflow: 'hidden'
                }}>
                  <div className="stat-glow-effect" style={{
                    position: 'absolute', top: '10%', left: '10%',
                    width: '120px', height: '120px',
                    background: 'var(--accent-cyan)', filter: 'blur(50px)',
                    opacity: 0.12, borderRadius: '50%'
                  }}></div>
                  <div className="stat-glow-effect" style={{
                    position: 'absolute', bottom: '10%', right: '10%',
                    width: '120px', height: '120px',
                    background: 'var(--accent-purple)', filter: 'blur(50px)',
                    opacity: 0.12, borderRadius: '50%'
                  }}></div>

                  <span className="accent-label" style={{ fontSize: '0.7rem' }}>Alliance Integration</span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0.75rem 0 2rem 0' }}>AWS &amp; Microsoft Unified</h3>
                  
                  {/* Connection Diagram */}
                  <div className="alliance-connector-viz" style={{ position: 'relative', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', marginBottom: '2rem' }}>
                    
                    <div className="logo-bubble yotta-bubble" style={{ 
                      position: 'relative',
                      width: '75px', height: '75px', borderRadius: '50%', 
                      border: '2px solid var(--accent-cyan)', background: 'rgba(0, 210, 255, 0.08)',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 0 25px rgba(0, 210, 255, 0.25)',
                      zIndex: 3
                    }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 900, color: 'var(--accent-cyan)', letterSpacing: '-0.02em' }}>Yotta</span>
                      <span style={{ fontSize: '0.55rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', opacity: 0.7 }}>AWS</span>
                    </div>

                    <div className="connection-pipe-container" style={{ position: 'absolute', left: 'calc(2rem + 75px)', right: 'calc(2rem + 75px)', height: '4px', zIndex: 1 }}>
                      <div className="glowing-pulse-line" style={{
                        width: '100%', height: '100%',
                        background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
                        position: 'relative',
                        borderRadius: '2px'
                      }}>
                        <div className="pulse-dot"></div>
                      </div>
                    </div>

                    <div className="logo-bubble inforica-bubble" style={{ 
                      position: 'relative',
                      width: '75px', height: '75px', borderRadius: '50%', 
                      border: '2px solid var(--accent-purple)', background: 'rgba(29, 78, 216, 0.08)',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 0 25px rgba(29, 78, 216, 0.25)',
                      zIndex: 3
                    }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#38bdf8', letterSpacing: '-0.02em' }}>Inforica</span>
                      <span style={{ fontSize: '0.55rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', opacity: 0.7 }}>Azure</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                    <span className="platform-pill">AWS Bedrock</span>
                    <span className="platform-pill">Azure OpenAI</span>
                    <span className="platform-pill">YottaBuilder</span>
                    <span className="platform-pill">M365 Copilot</span>
                  </div>
                </div>

                {/* Combined numbers */}
                <div data-aos="fade-left">
                  <span className="accent-label">Alliance Footprint</span>
                  <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                    One Coordinated Team
                  </h2>
                  <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
                    Most firms force you to choose between AWS and Microsoft Cloud. Our alliance brings unified certified excellence across both. We operate as a single structural unit for co-delivery, eliminating coordination overhead.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div className="about-stat-card glass-card hover-glow-card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
                      <h3 className="gradient-text" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 900, marginBottom: '0.4rem' }}>
                        <AnimatedCounter target={130} />
                      </h3>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        AI &amp; Cloud Engineers
                      </span>
                    </div>

                    <div className="about-stat-card glass-card hover-glow-card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
                      <h3 className="gradient-text" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 900, marginBottom: '0.4rem' }}>
                        <AnimatedCounter target={25} />+
                      </h3>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Years Delivery Track
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <div className="separator-gradient"></div>

          {/* BENEFIT CARDS GRID */}
          <section className="partnership-benefits" style={{ padding: '5.5rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                <span className="accent-label">Why This Investment</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', fontWeight: 800, marginTop: '0.5rem' }}>
                  What the Alliance Creates
                </h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '1rem auto 0 auto', fontSize: '1.05rem' }}>
                  This is a strategic investment — not a referral agreement. It creates a structurally integrated partnership built on complementary strengths.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                {allianceBenefits.map((benefit, idx) => (
                  <div 
                    key={idx} 
                    className="about-value-card glass-card partnership-benefit-card"
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    data-aos="fade-up" 
                    data-aos-delay={idx * 100}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.25rem',
                      alignItems: 'flex-start',
                      textAlign: 'left',
                      background: hoveredCard === idx ? 'rgba(0, 210, 255, 0.04)' : 'var(--glass-bg)',
                      borderColor: hoveredCard === idx ? 'rgba(0, 210, 255, 0.3)' : 'var(--glass-border)',
                      boxShadow: hoveredCard === idx ? '0 0 30px rgba(0, 210, 255, 0.12)' : 'none',
                      transform: hoveredCard === idx ? 'translateY(-6px)' : 'none',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                     <div className="benefit-icon-wrapper" style={{
                      background: benefit.iconBg || 'rgba(0, 210, 255, 0.06)',
                      border: `1px solid ${benefit.iconBorder || 'rgba(0, 210, 255, 0.25)'}`,
                      width: '46px',
                      height: '46px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: benefit.iconColor || 'var(--accent-cyan)',
                      boxShadow: hoveredCard === idx ? `0 0 12px ${benefit.iconColor || 'rgba(0, 210, 255, 0.25)'}` : 'none',
                      transition: 'all 0.3s ease'
                    }}>
                      {benefit.icon}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {benefit.title}
                    </h3>
                    <p style={{ fontSize: '0.92rem', margin: 0, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                      {benefit.desc}
                    </p>
                  </div>
                ))}

                {/* Combined Statement Box */}
                <article 
                  className="partnership-statement-card" 
                  data-aos="fade-up" 
                  data-aos-delay="500"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="partnership-statement-icon"
                  >
                    <path
                      d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      stroke="currentColor"
                    ></path>
                  </svg>
                  <p className="partnership-statement-text">
                    "Together we offer what no single firm can match: the AI engineering velocity of a next-generation product company, the enterprise delivery credibility of a 25-year Microsoft partner, and the geographic reach to serve clients across the US and Canada — on AWS, on Azure, or both."
                  </p>
                </article>
              </div>
            </div>
          </section>

        </div>
      )}

      {/* TAB CONTENT 2: COMBINED SERVICES */}
      {activeTab === 'services' && (
        <div key="services-tab" data-aos="fade-in">
          
          <section className="partnership-services-grid" style={{ padding: '5.5rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              
              <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <span className="accent-label">Shared Capabilities</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', fontWeight: 800, marginTop: '0.5rem' }}>
                  Our Combined Services Portfolio
                </h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '1rem auto 0 auto', fontSize: '1.05rem' }}>
                  A unified portfolio bridging advanced custom development, generative AI pipelines, and certified corporate multi-cloud compliance.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '3.5rem' }}>
                
                {/* YottaFlex AWS Panel */}
                <div data-aos="fade-right">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '2px solid rgba(0, 210, 255, 0.3)', paddingBottom: '1rem', marginBottom: '2rem' }}>
                    <div style={{
                      background: 'rgba(0, 210, 255, 0.08)',
                      border: '1px solid rgba(0, 210, 255, 0.25)',
                      padding: '0.5rem', borderRadius: '10px', display: 'flex', color: 'var(--accent-cyan)'
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>YottaFlex.ai Core</h3>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', fontWeight: 700, letterSpacing: '0.05em' }}>AI Engineering &amp; AWS Excellence</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {yottaServices.map((service, i) => (
                      <div key={i} className="glass-card hover-glow-card" style={{ padding: '1.75rem', borderRadius: '12px' }}>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{service.title}</h4>
                        <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>{service.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inforica Microsoft Azure Panel */}
                <div data-aos="fade-left">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '2px solid rgba(29, 78, 216, 0.3)', paddingBottom: '1rem', marginBottom: '2rem' }}>
                    <div style={{
                      background: 'rgba(29, 78, 216, 0.08)',
                      border: '1px solid rgba(29, 78, 216, 0.25)',
                      padding: '0.5rem', borderRadius: '10px', display: 'flex', color: '#60a5fa'
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="9" y1="3" x2="9" y2="21" />
                        <line x1="15" y1="3" x2="15" y2="21" />
                        <line x1="3" y1="9" x2="21" y2="9" />
                        <line x1="3" y1="15" x2="21" y2="15" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>Inforica Alliance Capabilities</h3>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#60a5fa', fontWeight: 700, letterSpacing: '0.05em' }}>Microsoft &amp; Azure Capabilities</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {inforicaServices.map((service, i) => (
                      <div key={i} className="glass-card hover-glow-card" style={{ padding: '1.75rem', borderRadius: '12px' }}>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{service.title}</h4>
                        <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: 1.5 }}>{service.desc}</p>
                      </div>
                    ))}
                    
                    {/* Visual Equation Banner */}
                    <div className="glass-card" style={{
                      padding: '2rem',
                      borderRadius: '12px',
                      background: 'rgba(29, 78, 216, 0.05)',
                      border: '1px dashed rgba(29, 78, 216, 0.35)',
                      textAlign: 'center',
                      marginTop: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', fontWeight: 900, marginBottom: '0.75rem', fontFamily: 'var(--font-headings)' }}>
                        <span style={{ color: 'var(--accent-cyan)' }}>AWS</span>
                        <span style={{ opacity: 0.5 }}>+</span>
                        <span style={{ color: '#60a5fa' }}>Azure</span>
                        <span style={{ opacity: 0.5 }}>+</span>
                        <span style={{ color: 'var(--accent-green)' }}>GenAI</span>
                      </div>
                      <p style={{ fontSize: '0.85rem', margin: 0, lineHeight: 1.5, maxWidth: '380px' }}>
                        Whether your enterprise runs on AWS, Azure, or both — we bring certified expertise to the table as one coordinated, accountable team.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

        </div>
      )}

      {/* TAB CONTENT 3: MARKET COVERAGE */}
      {activeTab === 'coverage' && (
        <div key="coverage-tab" data-aos="fade-in">
          
          {/* GEOGRAPHIC COVERAGE CARDS */}
          <section className="partnership-map" style={{ padding: '5.5rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                  North American Coverage, Deep Industry Expertise
                </h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '850px', margin: '0 auto', fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', lineHeight: 1.6 }}>
                  From Glen Allen to Mississauga to Hyderabad — our alliance operates at a scale that matches the ambitions of our clients.
                </p>
              </div>

              {/* Uiverse-Inspired Flag Sliding Details Cards */}
              <div className="partnership-map-container" style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '2.5rem',
                margin: '0 auto',
                padding: '2rem 0'
              }} data-aos="fade-up">
                
                {/* CARD 1: United States */}
                <div className="card">
                  <div className="border"></div>
                  <div className="content">
                    <div className="logo">
                      <div className="logo1">
                        <svg width="33" height="22" viewBox="0 0 33 22">
                          <rect width="33" height="22" fill="#b22234" />
                          <rect width="33" height="1.69" y="1.69" fill="#fff" />
                          <rect width="33" height="1.69" y="5.08" fill="#fff" />
                          <rect width="33" height="1.69" y="8.46" fill="#fff" />
                          <rect width="33" height="1.69" y="11.85" fill="#fff" />
                          <rect width="33" height="1.69" y="15.23" fill="#fff" />
                          <rect width="33" height="1.69" y="18.62" fill="#fff" />
                          <rect width="13.2" height="11.85" fill="#3c3b6e" />
                          {Array.from({ length: 9 }).map((_, r) => {
                            const isEven = r % 2 === 0;
                            const starCount = isEven ? 6 : 5;
                            const y = ((r + 1) * 11.85) / 10;
                            return Array.from({ length: starCount }).map((_, c) => {
                              const x = isEven 
                                ? ((c + 1) * 13.2) / 7 
                                : ((c + 1) * 13.2) / 6 - (13.2 / 12);
                              return (
                                <polygon 
                                  key={`${r}-${c}`}
                                  points={`${x},${y - 0.25} ${x + 0.08},${y - 0.08} ${x + 0.25},${y - 0.08} ${x + 0.1},${y + 0.08} ${x + 0.18},${y + 0.25} ${x},${y + 0.1} ${x - 0.18},${y + 0.25} ${x - 0.15},${y + 0.08} ${x - 0.25},${y - 0.08} ${x - 0.08},${y - 0.08}`}
                                  fill="#fff"
                                />
                              );
                            });
                          })}
                        </svg>
                      </div>
                      <div className="logo2">
                        UNITED STATES
                      </div>
                      <div className="trail"></div>
                    </div>
                    <div className="logo-bottom-text">
                      YottaFlex.ai headquartered in Glen Allen, Virginia. Serving enterprise clients across the US with AWS, generative AI engineering, and full-stack custom software delivery.
                    </div>
                  </div>
                  <span className="bottom-text">USA</span>
                </div>

                {/* CARD 2: Canada */}
                <div className="card">
                  <div className="border"></div>
                  <div className="content">
                    <div className="logo">
                      <div className="logo1">
                        <svg width="33" height="22" viewBox="0 0 33 22">
                          <rect width="33" height="22" fill="#de2910" />
                          <rect x="8.25" y="0" width="16.5" height="22" fill="#ffffff" />
                          <g transform="translate(7.54, 4.7) scale(0.035)">
                            <path d="M383.8 351.7c2.5-2.5 105.2-92.4 105.2-92.4l-17.5-7.5c-10-4.9-7.4-11.5-5-17.4 2.4-7.6 20.1-67.3 20.1-67.3s-47.7 10-57.7 12.5c-7.5 2.4-10-2.5-12.5-7.5s-15-32.4-15-32.4-52.6 59.9-55.1 62.3c-10 7.5-20.1 0-17.6-10 0-10 27.6-129.6 27.6-129.6s-30.1 17.4-40.1 22.4c-7.5 5-12.6 5-17.6-5C293.5 72.3 255.9 0 255.9 0s-37.5 72.3-42.5 79.8c-5 10-10 10-17.6 5-10-5-40.1-22.4-40.1-22.4S183.3 182 183.3 192c2.5 10-7.5 17.5-17.6 10-2.5-2.5-55.1-62.3-55.1-62.3S98.1 167 95.6 172s-5 9.9-12.5 7.5C73 177 25.4 167 25.4 167s17.6 59.7 20.1 67.3c2.4 5.9 5 12.5-5 17.4l-17.5 7.5S128.2 349.2 130.7 351.7c2.5 2.5 17.6 10 17.6 10s57.6-27.4 62.6-32.4c5-5 10-5 15 0 5 5 45.1 49.9 45.1 49.9l12.5-39.9c2.5-7.5 7.5-10 15-10s12.5 2.5 15 10l12.5 39.9s40.1-44.9 45.1-49.9c5-5 10-5 15 0 5 5 62.6 32.4 62.6 32.4s15.1-7.5 17.6-10z" fill="#de2910"/>
                          </g>
                        </svg>
                      </div>
                      <div className="logo2">
                        CANADA
                      </div>
                      <div className="trail"></div>
                    </div>
                    <div className="logo-bottom-text">
                      Inforica based in Mississauga, Ontario with 25+ years of Canadian enterprise delivery. YottaFlex.ai Canadian subsidiary enables joint delivery, local relationships, and bi-national client support.
                    </div>
                  </div>
                  <span className="bottom-text">CANADA</span>
                </div>

                {/* CARD 3: Global Delivery */}
                <div className="card">
                  <div className="border"></div>
                  <div className="content">
                    <div className="logo">
                      <div className="logo1">
                        <svg width="33" height="22" viewBox="0 0 33 22" fill="none">
                          <circle cx="16.5" cy="11" r="9" stroke="var(--accent-cyan)" strokeWidth="1.5" />
                          <ellipse cx="16.5" cy="11" rx="5" ry="9" stroke="var(--accent-cyan)" strokeWidth="0.75" opacity="0.6" />
                          <ellipse cx="16.5" cy="11" rx="9" ry="3" stroke="var(--accent-cyan)" strokeWidth="0.75" opacity="0.6" />
                          <line x1="16.5" y1="2" x2="16.5" y2="20" stroke="var(--accent-cyan)" strokeWidth="0.75" opacity="0.6" />
                          <circle cx="12" cy="8" r="1.5" fill="var(--accent-green)" />
                          <circle cx="21" cy="14" r="1.5" fill="var(--accent-cyan)" />
                          <path d="M12 8 Q 16.5 11 21 14" stroke="#fff" strokeWidth="0.75" strokeDasharray="2 1" />
                        </svg>
                      </div>
                      <div className="logo2">
                        GLOBAL DELIVERY
                      </div>
                      <div className="trail"></div>
                    </div>
                    <div className="logo-bottom-text">
                      Engineering and support centres in Hyderabad, India and Medellín, Colombia provide 24/7 delivery capacity and cost-efficient scale for complex, multi-workstream programs.
                    </div>
                  </div>
                  <span className="bottom-text">GLOBAL</span>
                </div>

              </div>
            </div>
          </section>

          <div className="separator-gradient"></div>

          {/* INDUSTRIES SERVED */}
          <section className="partnership-industries" style={{ padding: '5.5rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              
              <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                <span className="accent-label">Regulated &amp; Enterprise Markets</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', fontWeight: 800, marginTop: '0.5rem' }}>
                  Our Combined Industry Footprint
                </h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '1rem auto 0 auto', fontSize: '1.05rem' }}>
                  YottaFlex.ai's deep domain software capabilities combined with Inforica's institutional delivery footprint covers virtually all sectors.
                </p>
              </div>

              {/* Tag Cloud */}
              <div className="industry-tag-cloud" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
                maxWidth: '1000px',
                margin: '0 auto'
              }} data-aos="fade-up">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="industry-tag"
                    style={{
                      padding: '0.75rem 1.5rem',
                      background: 'rgba(13, 15, 20, 0.45)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '100px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      cursor: 'default',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {industry}
                  </div>
                ))}
              </div>

            </div>
          </section>

        </div>
      )}

      {/* FINAL CALL TO ACTIONS */}
      <div className="separator-gradient"></div>
      
      <section className="partnership-cta" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }} data-aos="zoom-in">
          <span className="accent-label">Book an Engagement</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.75rem)', fontWeight: 800, marginTop: '0.5rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
            Accelerate Your Cloud &amp; AI Roadmap Today
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Connect with YottaFlex to explore how this investment and multi-cloud delivery alliance can support your enterprise transformation objectives.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-gradient" onClick={onWaitlistClick}>
              Contact YottaFlex.ai
            </button>
            <a href="https://inforica.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Contact Inforica (Canada)
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
