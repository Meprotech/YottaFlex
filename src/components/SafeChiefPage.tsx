import React, { useState } from 'react';
import safeChiefImg from '../assets/safechief_dashboard.png';

interface SafeChiefPageProps {
  onWaitlistClick: () => void;
}

export default function SafeChiefPage({ onWaitlistClick }: SafeChiefPageProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Force Open",
      desc: "Initiate drill or non-drill access with photo documentation and witness records at every step.",
      detail: "Log dual-witness signatures, drill technician IDs, and upload high-resolution condition photos directly from tablet or mobile."
    },
    {
      title: "Check-In Contents",
      desc: "Catalog every item with tamper-evident imaging and barcode scanning into secure inventory.",
      detail: "Generate tamper-evident seals and trace-labeled envelopes. Scan barcodes to associate inventory directly with closed renters."
    },
    {
      title: "Ship / Audit Content",
      desc: "Transport unclaimed property with full chain-of-custody tracking from vault to storage.",
      detail: "Coordinate dual-custody transfers, generate manifest sheets, and verify package barcodes at both shipping and receiving facilities."
    },
    {
      title: "Checkout & Escheat",
      desc: "File state transfers, owner returns, or final disposition, all with a complete audit trail.",
      detail: "Process owner claims, track state escheatment windows, and print final reporting documentation in compliance formats."
    }
  ];

  return (
    <div className="safechief-product-page" style={{ color: 'var(--text-primary)' }}>
      
      {/* 1. HERO SECTION */}
      <section className="product-hero" style={{ paddingTop: '9rem', paddingBottom: '4rem', minHeight: '80vh', position: 'relative', background: 'transparent' }}>
        <div className="hero-split">
          
          {/* Left: Text Content */}
          <div className="hero-split-content" style={{ zIndex: 2, textAlign: 'left' }}>
            <div className="hero-badge" data-aos="fade-down" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 210, 255, 0.1)', border: '1px solid rgba(0, 210, 255, 0.3)', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontWeight: 600 }}>
              <span style={{ width: '8px', height: '8px', background: 'var(--accent-cyan)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px var(--accent-cyan)' }}></span>
              VAULT &amp; COMPLIANCE SYSTEM
            </div>

            <h1 className="hero-title" data-aos="fade-up" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1.5rem', background: 'linear-gradient(135deg, var(--text-primary) 40%, var(--accent-cyan) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              SafeChief
            </h1>

            <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="100" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 0 2.5rem 0', lineHeight: 1.6 }}>
              One platform to manage the entire safe deposit box lifecycle. Centralize inventory, access tracking, renter onboarding, and regulatory compliance.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }} data-aos="fade-up" data-aos-delay="200">
              <button className="btn btn-gradient" onClick={() => window.open('https://safechief.com', '_blank')}>
                Visit Site
              </button>
              <button className="btn btn-outline" onClick={onWaitlistClick}>
                Request Demo
              </button>
            </div>
          </div>

          {/* Right: Mockup Image */}
          <div className="hero-split-image" data-aos="zoom-in" data-aos-delay="300">
            <img 
              src={safeChiefImg} 
              alt="SafeChief Vault Dashboard Mockup" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                display: 'block', 
                objectFit: 'cover',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
              }} 
            />
          </div>

        </div>
      </section>

      {/* 2. CORE VAULT OPERATIONS */}
      <section className="safechief-ops-section" style={{ padding: '6rem 2rem', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }} data-aos="fade-up">
            <span className="accent-label" style={{ letterSpacing: '0.15em', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>EFFICIENT &amp; SECURE</span>
            <h2 className="pipeline-title" style={{ color: 'var(--text-primary)' }}>
              Core Vault <span>Operations</span>
            </h2>
            <p className="pipeline-subtitle">
              Eliminate paper logs, automate dual-control workflows, and maintain an audit-ready vault lifecycle.
            </p>
          </div>

          <div className="pipeline-cards-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            
            {/* Box Inventory */}
            <div className="pipeline-card" data-aos="fade-up" data-aos-delay="100">
              <div className="pipeline-card-top-border"></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="pipeline-card-icon-container">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M21 9H3M21 15H3M12 3v18" /></svg>
                </div>
                <h3 className="pipeline-card-title">Box Inventory</h3>
              </div>
              <p className="pipeline-card-desc">
                Maintain a centralized inventory of safe deposit boxes, availability status, and branch allocation across your entire network.
              </p>
            </div>

            {/* Allotment */}
            <div className="pipeline-card" data-aos="fade-up" data-aos-delay="200">
              <div className="pipeline-card-top-border"></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="pipeline-card-icon-container">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>
                </div>
                <h3 className="pipeline-card-title">Allotment</h3>
              </div>
              <p className="pipeline-card-desc">
                Assign safe deposit boxes to customers, capture ID verification, set box sizes, and generate secure digital rental agreements.
              </p>
            </div>

            {/* Vault Access */}
            <div className="pipeline-card" data-aos="fade-up" data-aos-delay="300">
              <div className="pipeline-card-top-border"></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="pipeline-card-icon-container">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                </div>
                <h3 className="pipeline-card-title">Vault Access</h3>
              </div>
              <p className="pipeline-card-desc">
                Monitor and record all vault access activities with timestamped logs, biometric integration, and dual-control verification.
              </p>
            </div>

            {/* SDB Surrender */}
            <div className="pipeline-card" data-aos="fade-up" data-aos-delay="400">
              <div className="pipeline-card-top-border"></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="pipeline-card-icon-container">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path d="M14 3v5h5M16 13H8M16 17H8" /></svg>
                </div>
                <h3 className="pipeline-card-title">SDB Surrender</h3>
              </div>
              <p className="pipeline-card-desc">
                Process safe deposit box surrender requests with digital signature validation, outstanding dues clearance, and reconciliation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. LIFECYCLE FLOW */}
      <section className="safechief-lifecycle-section" style={{ padding: '6rem 2rem', borderTop: '1px solid rgba(255, 255, 255, 0.02)', borderBottom: '1px solid rgba(255, 255, 255, 0.02)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }} data-aos="fade-up">
            <span className="accent-label" style={{ letterSpacing: '0.15em', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>COMPLIANT LIFECYCLE</span>
            <h2 className="pipeline-title" style={{ color: 'var(--text-primary)' }}>
              From Drilling to <span>Escheatment</span>
            </h2>
            <p className="pipeline-subtitle">
              Manage the end-to-end process of unclaimed property with strict chain-of-custody audits.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginTop: '2rem' }}>
            
            {/* Interactive Steps List (Left) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} data-aos="fade-right">
              {steps.map((step, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`interactive-step-tab ${activeStep === idx ? 'active' : ''}`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <span className="step-number">{idx + 1}</span>
                    <h4 className="step-title">{step.title}</h4>
                  </div>
                  <p className="step-desc">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Interactive Step Display Panel (Right) */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} data-aos="fade-left">
              <div style={{
                background: 'rgba(8, 15, 26, 0.4)',
                border: '1px solid rgba(0, 210, 255, 0.15)',
                borderRadius: '16px',
                padding: '3rem 2.5rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                textAlign: 'left',
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }} className="pipeline-inner-panel">
                <span style={{ 
                  color: 'var(--accent-cyan)', 
                  fontFamily: 'monospace', 
                  fontSize: '0.8rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  marginBottom: '1rem',
                  display: 'block'
                }}>STAGE {activeStep + 1} OPERATIONS</span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>{steps[activeStep].title}</h3>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{steps[activeStep].desc}</p>
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1.5rem' }}>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{steps[activeStep].detail}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. KEY COMPLIANCE & AUTOMATION FEATURES */}
      <section className="safechief-compliance-section" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }} data-aos="fade-up">
            <span className="accent-label" style={{ letterSpacing: '0.15em', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>COMPLIANCE ENGINEERED</span>
            <h2 className="pipeline-title" style={{ color: 'var(--text-primary)' }}>
              Built for <span>Auditors &amp; Examiners</span>
            </h2>
            <p className="pipeline-subtitle">
              Every action timestamped, logged, and structured for state regulations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* Escheatment Compliance */}
            <div style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', background: 'rgba(255,255,255,0.01)', textAlign: 'left' }} className="pipeline-card">
              <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '1.2rem', fontWeight: 700 }}>Escheatment Compliance</h4>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Built-in state-by-state regulatory workflows, custom notifications, and deadline tracking for local unclaimed property compliance.
              </p>
            </div>

            {/* Warehouse Management */}
            <div style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', background: 'rgba(255,255,255,0.01)', textAlign: 'left' }} className="pipeline-card">
              <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '1.2rem', fontWeight: 700 }}>Warehouse Management</h4>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Track box contents across multiple local storage sites, centralized warehouses, or safe deposit vaults.
              </p>
            </div>

            {/* Audit-Ready Reports */}
            <div style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', background: 'rgba(255,255,255,0.01)', textAlign: 'left' }} className="pipeline-card">
              <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '1.2rem', fontWeight: 700 }}>Audit-Ready Reports</h4>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Every lifecycle action, signature, and photo log is instantly exportable in format structures ready for regulators.
              </p>
            </div>

            {/* Renter Onboarding */}
            <div style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', background: 'rgba(255,255,255,0.01)', textAlign: 'left' }} className="pipeline-card">
              <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '1.2rem', fontWeight: 700 }}>Renter Onboarding</h4>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Seamless digital agreements, photo ID capture, and signature capture. Reduce branches' paperwork overhead to zero.
              </p>
            </div>

            {/* Billing & Renewals */}
            <div style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', background: 'rgba(255,255,255,0.01)', textAlign: 'left' }} className="pipeline-card">
              <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '1.2rem', fontWeight: 700 }}>Billing &amp; Renewals</h4>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Automate invoice scheduling, renewal reminders, past-due tracking, and branch-level ledger reconciliation.
              </p>
            </div>

            {/* Compliance-Grade Audit Trail */}
            <div style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', background: 'rgba(255,255,255,0.01)', textAlign: 'left' }} className="pipeline-card">
              <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '1.2rem', fontWeight: 700 }}>Compliance Audit Trail</h4>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Immutable logging logs branch operator actions, dual-witness approvals, technician certifications, and vault supervisor clearances.
              </p>
            </div>

          </div>

          {/* Bottom Branch Support Tag */}
          <div data-aos="fade-up" style={{ marginTop: '4rem', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '0.5rem 1.5rem', borderRadius: '100px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <span>Includes complete multi-branch controls and corporate-level audit dashboards.</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
