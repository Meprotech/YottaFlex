import React, { useState, useEffect } from 'react';
import yottaImage from '../assets/image.webp';
import FlowArtDefaultDemo from './ui/demo.tsx';

interface YottaBuilderPageProps {
  onWaitlistClick: () => void;
}

export default function YottaBuilderPage({ onWaitlistClick }: YottaBuilderPageProps) {


  return (
    <div className="yottabuilder-product-page" style={{ color: 'var(--text-primary)', paddingBottom: '5rem' }}>
      
      {/* 1. HERO SECTION */}
      <section className="product-hero" style={{ paddingTop: '9rem', paddingBottom: '4rem', minHeight: '80vh', position: 'relative' }}>
        <div className="hero-split">
          
          {/* Left: YottaBuilder.ai Platform Preview Image */}
          <div className="hero-split-image" data-aos="zoom-in" data-aos-delay="300">
            <img src={yottaImage} alt="YottaBuilder.ai Interface" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
          </div>

          {/* Right: Text Content */}
          <div className="hero-split-content" style={{ zIndex: 2, textAlign: 'left' }}>
            <div className="hero-badge" data-aos="fade-down" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 210, 255, 0.1)', border: '1px solid rgba(0, 210, 255, 0.3)', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.85rem', color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontWeight: 600 }}>
              <span style={{ width: '8px', height: '8px', background: 'var(--accent-cyan)', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px var(--accent-cyan)' }}></span>
              FLAGSHIP CORE PLATFORM
            </div>

            <h1 className="hero-title" data-aos="fade-up" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1.5rem', background: 'linear-gradient(135deg, var(--text-primary) 40%, var(--accent-cyan) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              YottaBuilder.ai
            </h1>

            <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="100" style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 0 2.5rem 0', lineHeight: 1.6 }}>
              One Secure Platform. Technology Agnostic &amp; Compliant. Raw Requirements to Production Ready Code. Human-governance at every step. Delivery in days, not months.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', flexWrap: 'wrap' }} data-aos="fade-up" data-aos-delay="200">
              <button className="btn btn-gradient" onClick={() => window.open('https://yottabuilder.ai', '_blank')}>
                Visit Site
              </button>
              <button className="btn btn-outline" onClick={() => document.getElementById('pipeline-detail')?.scrollIntoView({ behavior: 'smooth' })}>
                Watch Workflow
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. HOW IT WORKS (PIPELINE DETAIL) */}
      <section id="pipeline-detail" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
            <span className="accent-label">WORKFLOW ENGINE</span>
            <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0 1rem 0' }} data-aos="fade-up" data-aos-delay="100">Requirements to Production. Delivered.</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto' }} data-aos="fade-up" data-aos-delay="200">One pipeline. Three stages. People, process, and code aligned to every requirement.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* Step 1 */}
            <div className="yotta-card" data-aos="fade-up" data-aos-delay="300">
              <div style={{ flex: '1 1 300px' }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1 }}>01</span>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0.5rem 0 1rem 0', color: 'var(--text-primary)' }}>Unify Ingestion</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Drop in meeting notes, RFPs, or architecture specs. Any format, any size — YottaBuilder.ai parses and structures all documentation into one unified project context.
                </p>
              </div>
              <div style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center' }}>
                <div className="yotta-subcard">
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>INPUT SPECS</div>
                  <div style={{ padding: '0.5rem', background: 'var(--card-hover-bg)', borderRadius: '4px', marginBottom: '0.5rem', fontSize: '0.85rem' }}>📄 meeting_notes_may_21.txt</div>
                  <div style={{ padding: '0.5rem', background: 'var(--card-hover-bg)', borderRadius: '4px', fontSize: '0.85rem' }}>📄 api_spec_draft.json</div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="yotta-card" data-aos="fade-up" data-aos-delay="400">
              <div style={{ flex: '1 1 300px', order: window.innerWidth > 768 ? 2 : 1 }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1 }}>02</span>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0.5rem 0 1rem 0', color: 'var(--text-primary)' }}>Context-Driven Generation</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  AI generates epics, stories, tests, and code — each level inheriting full system context. Development proceeds sequentially under human validation gates.
                </p>
              </div>
              <div style={{ flex: '1 1 350px', order: window.innerWidth > 768 ? 1 : 2, display: 'flex', justifyContent: 'center' }}>
                <div style={{ border: '1px solid rgba(123, 47, 255, 0.3)', padding: '1.5rem', borderRadius: '8px', background: 'rgba(123, 47, 255, 0.05)', width: '100%', maxWidth: '400px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                    <span>QA Review Status</span>
                    <span style={{ color: '#00ff88' }}>PASS</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: 'rgba(120, 120, 120, 0.15)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '100%', background: 'var(--accent-purple)' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="yotta-card" data-aos="fade-up" data-aos-delay="500">
              <div style={{ flex: '1 1 300px' }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1 }}>03</span>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0.5rem 0 1rem 0', color: 'var(--text-primary)' }}>GitHub &amp; CI/CD Push</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Full code repositories are compiled and pushed automatically to GitHub. Deploy to AWS, Azure, or GCP using your existing pipeline infrastructure with no code rewrites.
                </p>
              </div>
              <div style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center' }}>
                <div className="yotta-subcard">
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ width: '8px', height: '8px', background: '#00ff88', borderRadius: '50%' }}></span>
                    Deployed to Production
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Target: aws-us-east-1 // branch: main</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SIDE-BY-SIDE SIDEBAR SPOTLIGHT (COMPARISON) */}
      <section className="yotta-comparison-section">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
            <span className="accent-label">THE IMPACT</span>
            <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0 1rem 0' }} data-aos="fade-up" data-aos-delay="100">Why YottaBuilder.ai?</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto' }} data-aos="fade-up" data-aos-delay="200">See how transitioning to the AI Development Lifecycle compares to traditional workflows.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {/* Without YottaBuilder */}
            <div className="yotta-compare-card-without" data-aos="fade-right" data-aos-delay="300">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ color: '#ef233c', background: 'rgba(239, 35, 60, 0.1)', padding: '0.5rem', borderRadius: '8px', display: 'flex' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>WITHOUT YottaBuilder</h4>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem', paddingLeft: '0', listStyle: 'none' }}>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#ef233c', fontWeight: 'bold' }}>•</span>
                  Manual requirement logs prone to context gaps and translation errors.
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#ef233c', fontWeight: 'bold' }}>•</span>
                  Line-by-line coding requiring long feedback cycles and debugging intervals.
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#ef233c', fontWeight: 'bold' }}>•</span>
                  Manual test suites written after code development, risking missing key coverage.
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#ef233c', fontWeight: 'bold' }}>•</span>
                  Weeks or months of delivery time with significant integration overhead.
                </li>
              </ul>
            </div>

            {/* With YottaBuilder */}
            <div className="yotta-compare-card-with" data-aos="fade-left" data-aos-delay="300">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ color: 'var(--accent-cyan)', background: 'rgba(0, 210, 255, 0.1)', padding: '0.5rem', borderRadius: '8px', display: 'flex' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>WITH YottaBuilder.ai</h4>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem', paddingLeft: '0', listStyle: 'none' }}>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>•</span>
                  Secure unified ingestion parsing files and structuring requirements in seconds.
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>•</span>
                  Full code generation in continuous loops validated against active specs.
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>•</span>
                  Test-first suite generation forming a continuous validation layer.
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>•</span>
                  Delivery in days with instant repository pushes and human-governed approvals.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
