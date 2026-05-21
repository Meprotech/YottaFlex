import FlowArt, { FlowSection } from './story-scroll.tsx';

export default function FlowArtDefaultDemo() {
  return (
    <FlowArt aria-label="YottaFlex Platform Flow">
      {/* SLIDE 01 — WHO WE ARE & THE PLATFORM */}
      <FlowSection aria-label="Who we are" style={{ backgroundColor: '#020c22', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d2ff]">01 — Who we are</p>
        <hr className="my-4 border-none border-t border-white/10" />
        <div>
          <h1
            className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.1] uppercase tracking-tight pl-[3vw] border-l-2 border-[#00d2ff]/30"
            style={{ fontFamily: 'var(--font-headings)' }}
          >
            Human-Led.
            <br />
            AI-Accelerated.
          </h1>
        </div>
        <hr className="my-4 border-none border-t border-white/10" />
        <p className="mt-auto max-w-[65ch] text-[clamp(0.85rem,1.2vw,1.15rem)] font-normal leading-relaxed text-slate-300">
          YottaFlex.ai is an elite enterprise software delivery partner. By pairing seasoned software architects with cutting-edge generative AI models, we deliver production-ready web apps, microservices, and databases in a fraction of standard timelines—guaranteeing compliance, zero bloat, and SOC 2 security.
        </p>
      </FlowSection>

      {/* SLIDE 02 — THE CORE PRODUCTS */}
      <FlowSection aria-label="Core Products" style={{ backgroundColor: '#000000', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d2ff]">02 — Core Products</p>
        <hr className="my-4 border-none border-t border-white/10" />
        <div>
          <h2
            className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.1] uppercase tracking-tight pl-[3vw] border-l-2 border-[#00d2ff]/30"
            style={{ fontFamily: 'var(--font-headings)' }}
          >
            YottaBuilder
            <br />
            &amp; SafeChief
          </h2>
        </div>
        <hr className="my-4 border-none border-t border-white/10" />
        <p className="max-w-[65ch] text-[clamp(0.85rem,1.2vw,1.15rem)] font-normal leading-relaxed text-slate-300">
          Our platform powers two revolutionary software suites tailored for rapid development and banking-grade security:
        </p>
        <hr className="my-4 border-none border-t border-white/10" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[200px] flex-1 flow-card">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#00d2ff]">YottaBuilder.ai</p>
            <p className="text-[clamp(0.8rem,1.1vw,1rem)] leading-relaxed text-slate-400">
              An AI-powered development pipeline that converts raw requirements, RFPs, and design specs into complete, buildable code repos with 100% trace lineage.
            </p>
          </div>
          <div className="min-w-[200px] flex-1 flow-card">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#00d2ff]">SafeChief.com</p>
            <p className="text-[clamp(0.8rem,1.1vw,1rem)] leading-relaxed text-slate-400">
              A specialized compliance and vault management engine for safe deposit boxes (SDB), incorporating state-by-state escheatment and full chain-of-custody tracking.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* SLIDE 03 — INDUSTRIES & SOLUTIONS */}
      <FlowSection aria-label="Industries" style={{ backgroundColor: '#071530', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d2ff]">03 — Targeted Industries</p>
        <hr className="my-4 border-none border-t border-white/10" />
        <div>
          <h2
            className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.1] uppercase tracking-tight pl-[3vw] border-l-2 border-[#00d2ff]/30"
            style={{ fontFamily: 'var(--font-headings)' }}
          >
            Sector Specific
            <br />
            AI Models
          </h2>
        </div>
        <hr className="my-4 border-none border-t border-white/10" />
        <p className="max-w-[65ch] text-[clamp(0.85rem,1.2vw,1.15rem)] font-normal leading-relaxed text-slate-300">
          We don't build generic solutions. YottaFlex configures AI agents populated with domain-specific taxonomies across 11 key industry sectors:
        </p>
        <hr className="my-4 border-none border-t border-white/10" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-400">
          <div className="flow-card">
            <p className="text-[clamp(0.8rem,1vw,0.95rem)] font-semibold text-[#00d2ff]">&gt; ENERGY &amp; UTILITIES</p>
            <p className="text-xs mt-1">Predictive analytics &amp; field ops.</p>
          </div>
          <div className="flow-card">
            <p className="text-[clamp(0.8rem,1vw,0.95rem)] font-semibold text-[#00d2ff]">&gt; BANKING &amp; FINANCE</p>
            <p className="text-xs mt-1">Automated compliance &amp; risk.</p>
          </div>
          <div className="flow-card">
            <p className="text-[clamp(0.8rem,1vw,0.95rem)] font-semibold text-[#00d2ff]">&gt; GOVERNMENT</p>
            <p className="text-xs mt-1">Secure, cloud-first systems.</p>
          </div>
          <div className="flow-card">
            <p className="text-[clamp(0.8rem,1vw,0.95rem)] font-semibold text-[#00d2ff]">&gt; HEALTHCARE</p>
            <p className="text-xs mt-1">HIPAA compliant pipelines.</p>
          </div>
        </div>
      </FlowSection>

      {/* SLIDE 04 — ENTERPRISE GOVERNANCE */}
      <FlowSection aria-label="Governance" style={{ backgroundColor: '#0b255e', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d2ff]">04 — Security &amp; QA</p>
        <hr className="my-4 border-none border-t border-white/10" />
        <div>
          <h2
            className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.1] uppercase tracking-tight pl-[3vw] border-l-2 border-[#00d2ff]/30"
            style={{ fontFamily: 'var(--font-headings)' }}
          >
            Zero Trust
            <br />
            Governance
          </h2>
        </div>
        <hr className="my-4 border-none border-t border-white/10" />
        <p className="max-w-[65ch] text-[clamp(0.85rem,1.2vw,1.15rem)] font-normal leading-relaxed text-slate-300">
          All generated code passes through strict quality check gates before being pushed to client repositories. We enforce native integrations with GitHub, GitLab, and Jira, backed by 24/7 post-deployment support and SOC 2 audits.
        </p>
        <hr className="my-4 border-none border-t border-white/10" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1 flow-card">
            <p className="mb-1 text-sm font-bold uppercase tracking-wider text-[#00d2ff]">100% Traceability</p>
            <p className="text-xs text-slate-400">Every functional block resolves to a backlog ticket.</p>
          </div>
          <div className="min-w-[180px] flex-1 flow-card">
            <p className="mb-1 text-sm font-bold uppercase tracking-wider text-[#00d2ff]">Expert Gates</p>
            <p className="text-xs text-slate-400">Senior architects audit every AI-proposed pull request.</p>
          </div>
          <div className="min-w-[180px] flex-1 flow-card">
            <p className="mb-1 text-sm font-bold uppercase tracking-wider text-[#00d2ff]">Modern Stack</p>
            <p className="text-xs text-slate-400">Engineered with React, Node, Python, and serverless architectures.</p>
          </div>
        </div>
      </FlowSection>

      {/* SLIDE 05 — GLOBAL REACH */}
      <FlowSection aria-label="Global Reach" style={{ backgroundColor: '#000000', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00d2ff]">05 — Global Presence</p>
        <hr className="my-4 border-none border-t border-white/10" />
        <div>
          <h2
            className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.1] uppercase tracking-tight pl-[3vw] border-l-2 border-[#00d2ff]/30"
            style={{ fontFamily: 'var(--font-headings)' }}
          >
            Global Offices.
            <br />
            Local Experts.
          </h2>
        </div>
        <hr className="my-4 border-none border-t border-white/10" />
        <p className="max-w-[65ch] text-[clamp(0.85rem,1.2vw,1.15rem)] font-normal leading-relaxed text-slate-300">
          Our distributed engineering network provides continuous coverage across multiple timezones:
        </p>
        <hr className="my-4 border-none border-t border-white/10" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-400">
          <div className="flow-card">
            <p className="font-semibold text-[#00d2ff]">USA OFFICE</p>
            <p className="mt-1">Glen Allen, VA</p>
          </div>
          <div className="flow-card">
            <p className="font-semibold text-[#00d2ff]">CANADA OFFICE</p>
            <p className="mt-1">Toronto, Ontario</p>
          </div>
          <div className="flow-card">
            <p className="font-semibold text-[#00d2ff]">COLOMBIA OFFICE</p>
            <p className="mt-1">Medellín, Antioquia</p>
          </div>
          <div className="flow-card">
            <p className="font-semibold text-[#00d2ff]">INDIA OFFICE</p>
            <p className="mt-1">Hyderabad, Telangana</p>
          </div>
        </div>
      </FlowSection>
    </FlowArt>
  );
}
