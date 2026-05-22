import React, { useState } from 'react';
import safeChiefImg from '../assets/safechief_dashboard.webp';

interface SafeChiefPageProps {
  onWaitlistClick: () => void;
}

export default function SafeChiefPage({ onWaitlistClick }: SafeChiefPageProps) {
  const [activeMainTab, setActiveMainTab] = useState<'force-open' | 'sdb-management'>('force-open');
  const [activeStep, setActiveStep] = useState(0);

  const lifecycleSteps = [
    {
      title: "Force Open",
      desc: "Initiate drill or non-drill access with photo documentation and witness records at every step.",
      detail: "Log dual-witness signatures, drill technician IDs, and upload high-resolution condition photos directly from tablet or mobile.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    },
    {
      title: "Check-In Contents",
      desc: "Catalog every item with tamper-evident imaging and barcode scanning into secure inventory.",
      detail: "Generate tamper-evident seals and trace-labeled envelopes. Scan barcodes to associate inventory directly with closed renters.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    },
    {
      title: "Ship/Audit Content",
      desc: "Transport unclaimed property with full chain-of-custody tracking from vault to storage.",
      detail: "Coordinate dual-custody transfers, generate manifest sheets, and verify package barcodes at both shipping and receiving facilities.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )
    },
    {
      title: "Checkout & Escheat",
      desc: "File state transfers, owner returns, or final disposition, all with a complete audit trail.",
      detail: "Process owner claims, track state escheatment windows, and print final reporting documentation in compliance formats.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )
    }
  ];

  const opsSteps = [
    {
      title: "Box Inventory",
      desc: "Maintain a centralized inventory of safe deposit boxes, availability status, and branch allocation across your entire network.",
      detail: "Track dimensions, rental rates, locking mechanisms, and maintain real-time status dashboards for all branches.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M21 9H3M21 15H3M12 3v18" />
        </svg>
      )
    },
    {
      title: "Allotment",
      desc: "Assign safe deposit boxes to customers, capture ID verification, set box sizes, and generate secure digital rental agreements.",
      detail: "Process renter onboarding, verify dual-signature authorization cards, and upload scanned identity documents to secure profiles.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="20" y1="8" x2="20" y2="14" />
          <line x1="23" y1="11" x2="17" y2="11" />
        </svg>
      )
    },
    {
      title: "Vault Access",
      desc: "Monitor and record all vault access activities with timestamped logs, biometric integration, and dual-control verification.",
      detail: "Require supervisor authorization, log key numbers, and automatically log check-in/check-out durations.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: "SDB Surrender",
      desc: "Process safe deposit box surrender requests with digital signature validation, outstanding dues clearance, and reconciliation.",
      detail: "Perform key return confirmation, verify box emptying, and process security deposit refunds or branch-level write-offs.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
          <path d="M14 3v5h5M16 13H8M16 17H8" />
        </svg>
      )
    }
  ];

  const lifecycleCards = [
    {
      title: "Escheatment Compliance",
      desc: "Built-in state-by-state regulatory workflows and deadline tracking.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: "Warehouse Management",
      desc: "Manage property across multiple storage locations from one platform.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      title: "Audit-Ready Reports",
      desc: "Every action logged and exportable for regulators on demand.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
          <path d="M12 18v-6M9 15h6" />
        </svg>
      )
    }
  ];

  const opsCards = [
    {
      title: "Renter Onboarding",
      desc: "Seamless digital agreements, photo ID capture, and signature capture. Reduce branch paperwork overhead.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <polyline points="17 11 19 13 23 9" />
        </svg>
      )
    },
    {
      title: "Billing & Renewals",
      desc: "Automate invoice scheduling, renewal reminders, past-due tracking, and branch-level ledger reconciliation.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      )
    },
    {
      title: "Compliance Audit Trail",
      desc: "Immutable logging logs branch operator actions, dual-witness approvals, technician certifications, and vault supervisor clearances.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    }
  ];

  const currentSteps = activeMainTab === 'force-open' ? lifecycleSteps : opsSteps;
  const currentCards = activeMainTab === 'force-open' ? lifecycleCards : opsCards;

  return (
    <div className="safechief-product-page" style={{ color: 'var(--text-primary)' }}>
      
      {/* 1. HERO SECTION */}
      <section className="product-hero" style={{ paddingTop: '9rem', paddingBottom: '4rem', minHeight: '80vh', position: 'relative', background: 'transparent' }}>
        <div className="hero-split">
          
          {/* Left: Text Content */}
          <div className="hero-split-content" style={{ zIndex: 2, textAlign: 'left' }}>
            <div className="hero-badge" data-aos="fade-down" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 210, 255, 0.1)', border: '1px solid rgba(0, 210, 255, 0.3)', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.85rem', color: '#ffffff', marginBottom: '1.5rem', fontWeight: 600 }}>
              <span style={{ width: '8px', height: '8px', background: 'var(--accent-cyan)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px var(--accent-cyan)' }}></span>
              VAULT &amp; COMPLIANCE SYSTEM
            </div>

            <h1 className="hero-title" data-aos="fade-up" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1.5rem', color: '#ffffff' }}>
              SafeChief
            </h1>

            <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="100" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', color: '#ffffff', maxWidth: '800px', margin: '0 0 2.5rem 0', lineHeight: 1.6 }}>
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
                objectFit: 'cover'
              }} 
            />
          </div>

        </div>
      </section>

      {/* 2 & 3. DYNAMIC LIFECYCLE & OPERATIONS FLOW */}
      <section className="safechief-interactive-workflow" style={{ padding: '6rem 2rem', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }} data-aos="fade-up">
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
              Everything Banks Need to Manage Safe Deposit Boxes &amp; Property
            </h2>
            <p style={{ color: 'var(--accent-green)', letterSpacing: '0.15em', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '2.5rem' }}>
              ONE PLATFORM TO MANAGE THE ENTIRE SAFE DEPOSIT BOX LIFECYCLE.
            </p>

            {/* Tabs / Toggle Pill */}
            <div className="workflow-toggle-container" style={{
              display: 'inline-flex',
              background: 'rgba(13, 15, 20, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '100px',
              padding: '6px',
              gap: '0.5rem',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)',
              marginBottom: '4rem'
            }}>
              {/* Force Open Tab */}
              <button 
                onClick={() => {
                  setActiveMainTab('force-open');
                  setActiveStep(0);
                }}
                className={`workflow-toggle-btn ${activeMainTab === 'force-open' ? 'active' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.8rem 1.6rem',
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.02em',
                  fontFamily: 'var(--font-headings)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  ...(activeMainTab === 'force-open' ? {
                    background: 'linear-gradient(135deg, #00d2ff, #00ff88)',
                    color: '#0d0f14',
                    boxShadow: '0 0 20px rgba(0, 210, 255, 0.4)',
                  } : {
                    background: 'transparent',
                    color: '#ffffff',
                    opacity: 0.7
                  })
                }}
              >
                {/* Wrench / Spanner Icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                Force Open
              </button>

              {/* SDB Management Tab */}
              <button 
                onClick={() => {
                  setActiveMainTab('sdb-management');
                  setActiveStep(0);
                }}
                className={`workflow-toggle-btn ${activeMainTab === 'sdb-management' ? 'active' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.8rem 1.6rem',
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.02em',
                  fontFamily: 'var(--font-headings)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  ...(activeMainTab === 'sdb-management' ? {
                    background: 'linear-gradient(135deg, #00d2ff, #00ff88)',
                    color: '#0d0f14',
                    boxShadow: '0 0 20px rgba(0, 210, 255, 0.4)',
                  } : {
                    background: 'transparent',
                    color: '#ffffff',
                    opacity: 0.7
                  })
                }}
              >
                {/* Lock Icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                SDB Management
              </button>
            </div>
          </div>

          {/* Horizontal Pipeline Steps */}
          <div className="pipeline-steps-wrapper" style={{ position: 'relative', marginBottom: '4rem' }}>
            
            {/* Background connecting lines (only visible on desktop) */}
            <div className="pipeline-line-connector" style={{
              position: 'absolute',
              top: '40px',
              left: '12.5%',
              right: '12.5%',
              height: '1px',
              background: 'rgba(255, 255, 255, 0.1)',
              zIndex: 1
            }}></div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2.5rem',
              position: 'relative',
              zIndex: 2
            }}>
              {currentSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div 
                    key={idx} 
                    onClick={() => setActiveStep(idx)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                  >
                    {/* Step circle container */}
                    <div 
                      className="step-circle"
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        border: isActive ? '2px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.2)',
                        background: isActive ? 'rgba(0, 210, 255, 0.15)' : 'var(--bg-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem',
                        boxShadow: isActive ? '0 0 25px rgba(0, 210, 255, 0.35)' : 'none',
                        color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {step.icon}
                    </div>

                    {/* Connecting arrow (only between items, on desktop) */}
                    {idx < 3 && (
                      <div className="step-arrow animate-pulse" style={{
                        position: 'absolute',
                        top: '28px',
                        right: '-1.5rem',
                        transform: 'translateX(50%)',
                        zIndex: 3,
                        color: 'rgba(255, 255, 255, 0.3)'
                      }}>
                        <svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    )}

                    {/* STEP 0X label */}
                    <div className="workflow-step-badge" style={{
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: '50px',
                      padding: '0.25rem 0.75rem',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      color: 'rgba(255, 255, 255, 0.5)',
                      marginBottom: '0.75rem',
                      textTransform: 'uppercase'
                    }}>
                      STEP 0{idx + 1}
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      marginBottom: '0.5rem',
                      color: 'var(--text-primary)'
                    }}>{step.title}</h3>

                    {/* Description */}
                    <p style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      maxWidth: '240px'
                    }}>{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Step detail panel */}
          <div style={{ marginBottom: '4rem' }} data-aos="fade-up">
            <div className="pipeline-inner-panel safechief-detail-panel" style={{
              background: 'rgba(15, 22, 36, 0.3)',
              border: '1px solid rgba(0, 210, 255, 0.15)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              borderRadius: '16px',
              padding: '2.5rem',
              textAlign: 'left'
            }}>
              <span className="detail-stage-prefix" style={{
                color: 'var(--accent-cyan)',
                fontFamily: 'monospace',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '0.75rem',
                display: 'block'
              }}>
                STAGE 0{activeStep + 1} OPERATIONS
              </span>
              <h4 className="detail-title" style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.75rem 0', color: 'var(--text-primary)' }}>
                {currentSteps[activeStep].title}
              </h4>
              <p className="detail-desc" style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {currentSteps[activeStep].desc}
              </p>
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <p className="detail-meta-text" style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {currentSteps[activeStep].detail}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Compliance & Features Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }} data-aos="fade-up">
            {currentCards.map((card, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(15, 22, 36, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  padding: '2rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  transition: 'all 0.3s ease'
                }}
                className="pipeline-card"
              >
                <div className="card-icon-wrapper" style={{
                  background: 'rgba(0, 210, 255, 0.05)',
                  border: '1px solid rgba(0, 210, 255, 0.1)',
                  borderRadius: '12px',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--accent-cyan)'
                }}>
                  {card.icon}
                </div>
                <div>
                  <h4 className="card-title" style={{
                    margin: '0 0 0.5rem 0',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)'
                  }}>{card.title}</h4>
                  <p className="card-desc" style={{
                    margin: 0,
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5
                  }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Branch Support Tag */}
          <div data-aos="fade-up" style={{ marginTop: '4rem', textAlign: 'center' }}>
            <div className="workflow-support-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '0.5rem 1.5rem', borderRadius: '100px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <span>Includes complete multi-branch controls and corporate-level audit dashboards.</span>
            </div>
          </div>

        </div>
      </section>


    </div>
  );
}
