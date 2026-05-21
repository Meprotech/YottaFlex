import React, { useState, useEffect } from 'react';
import yottaImage from '../assets/image.webp';
import FlowArtDefaultDemo from './ui/demo.tsx';

interface YottaBuilderPageProps {
  onWaitlistClick: () => void;
}

export default function YottaBuilderPage({ onWaitlistClick }: YottaBuilderPageProps) {


  return (
    <div className="yottabuilder-product-page" style={{ color: 'var(--text-primary)' }}>
      
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
      <section id="pipeline-detail" className="pipeline-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }} data-aos="fade-up">
            <span className="accent-label" style={{ letterSpacing: '0.15em', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem', textShadow: 'none' }}>HOW IT WORKS</span>
            <h2 className="pipeline-title" data-aos="fade-up" data-aos-delay="100">
              Requirements to Production. <span>Delivered.</span>
            </h2>
            <p className="pipeline-subtitle" data-aos="fade-up" data-aos-delay="200">
              One pipeline. Three stages. People, process, and code aligned to every requirement.
            </p>
            
            <div className="pipeline-badge" data-aos="fade-up" data-aos-delay="300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              HOURS, NOT MONTHS
            </div>
          </div>

          {/* Connection line / indicators - Desktop only */}
          <div className="pipeline-desktop-only" style={{ position: 'relative', width: '100%', margin: '4rem auto 3rem auto', maxWidth: '1000px' }} data-aos="fade-up" data-aos-delay="350">
            {/* Horizontal connecting line */}
            <div className="pipeline-horizontal-line"></div>
            
            {/* Steps tracker */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', position: 'relative', zIndex: 2 }}>
              
              {/* Dot 1 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <span className="pipeline-tracker-text">Requirements</span>
                <div className="pipeline-dot"></div>
                <div className="pipeline-vertical-line"></div>
              </div>

              {/* Dot 2 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <span className="pipeline-tracker-text active">Yottabuilder</span>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Glowing active node */}
                  <div className="pipeline-dot-active"></div>
                  <div className="pipeline-dot-active-outer"></div>
                </div>
                <div className="pipeline-vertical-line"></div>
              </div>

              {/* Dot 3 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <span className="pipeline-tracker-text">Production</span>
                <div className="pipeline-dot"></div>
                <div className="pipeline-vertical-line"></div>
              </div>
              
            </div>
          </div>

          {/* Cards Grid */}
          <div className="pipeline-cards-container">
            
            {/* Step 1: Upload */}
            <div className="pipeline-card" data-aos="fade-up" data-aos-delay="400">
              {/* Highlight top border */}
              <div className="pipeline-card-top-border"></div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="pipeline-card-icon-container">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                </div>
                <h3 className="pipeline-card-title">Upload</h3>
              </div>
              
              <p className="pipeline-card-desc">
                Drop in meeting notes, RFPs, or architecture specs. Any format, any size - Yotta Builder unifies it all into one structured project context.
              </p>
              
              {/* Inner panel */}
              <div className="pipeline-inner-panel">
                {/* File 1 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="pipeline-inner-file-tag docx">DOCX</span>
                  <span className="pipeline-inner-file-text">client-meeting-notes.docx</span>
                </div>
                {/* File 2 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="pipeline-inner-file-tag pdf">PDF</span>
                  <span className="pipeline-inner-file-text">project-rfp-v3.pdf</span>
                </div>
                {/* File 3 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="pipeline-inner-file-tag md">MD</span>
                  <span className="pipeline-inner-file-text">architecture-decisions.md</span>
                </div>
              </div>
            </div>

            {/* Step 2: Build */}
            <div className="pipeline-card" data-aos="fade-up" data-aos-delay="500">
              {/* Highlight top border */}
              <div className="pipeline-card-top-border"></div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="pipeline-card-icon-container">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                <h3 className="pipeline-card-title">Build</h3>
              </div>
              
              <p className="pipeline-card-desc">
                AI generates epics, stories, tests, and code - each level inheriting full context. Humans approve at every gate.
              </p>
              
              {/* Inner panel */}
              <div className="pipeline-inner-panel">
                <div className="pipeline-inner-build-list">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="list-bullet">◆</span>
                    <span className="primary-item">Epics generated</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingLeft: '1.25rem' }}>
                    <span className="list-branch">└</span>
                    <span className="list-bullet">◆</span>
                    <span className="secondary-item">Stories created</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingLeft: '1.25rem' }}>
                    <span className="list-branch">└</span>
                    <span className="list-bullet">◆</span>
                    <span className="secondary-item">Tests written</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', paddingLeft: '1.25rem' }}>
                    <span className="list-branch">└</span>
                    <span className="list-bullet">◆</span>
                    <span className="secondary-item">Code generated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Ship */}
            <div className="pipeline-card" data-aos="fade-up" data-aos-delay="600">
              {/* Highlight top border */}
              <div className="pipeline-card-top-border"></div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="pipeline-card-icon-container">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </div>
                <h3 className="pipeline-card-title">Ship</h3>
              </div>
              
              <p className="pipeline-card-desc">
                Full repository pushed to GitHub. Deploy to AWS, Azure, or GCP through your existing CI/CD - no rewiring required.
              </p>
              
              {/* Inner panel */}
              <div className="pipeline-inner-panel">
                <div className="pipeline-inner-ship-panel">
                  <div className="add-line">+ src/components/</div>
                  <div className="add-line">+ src/services/</div>
                  <div className="add-line">+ tests/integration/</div>
                  <div className="add-line">+ infra/terraform/</div>
                  <div className="divider"></div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span className="commit-hash">a3f8c21</span>
                    <span className="commit-text">feat: initial deploy</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SIDE-BY-SIDE SIDEBAR SPOTLIGHT (COMPARISON) */}
      <section className="yotta-comparison-section">
        <div className="comparison-container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
            <span className="accent-label">THE IMPACT</span>
            <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0 1rem 0' }} data-aos="fade-up" data-aos-delay="100">Why YottaBuilder.ai?</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto' }} data-aos="fade-up" data-aos-delay="200">See how transitioning to the AI Development Lifecycle compares to traditional workflows.</p>
          </div>

          <div className="comparison-grid">
            {/* Without YottaBuilder */}
            <div className="yotta-compare-card-without" data-aos="fade-right" data-aos-delay="300">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div style={{ color: '#ef233c', background: 'rgba(239, 35, 60, 0.1)', padding: '0.4rem', borderRadius: '6px', display: 'flex' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>WITHOUT YottaBuilder</h4>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.85rem', paddingLeft: '0', listStyle: 'none' }}>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: '#ef233c', fontWeight: 'bold' }}>•</span>
                  Manual requirement logs prone to context gaps and translation errors.
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: '#ef233c', fontWeight: 'bold' }}>•</span>
                  Line-by-line coding requiring long feedback cycles and debugging intervals.
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: '#ef233c', fontWeight: 'bold' }}>•</span>
                  Manual test suites written after code development, risking missing key coverage.
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: '#ef233c', fontWeight: 'bold' }}>•</span>
                  Weeks or months of delivery time with significant integration overhead.
                </li>
              </ul>
            </div>

            {/* VS Rotating Badge */}
            <div className="comparison-vs-wrapper" data-aos="zoom-in" data-aos-delay="400">
              <div className="comparison-vs-circle">
                <svg className="vs-rotate-ring" viewBox="0 0 100 100" width="80" height="80">
                  <defs>
                    <linearGradient id="vs-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: 'var(--accent-cyan)'}} />
                      <stop offset="100%" style={{stopColor: 'var(--accent-purple)'}} />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="url(#vs-ring-grad)" strokeWidth="2" strokeDasharray="4 6" />
                </svg>
                <span className="vs-text">VS</span>
              </div>
            </div>

            {/* With YottaBuilder */}
            <div className="yotta-compare-card-with" data-aos="fade-left" data-aos-delay="500">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div style={{ color: 'var(--accent-cyan)', background: 'rgba(0, 210, 255, 0.1)', padding: '0.4rem', borderRadius: '6px', display: 'flex' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>WITH YottaBuilder.ai</h4>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.85rem', paddingLeft: '0', listStyle: 'none' }}>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>•</span>
                  Secure unified ingestion parsing files and structuring requirements in seconds.
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>•</span>
                  Full code generation in continuous loops validated against active specs.
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>•</span>
                  Test-first suite generation forming a continuous validation layer.
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
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
