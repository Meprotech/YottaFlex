import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logoImg from './assets/logo.webp';
import FlowArtDefaultDemo from './components/ui/demo.tsx';
import YottaBuilderPage from './components/YottaBuilderPage.tsx';
import SafeChiefPage from './components/SafeChiefPage.tsx';
import safeChiefHeroBg from './assets/SafeChief-Hero.png';

gsap.registerPlugin(ScrollTrigger);

const SECTORS = [
  {
    title: "ENERGY & INDUSTRIAL",
    month: "ENG",
    date: "01",
    desc: "Optimize operations, improve predictive maintenance, and enhance safety through AI-driven monitoring, analytics, and automation tailored for energy-intensive environments.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="glow-svg">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        <path d="M12 2l-4 4M12 22l4-4" />
      </svg>
    ),
    delay: 0
  },
  {
    title: "FINANCE",
    month: "FIN",
    date: "02",
    desc: "Empower smarter decision-making with AI solutions that enhance fraud detection, automate compliance, improve customer experiences, and strengthen data security.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="glow-svg">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    delay: 50
  },
  {
    title: "NON-PROFIT",
    month: "NPO",
    date: "03",
    desc: "Empower mission-driven organizations with AI-powered data analytics, seamless migrations, mobile and AR applications, and streamlined project management to amplify community impact.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="glow-svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    delay: 100
  },
  {
    title: "HEALTHCARE",
    month: "MED",
    date: "04",
    desc: "Improve patient outcomes and operational efficiency with AI-enabled systems for diagnostics, workflow automation, data security, and regulatory compliance.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="glow-svg">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    delay: 150
  },
  {
    title: "TELECOM",
    month: "TEL",
    date: "05",
    desc: "Accelerate network performance and customer engagement with AI-powered solutions for predictive maintenance, capacity planning, network testing, and intelligent service optimization.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="glow-svg">
        <path d="M12 2a10 10 0 0 1 10 10c0 2.5-.9 4.8-2.4 6.6M2.4 18.6A10 10 0 0 1 12 2" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path d="M12 8a4 4 0 0 1 4 4c0 1-.4 1.9-1.1 2.6M9.1 14.6A4 4 0 0 1 12 8" />
        <path d="M12 5a7 7 0 0 1 7 7c0 1.7-.6 3.3-1.6 4.5M6.6 16.5A7 7 0 0 1 12 5" />
      </svg>
    ),
    delay: 200
  },
  {
    title: "LEGAL",
    month: "LGL",
    date: "06",
    desc: "Streamline legal workflows and reduce turnaround times with AI-powered solutions for document analysis, contract drafting, compliance review, and intelligent case management.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="glow-svg">
        <path d="M16 16V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v12m8 0a4 4 0 1 1-8 0m8 0H8" />
        <path d="M3 21h18M6 10l3-3 3 3M15 10l3-3 3 3" />
      </svg>
    ),
    delay: 250
  },
  {
    title: "ACCOUNTING",
    month: "ACC",
    date: "07",
    desc: "Modernize accounting operations and unlock data-driven insights with AI-powered solutions for digital transformation, data migration, cloud infrastructure, and workplace automation.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="glow-svg">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 17V9M13 17V13M17 17V11M7 9h10" />
      </svg>
    ),
    delay: 300
  },
  {
    title: "RETAIL",
    month: "RTL",
    date: "08",
    desc: "Enhance customer engagement and streamline operations with AI-powered mobile applications, unified POS integration, and intelligent systems that connect businesses with their customers at scale.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="glow-svg">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
    delay: 350
  },
  {
    title: "REAL ESTATE",
    month: "EST",
    date: "09",
    desc: "Leverage AI to streamline property management, forecast market trends, automate valuations, and deliver data-backed insights for smarter investments.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="glow-svg">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    delay: 400
  },
  {
    title: "SALES & MARKETING",
    month: "MKT",
    date: "10",
    desc: "Deliver personalized customer experiences, optimize supply chains, and boost sales performance with AI-powered insights and automation.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="glow-svg">
        <path d="M12 20V4M5 17l7-7 7 7" />
      </svg>
    ),
    delay: 450
  },
  {
    title: "GOVERNMENT",
    month: "GOV",
    date: "11",
    desc: "Enable digital transformation through secure, scalable AI solutions that enhance citizen services, improve governance, and support data-driven policymaking.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="glow-svg">
        <path d="M4 22V10M20 22V10M12 22V10" />
        <path d="M2 10h20M2 6l10-4 10 4z" />
      </svg>
    ),
    delay: 500
  }
];

const GlassFilter = () => (
  <svg style={{ display: "none" }}>
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="200"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);

function App() {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  
  // Navigation scrolling and mobile menu states
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [activePage, setActivePage] = useState(() => {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('yotta-builder-ai') || path.includes('yottabuilder')) {
      return 'yottabuilder';
    }
    if (path.includes('safechief-2') || path.includes('safechief')) {
      return 'safechief';
    }
    return 'home';
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    let path = '/';
    if (activePage === 'yottabuilder') {
      path = '/yotta-builder-ai';
    } else if (activePage === 'safechief') {
      path = '/safechief-2';
    }
    if (window.location.pathname.toLowerCase() !== path) {
      window.history.pushState({ page: activePage }, '', path);
    }
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [activePage]);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.page) {
        setActivePage(event.state.page);
      } else {
        const path = window.location.pathname.toLowerCase();
        if (path.includes('yotta-builder-ai') || path.includes('yottabuilder')) {
          setActivePage('yottabuilder');
        } else if (path.includes('safechief-2') || path.includes('safechief')) {
          setActivePage('safechief');
        } else {
          setActivePage('home');
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToSection = (sectionId: string) => {
    setActivePage('home');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 80);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  // Typing cycle statements
  const [typingText, setTypingText] = useState('');
  
  // Waitlist form registration state
  const [email, setEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [priorityID, setPriorityID] = useState(7941);

  // SafeChief dashboard tabs state
  const [safeChiefTab, setSafeChiefTab] = useState('workflows');

  // 1. Initializations (AOS & Page Load State)
  useEffect(() => {
    document.body.classList.add('loaded');
    AOS.init({
      duration: 1000,
      easing: 'ease-out-quint',
      once: true,
      anchorPlacement: 'top-bottom'
    });
  }, []);

  // 2. Custom Glowing Mouse Pointer Tracking (using delegation for efficiency)
  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      if (cursorRef.current) cursorRef.current.style.display = 'none';
      document.body.style.cursor = 'auto';
      return;
    }
    
    document.body.style.cursor = 'none';

    let mouseX = -100, mouseY = -100;
    let cursorX = -100, cursorY = -100;
    let hasMoved = false;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      hasMoved = true;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animFrame;
    const animate = () => {
      if (hasMoved && cursorRef.current) {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        cursorX += dx * 0.15;
        cursorY += dy * 0.15;
        cursorRef.current.style.left = `${cursorX}px`;
        cursorRef.current.style.top = `${cursorY}px`;
      }
      animFrame = requestAnimationFrame(animate);
    };
    animate();

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target && target.closest('a, button, input, select, textarea, .interactive')) {
        cursorRef.current?.classList.add('hover');
      } else {
        cursorRef.current?.classList.remove('hover');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  // 3. Navigation Scroll State Listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 4. Typing Loop Effect
  useEffect(() => {
    const texts = [
      "AI-driven delivery.",
      "Engineered. Deployed. Supported.",
      "Built by AI. Governed by humans."
    ];
    let itemIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function type() {
      const currentText = texts[itemIndex];
      
      if (isDeleting) {
        setTypingText(currentText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypingText(currentText.substring(0, charIndex + 1));
        charIndex++;
      }
      
      let speed = isDeleting ? 40 : 80;
      
      if (!isDeleting && charIndex === currentText.length) {
        speed = 2500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        itemIndex = (itemIndex + 1) % texts.length;
        speed = 400;
      }
      
      timeoutId = setTimeout(type, speed);
    }
    
    type();
    return () => clearTimeout(timeoutId);
  }, []);

  // 5. Three.js Particle Network Background Setup
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const bounds = 50;
    const particleCount = window.innerWidth > 1000 ? 90 : 45;
    const positions = new Float32Array(particleCount * 3);
    const particlesData = [];

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * bounds;
      const y = (Math.random() - 0.5) * bounds;
      const z = (Math.random() - 0.5) * bounds;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      particlesData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05
        )
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00d2ff,
      size: 0.65,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(points);

    const maxDistance = 11;
    const maxConnections = 120;
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    const lineColors = new Float32Array(maxConnections * 2 * 3);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    const mouseCoords = { x: undefined, y: undefined };
    const handleMouseMove = (event) => {
      mouseCoords.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseCoords.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    const handleMouseLeave = () => {
      mouseCoords.x = undefined;
      mouseCoords.y = undefined;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    let animFrame;

    function animate() {
      animFrame = requestAnimationFrame(animate);

      const posAttr = points.geometry.attributes.position.array;
      const linePosAttr = lineSegments.geometry.attributes.position.array;
      const lineColorAttr = lineSegments.geometry.attributes.color.array;

      let lineIdx = 0;
      let colorIdx = 0;
      let connectionCount = 0;

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        posAttr[idx] += particlesData[i].velocity.x;
        posAttr[idx + 1] += particlesData[i].velocity.y;
        posAttr[idx + 2] += particlesData[i].velocity.z;

        const limit = bounds / 2;
        if (Math.abs(posAttr[idx]) > limit) {
          particlesData[i].velocity.x *= -1;
          posAttr[idx] = Math.sign(posAttr[idx]) * limit;
        }
        if (Math.abs(posAttr[idx + 1]) > limit) {
          particlesData[i].velocity.y *= -1;
          posAttr[idx + 1] = Math.sign(posAttr[idx + 1]) * limit;
        }
        if (Math.abs(posAttr[idx + 2]) > limit) {
          particlesData[i].velocity.z *= -1;
          posAttr[idx + 2] = Math.sign(posAttr[idx + 2]) * limit;
        }

        if (mouseCoords.x !== undefined && mouseCoords.y !== undefined) {
          const mx = mouseCoords.x * bounds * 0.5;
          const my = mouseCoords.y * bounds * 0.5;
          const dx = mx - posAttr[idx];
          const dy = my - posAttr[idx + 1];
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 15) {
            posAttr[idx] += dx * 0.008;
            posAttr[idx + 1] += dy * 0.008;
          }
        }

        for (let j = i + 1; j < particleCount; j++) {
          const jIdx = j * 3;
          const dx = posAttr[idx] - posAttr[jIdx];
          const dy = posAttr[idx + 1] - posAttr[jIdx + 1];
          const dz = posAttr[idx + 2] - posAttr[jIdx + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance && connectionCount < maxConnections) {
            linePosAttr[lineIdx++] = posAttr[idx];
            linePosAttr[lineIdx++] = posAttr[idx + 1];
            linePosAttr[lineIdx++] = posAttr[idx + 2];

            linePosAttr[lineIdx++] = posAttr[jIdx];
            linePosAttr[lineIdx++] = posAttr[jIdx + 1];
            linePosAttr[lineIdx++] = posAttr[jIdx + 2];

            const alpha = 1.0 - (dist / maxDistance);

            lineColorAttr[colorIdx++] = 0.0 * alpha;
            lineColorAttr[colorIdx++] = 0.82 * alpha;
            lineColorAttr[colorIdx++] = 1.0 * alpha;

            lineColorAttr[colorIdx++] = 0.0 * alpha;
            lineColorAttr[colorIdx++] = 0.82 * alpha;
            lineColorAttr[colorIdx++] = 1.0 * alpha;

            connectionCount++;
          }
        }
      }

      points.geometry.attributes.position.needsUpdate = true;
      lineSegments.geometry.attributes.position.needsUpdate = true;
      lineSegments.geometry.attributes.color.needsUpdate = true;

      lineSegments.geometry.setDrawRange(0, connectionCount * 2);

      points.rotation.y += 0.0006;
      lineSegments.rotation.y += 0.0006;

      renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // 6. GSAP Entrance and Spotlight Animations
  useEffect(() => {
    if (activePage !== 'home') return;

    let ctx = gsap.context(() => {
      // Hero Timeline
      const heroTl = gsap.timeline();
      
      heroTl.to(".hero-badge-wrapper", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, 0.2);
      
      heroTl.to(".hero-title .word", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out"
      }, 0.4);
      
      heroTl.to(".hero-subheading", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, 0.8);
      
      heroTl.to(".hero-card", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      }, 1.1);

      // Section Spotlight left panel
      gsap.from("#left-panel", {
        scrollTrigger: {
          trigger: "#spotlight-section",
          start: "top 75%",
          toggleActions: "play none none none"
        },
        x: -120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      // Section Spotlight right panel
      gsap.from("#right-panel", {
        scrollTrigger: {
          trigger: "#spotlight-section",
          start: "top 75%",
          toggleActions: "play none none none"
        },
        x: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      // Section Timeline connection line progress
      gsap.to("#clip-rect", {
        attr: { width: 1000 },
        ease: "none",
        scrollTrigger: {
          trigger: ".pipeline-container",
          start: "top 75%",
          end: "bottom 70%",
          scrub: 1.2
        }
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, [activePage]);

  // Form submit handler
  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (email) {
      const generatedID = Math.floor(1000 + Math.random() * 9000);
      setPriorityID(generatedID);
      setIsRegistered(true);
    }
  };

  return (
    <>
      {/* Liquid Glass Filter */}
      <GlassFilter />

      {/* Custom Mouse Cursor */}
      <div ref={cursorRef} className="custom-cursor"></div>

      {/* Global Background (Dark Blue Style) */}
      <div 
        className={`global-background ${activePage === 'safechief' ? 'safechief-bg' : ''}`}
        style={activePage === 'safechief' ? {
          background: `url(${safeChiefHeroBg}) no-repeat center center`,
          backgroundSize: 'cover',
          filter: 'blur(2px)',
          transform: 'scale(1.01)',
        } : {}}
      >
        <div style={{ display: activePage === 'safechief' ? 'none' : 'block' }}>
          <canvas ref={canvasRef} id="three-canvas"></canvas>
          <div className="stars-1"></div>
          <div className="stars-2"></div>
          <div className="blue-radial-glow"></div>
          <div className="bg-grid-overlay"></div>
        </div>
      </div>
      
      {/* Top Blur Header */}
      <div className="gradient-blur"></div>

      {/* SECTION 1 — NAVIGATION BAR */}
      <nav className={isScrolled ? 'liquid-glass-nav scrolled' : 'liquid-glass-nav'}>
        <a href="#" className="logo-container" onClick={(e) => { e.preventDefault(); setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src={logoImg} alt="YottaFlex Logo" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
          <span className="logo-text">YottaFlex</span>
        </a>
        
        <ul className="nav-links">
          {/* Platforms & Products Dropdown */}
          <li className="nav-item">
            <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('products-section'); }}>Products</a>
            <div className="dropdown-menu">
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('products-section'); }}>Platforms Overview</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('yottabuilder'); }}>YottaBuilder</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('safechief'); }}>SafeChief</a>
            </div>
          </li>
          
          {/* Solutions Dropdown */}
          <li className="nav-item">
            <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('solutions'); }}>Solutions</a>
            <div className="dropdown-menu">
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('solutions'); }}>Energy &amp; Industrial</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('solutions'); }}>Finance &amp; Banking</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('solutions'); }}>Non-Profit</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('solutions'); }}>Healthcare</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('solutions'); }}>Telecom</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('solutions'); }}>Legal</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('solutions'); }}>Accounting</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('solutions'); }}>Retail</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('solutions'); }}>Real Estate</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('solutions'); }}>Sales &amp; Marketing</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('solutions'); }}>Government</a>
            </div>
          </li>

          {/* Services Dropdown */}
          <li className="nav-item">
            <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('services-section'); }}>Services</a>
            <div className="dropdown-menu">
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('services-section'); }}>AI &amp; ML Engineering</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('services-section'); }}>Custom Software Development</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('services-section'); }}>Data Engineering</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('services-section'); }}>Cloud &amp; DevOps</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('services-section'); }}>Quality Analysis &amp; QA</a>
            </div>
          </li>

          <li className="nav-item"><a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('governance-section'); }}>Governance</a></li>
          <li className="nav-item"><a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('waitlist'); }}>Contact</a></li>
        </ul>

        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <label className="switch" title="Toggle Light/Dark Theme">
            <input 
              type="checkbox" 
              checked={theme === 'light'} 
              onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} 
            />
            <div className="slider">
              <span className="star star_1"></span>
              <span className="star star_2"></span>
              <span className="star star_3"></span>
              <svg className="cloud" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.36 10.04a6 6 0 0 0-11.33-1.6 5 5 0 0 0-3.66 4.9A5 5 0 0 0 9.37 18h9.3a4.34 4.34 0 0 0 4.33-4.34 4.3 4.3 0 0 0-3.64-3.62z"/>
              </svg>
            </div>
          </label>

          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <a href="#" className="mobile-link" onClick={(e) => { e.preventDefault(); setActivePage('home'); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
        
        <div className="mobile-nav-group">
          <span className="mobile-nav-group-title">Products</span>
          <a href="#" className="mobile-submenu-link" onClick={(e) => { e.preventDefault(); setActivePage('yottabuilder'); setIsMenuOpen(false); }}>YottaBuilder.ai</a>
          <a href="#" className="mobile-submenu-link" onClick={(e) => { e.preventDefault(); setActivePage('safechief'); setIsMenuOpen(false); }}>SafeChief</a>
        </div>

        <div className="mobile-nav-group">
          <span className="mobile-nav-group-title">Solutions</span>
          <a href="#" className="mobile-submenu-link" onClick={(e) => { e.preventDefault(); navigateToSection('solutions'); setIsMenuOpen(false); }}>Industry Solutions</a>
        </div>

        <div className="mobile-nav-group">
          <span className="mobile-nav-group-title">Services</span>
          <a href="#" className="mobile-submenu-link" onClick={(e) => { e.preventDefault(); navigateToSection('services-section'); setIsMenuOpen(false); }}>Engineering Hub</a>
        </div>

        <a href="#" className="mobile-link" onClick={(e) => { e.preventDefault(); navigateToSection('governance-section'); setIsMenuOpen(false); }}>Governance</a>
        <a href="#" className="mobile-link" onClick={(e) => { e.preventDefault(); navigateToSection('waitlist'); setIsMenuOpen(false); }}>Contact</a>
        <a href="#" className="btn btn-gradient mobile-link" style={{ marginTop: '1rem' }} onClick={(e) => { e.preventDefault(); navigateToSection('waitlist'); setIsMenuOpen(false); }}>Get Early Access</a>
        
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Theme</span>
          <label className="switch" title="Toggle Light/Dark Theme">
            <input 
              type="checkbox" 
              checked={theme === 'light'} 
              onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} 
            />
            <div className="slider">
              <span className="star star_1"></span>
              <span className="star star_2"></span>
              <span className="star star_3"></span>
              <svg className="cloud" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.36 10.04a6 6 0 0 0-11.33-1.6 5 5 0 0 0-3.66 4.9A5 5 0 0 0 9.37 18h9.3a4.34 4.34 0 0 0 4.33-4.34 4.3 4.3 0 0 0-3.64-3.62z"/>
              </svg>
            </div>
          </label>
        </div>
      </div>

      {activePage === 'home' ? (
        <>
      {/* SECTION 2 — HERO */}
      <section id="hero">
        <div className="hero-grid-overlay"></div>

        <div className="hero-content">
          <div className="hero-badge-wrapper">
            <div className="hero-badge">
              <span>HUMAN-LED. AI-ACCELERATED.</span>
            </div>
          </div>

          <h1 className="hero-title">
            <span className="word">Software </span>
            <span className="word">Engineering,</span>
            <br />
            <span className="word gradient-text">Finally </span>
            <span className="word gradient-text">Reinvented.</span>
          </h1>

          <p className="hero-subheading">
            <span className="word">Human-led. </span>
            <span className="word">AI-accelerated. </span>
            <span className="word">Months </span>
            <span className="word">of </span>
            <span className="word">development </span>
            <span className="word">delivered </span>
            <span className="word">in </span>
            <span className="word">weeks.</span>
          </p>

          <div className="hero-cards">
            {/* Card 1 */}
            <div className="hero-card">
              <div className="hero-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="url(#cube-bg)" opacity="0.15" />
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#cube-top)" />
                  <path d="M2 7V17L12 22L12 12L2 7Z" fill="url(#cube-left)" />
                  <path d="M12 12V22L22 17V7L12 12Z" fill="url(#cube-right)" />
                  <defs>
                    <linearGradient id="cube-bg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#00f5ff" />
                      <stop offset="100%" stopColor="#9d4edd" />
                    </linearGradient>
                    <linearGradient id="cube-top" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="cube-left" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#0077b6" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="cube-right" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#9d4edd" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#7b2cbf" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="hero-card-title">Battle - Tested Expertise</h3>
              <p className="hero-card-desc">
                A decade of Fortune 500 delivery. Your hardest problems? We've seen them before.
              </p>
              <a href="#services-section" className="hero-card-btn">
                Learn more <span className="arrow">&gt;</span>
              </a>
            </div>

            {/* Card 2 */}
            <div className="hero-card">
              <div className="hero-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="url(#cube-bg)" opacity="0.15" />
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#cube-top)" />
                  <path d="M2 7V17L12 22L12 12L2 7Z" fill="url(#cube-left)" />
                  <path d="M12 12V22L22 17V7L12 12Z" fill="url(#cube-right)" />
                </svg>
              </div>
              <h3 className="hero-card-title">AI That Actually Builds</h3>
              <p className="hero-card-desc">
                YottaBuilder.ai doesn't just assist. It accelerates every phase of development from day one.
              </p>
              <a href="#products-section" className="hero-card-btn">
                Visit Site <span className="arrow">&gt;</span>
              </a>
            </div>

            {/* Card 3 */}
            <div className="hero-card">
              <div className="hero-card-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="url(#cube-bg)" opacity="0.15" />
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#cube-top)" />
                  <path d="M2 7V17L12 22L12 12L2 7Z" fill="url(#cube-left)" />
                  <path d="M12 12V22L22 17V7L12 12Z" fill="url(#cube-right)" />
                </svg>
              </div>
              <h3 className="hero-card-title">Engineered. Deployed. Supported</h3>
              <p className="hero-card-desc">
                From strategy to post-production support, our engineers own every process, start to finish.
              </p>
              <a href="#services-section" className="hero-card-btn">
                Learn more <span className="arrow">&gt;</span>
              </a>
            </div>
          </div>

          <div className="typing-container" style={{ marginTop: '2.5rem' }}>
            <span>&gt; </span>
            <span>{typingText}</span>
            <span className="typing-cursor"></span>
          </div>
        </div>
      </section>

      <div className="separator-gradient"></div>

      {/* OPERATIONS SPOTLIGHT - YOTTABUILDER INTERACTIVE DASHBOARD */}
      <section className="dashboard-spotlight-section" style={{ padding: '5rem 2rem 2rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="accent-label">INTERACTIVE DASHBOARD</span>
          <h2 className="section-title">YottaBuilder.ai Engine</h2>
        </div>

        {/* Dashboard Container */}
        <div className="yottabuilder-dashboard" style={{ marginTop: '0px' }}>
          {/* Column 1: AI MODELS */}
          <div className="dashboard-col">
            <h4 className="dashboard-col-title">AI MODELS</h4>
            <div className="dashboard-cards-list">
              <div className="dash-card">
                <div className="dash-card-icon" style={{ color: '#e05e38' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"/>
                  </svg>
                </div>
                <span className="dash-card-name">Claude</span>
              </div>
              <div className="dash-card">
                <div className="dash-card-icon" style={{ color: 'var(--text-primary)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
                  </svg>
                </div>
                <span className="dash-card-name">GPT-4o</span>
              </div>
              <div className="dash-card">
                <div className="dash-card-icon" style={{ color: '#5fc2f5' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/>
                  </svg>
                </div>
                <span className="dash-card-name">Gemini</span>
              </div>
              <div className="dash-card">
                <div className="dash-card-icon" style={{ color: '#3b82f6' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"/>
                  </svg>
                </div>
                <span className="dash-card-name">Llama</span>
              </div>
              <div className="dash-card">
                <div className="dash-card-icon" style={{ color: '#00d2ff' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="6" cy="6" r="2" />
                    <circle cx="18" cy="6" r="2" />
                    <circle cx="18" cy="18" r="2" />
                    <circle cx="6" cy="18" r="2" />
                    <line x1="8.1" y1="8.1" x2="10.5" y2="10.5" />
                    <line x1="15.9" y1="8.1" x2="13.5" y2="10.5" />
                    <line x1="15.9" y1="15.9" x2="13.5" y2="13.5" />
                    <line x1="8.1" y1="15.9" x2="10.5" y2="13.5" />
                  </svg>
                </div>
                <span className="dash-card-name">Any LLM</span>
              </div>
            </div>
          </div>

          {/* Column 2: CLOUD */}
          <div className="dashboard-col">
            <h4 className="dashboard-col-title">CLOUD</h4>
            <div className="dashboard-cards-list">
              <div className="dash-card">
                <div className="dash-card-icon" style={{ color: '#ff9900' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/>
                  </svg>
                </div>
                <span className="dash-card-name">AWS</span>
              </div>
              <div className="dash-card">
                <div className="dash-card-icon">
                  <svg width="22" height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="azure-original-a" x1="60.919" y1="9.602" x2="18.667" y2="134.423" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#114A8B"/>
                        <stop offset="1" stopColor="#0669BC"/>
                      </linearGradient>
                      <linearGradient id="azure-original-b" x1="74.117" y1="67.772" x2="64.344" y2="71.076" gradientUnits="userSpaceOnUse">
                        <stop stopOpacity=".3"/>
                        <stop offset=".071" stopOpacity=".2"/>
                        <stop offset=".321" stopOpacity=".1"/>
                        <stop offset=".623" stopOpacity=".05"/>
                        <stop offset="1" stopOpacity="0"/>
                      </linearGradient>
                      <linearGradient id="azure-original-c" x1="68.742" y1="5.961" x2="115.122" y2="129.525" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3CCBF4"/>
                        <stop offset="1" stopColor="#2892DF"/>
                      </linearGradient>
                    </defs>
                    <path d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 01-6.146 4.413H6.733a6.482 6.482 0 01-5.262-2.699 6.474 6.474 0 01-.876-5.848L39.944 4.414A6.488 6.488 0 0146.09 0z" fill="url(#azure-original-a)" transform="translate(.587 4.468) scale(.91904)"/>
                    <path d="M97.28 81.607H37.987a2.743 2.743 0 00-1.874 4.751l38.1 35.562a5.991 5.991 0 004.087 1.61h33.574z" fill="#0078d4"/>
                    <path d="M46.09.002A6.434 6.434 0 0039.93 4.5L.644 120.897a6.469 6.469 0 006.106 8.653h32.48a6.942 6.942 0 005.328-4.531l7.834-23.089 27.985 26.101a6.618 6.618 0 004.165 1.519h36.396l-15.963-45.616-46.533.011L86.922.002z" fill="url(#azure-original-b)" transform="translate(.587 4.468) scale(.91904)"/>
                    <path d="M98.055 4.408A6.476 6.476 0 0091.917.002H46.575a6.478 6.478 0 016.137 4.406l39.35 116.594a6.476 6.476 0 01-6.137 8.55h45.344a6.48 6.48 0 006.136-8.55z" fill="url(#azure-original-c)" transform="translate(.587 4.468) scale(.91904)"/>
                  </svg>
                </div>
                <span className="dash-card-name">Azure</span>
              </div>
              <div className="dash-card">
                <div className="dash-card-icon">
                  <svg width="22" height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#ea4535" d="M80.6 40.3h.4l-.2-.2 14-14v-.3c-11.8-10.4-28.1-14-43.2-9.5C36.5 20.8 24.9 32.8 20.7 48c.2-.1.5-.2.8-.2 5.2-3.4 11.4-5.4 17.9-5.4 2.2 0 4.3.2 6.4.6.1-.1.2-.1.3-.1 9-9.9 24.2-11.1 34.6-2.6h-.1z"/>
                    <path fill="#557ebf" d="M108.1 47.8c-2.3-8.5-7.1-16.2-13.8-22.1L80 39.9c6 4.9 9.5 12.3 9.3 20v2.5c16.9 0 16.9 25.2 0 25.2H63.9v20h-.1l.1.2h25.4c14.6.1 27.5-9.3 31.8-23.1 4.3-13.8-1-28.8-13-36.9z"/>
                    <path fill="#36a852" d="M39 107.9h26.3V87.7H39c-1.9 0-3.7-.4-5.4-1.1l-15.2 14.6v.2c6 4.3 13.2 6.6 20.7 6.6z"/>
                    <path fill="#f9bc15" d="M40.2 41.9c-14.9.1-28.1 9.3-32.9 22.8-4.8 13.6 0 28.5 11.8 37.3l15.6-14.9c-8.6-3.7-10.6-14.5-4-20.8 6.6-6.4 17.8-4.4 21.7 3.8L68 55.2C61.4 46.9 51.1 42 40.2 42.1z"/>
                  </svg>
                </div>
                <span className="dash-card-name">Google Cloud</span>
              </div>
              <div className="dash-card">
                <div className="dash-card-icon" style={{ color: '#a0aec0' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="4" rx="1" fill="#334155" />
                    <circle cx="17" cy="6" r="0.75" fill="#10b981" />
                    <circle cx="19" cy="6" r="0.75" fill="#10b981" />
                    <rect x="2" y="10" width="20" height="4" rx="1" fill="#334155" />
                    <circle cx="17" cy="12" r="0.75" fill="#10b981" />
                    <circle cx="19" cy="12" r="0.75" fill="#10b981" />
                    <rect x="2" y="16" width="20" height="4" rx="1" fill="#334155" />
                    <circle cx="17" cy="18" r="0.75" fill="#10b981" />
                    <circle cx="19" cy="18" r="0.75" fill="#10b981" />
                  </svg>
                </div>
                <span className="dash-card-name">On-Premise</span>
              </div>
            </div>
          </div>

          {/* Column 3: 3D CAROUSEL */}
          <div className="dashboard-carousel-col yottabuilder-dashboard-carousel-col">
            <div className="solutions-carousel-wrapper">
              <div className="solutions-carousel-inner" style={{ '--quantity': 6 } as React.CSSProperties}>
                
                {/* CARD 1: YottaBuilder */}
                <div className="solutions-carousel-card" style={{ '--index': 0, '--color-card': '0, 210, 255' } as React.CSSProperties}>
                  <div className="solutions-carousel-content">
                    <div className="solutions-carousel-logo">
                      <svg width="28" height="28" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" />
                        <line x1="50" y1="5" x2="50" y2="50" />
                        <line x1="50" y1="50" x2="90" y2="72" />
                        <line x1="50" y1="50" x2="10" y2="72" />
                      </svg>
                    </div>
                    <span className="solutions-carousel-title">YottaBuilder</span>
                    <span className="solutions-carousel-sub">by Yottaflex.ai</span>
                  </div>
                </div>

                {/* CARD 2: SafeChief */}
                <div className="solutions-carousel-card" style={{ '--index': 1, '--color-card': '29, 78, 216' } as React.CSSProperties}>
                  <div className="solutions-carousel-content">
                    <div className="solutions-carousel-logo">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                    <span className="solutions-carousel-title">SafeChief</span>
                    <span className="solutions-carousel-sub">Compliance Vault</span>
                  </div>
                </div>

                {/* CARD 3: Trace Lineage */}
                <div className="solutions-carousel-card" style={{ '--index': 2, '--color-card': '168, 85, 247' } as React.CSSProperties}>
                  <div className="solutions-carousel-content">
                    <div className="solutions-carousel-logo">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                      </svg>
                    </div>
                    <span className="solutions-carousel-title">Traceability</span>
                    <span className="solutions-carousel-sub">Requirements to Code</span>
                  </div>
                </div>

                {/* CARD 4: Auto Audit */}
                <div className="solutions-carousel-card" style={{ '--index': 3, '--color-card': '16, 163, 127' } as React.CSSProperties}>
                  <div className="solutions-carousel-content">
                    <div className="solutions-carousel-logo">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </div>
                    <span className="solutions-carousel-title">Auto Audit</span>
                    <span className="solutions-carousel-sub">SOC 2 Compliant</span>
                  </div>
                </div>

                {/* CARD 5: CI/CD Push */}
                <div className="solutions-carousel-card" style={{ '--index': 4, '--color-card': '255, 110, 64' } as React.CSSProperties}>
                  <div className="solutions-carousel-content">
                    <div className="solutions-carousel-logo">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <span className="solutions-carousel-title">CI/CD Deploy</span>
                    <span className="solutions-carousel-sub">Instant GitHub Push</span>
                  </div>
                </div>

                {/* CARD 6: Human review */}
                <div className="solutions-carousel-card" style={{ '--index': 5, '--color-card': '255, 180, 140' } as React.CSSProperties}>
                  <div className="solutions-carousel-content">
                    <div className="solutions-carousel-logo">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <span className="solutions-carousel-title">Human QA</span>
                    <span className="solutions-carousel-sub">Expert Review Gates</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Column 4: GOVERNANCE */}
          <div className="dashboard-col">
            <h4 className="dashboard-col-title">GOVERNANCE</h4>
            <div className="dashboard-cards-list">
              <div className="dash-card">
                <div className="dash-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" fill="white" stroke="#0077c5" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="8" fill="none" stroke="#0077c5" strokeWidth="0.5" strokeDasharray="1.5 1" />
                    <text x="12" y="10.5" fontSize="4.5" fontWeight="bold" fill="#0077c5" textAnchor="middle" fontFamily="sans-serif">AICPA</text>
                    <text x="12" y="15.5" fontSize="5" fontWeight="900" fill="#000000" textAnchor="middle" fontFamily="sans-serif">SOC 2</text>
                  </svg>
                </div>
                <span className="dash-card-name">SOC 2 Ready</span>
              </div>
              <div className="dash-card">
                <div className="dash-card-icon" style={{ color: '#475569' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span className="dash-card-name">RBAC &amp; SSO</span>
              </div>
              <div className="dash-card">
                <div className="dash-card-icon" style={{ color: 'var(--accent-cyan)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="9" y1="9" x2="15" y2="9" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                    <line x1="9" y1="17" x2="13" y2="17" />
                  </svg>
                </div>
                <span className="dash-card-name">Audit Logs</span>
              </div>
              <div className="dash-card">
                <div className="dash-card-icon" style={{ color: 'var(--accent-cyan)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <span className="dash-card-name">Approval </span>
              </div>
              <div className="dash-card">
                <div className="dash-card-icon" style={{ color: 'var(--accent-cyan)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                </div>
                <span className="dash-card-name">Traceability</span>
              </div>
            </div>
          </div>

          {/* Column 5: DEV TOOLS */}
          <div className="dashboard-col">
            <h4 className="dashboard-col-title">DEV TOOLS</h4>
            <div className="dashboard-cards-list">
              <div className="dash-card">
                <div className="dash-card-icon" style={{ color: 'var(--text-primary)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </div>
                <span className="dash-card-name">GitHub</span>
              </div>
              <div className="dash-card">
                <div className="dash-card-icon">
                  <svg width="22" height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="jira-original-a" gradientUnits="userSpaceOnUse" x1="22.034" y1="9.773" x2="17.118" y2="14.842" gradientTransform="scale(4)">
                        <stop offset=".176" stopColor="#0052cc"/>
                        <stop offset="1" stopColor="#2684ff"/>
                      </linearGradient>
                      <linearGradient id="jira-original-b" gradientUnits="userSpaceOnUse" x1="16.641" y1="15.564" x2="10.957" y2="21.094" gradientTransform="scale(4)">
                        <stop offset=".176" stopColor="#0052cc"/>
                        <stop offset="1" stopColor="#2684ff"/>
                      </linearGradient>
                    </defs>
                    <path d="M108.023 16H61.805c0 11.52 9.324 20.848 20.847 20.848h8.5v8.226c0 11.52 9.328 20.848 20.848 20.848V19.977A3.98 3.98 0 00108.023 16zm0 0" fill="#2684ff"/>
                    <path d="M85.121 39.04H38.902c0 11.519 9.325 20.847 20.844 20.847h8.504v8.226c0 11.52 9.328 20.848 20.848 20.848V43.016a3.983 3.983 0 00-3.977-3.977zm0 0" fill="url(#jira-original-a)"/>
                    <path d="M62.219 62.078H16c0 11.524 9.324 20.848 20.848 20.848h8.5v8.23c0 11.52 9.328 20.844 20.847 20.844V66.059a3.984 3.984 0 00-3.976-3.98zm0 0" fill="url(#jira-original-b)"/>
                  </svg>
                </div>
                <span className="dash-card-name">Jira / Linear</span>
              </div>
              <div className="dash-card">
                <div className="dash-card-icon">
                  <svg width="22" height="22" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.255 80.719c0 7.33-5.978 13.317-13.309 13.317C6.616 94.036.63 88.049.63 80.719s5.987-13.317 13.317-13.317h13.309zm6.709 0c0-7.33 5.987-13.317 13.317-13.317s13.317 5.986 13.317 13.317v33.335c0 7.33-5.986 13.317-13.317 13.317-7.33 0-13.317-5.987-13.317-13.317zm0 0" fill="#de1c59"/>
                    <path d="M47.281 27.255c-7.33 0-13.317-5.978-13.317-13.309C33.964 6.616 39.951.63 47.281.63s13.317 5.987 13.317 13.317v13.309zm0 6.709c7.33 0 13.317 5.987 13.317 13.317s-5.986 13.317-13.317 13.317H13.946C6.616 60.598.63 54.612.63 47.281c0-7.33 5.987-13.317 13.317-13.317zm0 0" fill="#35c5f0"/>
                    <path d="M100.745 47.281c0-7.33 5.978-13.317 13.309-13.317 7.33 0 13.317 5.987 13.317 13.317s-5.987 13.317-13.317 13.317h-13.309zm-6.709 0c0 7.33-5.987 13.317-13.317 13.317s-13.317-5.986-13.317-13.317V13.946C67.402 6.616 73.388.63 80.719.63c7.33 0 13.317 5.987 13.317 13.317zm0 0" fill="#2eb57d"/>
                    <path d="M80.719 100.745c7.33 0 13.317 5.978 13.317 13.309 0 7.33-5.987 13.317-13.317 13.317s-13.317-5.987-13.317-13.317v-13.309zm0-6.709c-7.33 0-13.317-5.987-13.317-13.317s5.986-13.317 13.317-13.317h33.335c7.33 0 13.317 5.986 13.317 13.317 0 7.33-5.987 13.317-13.317 13.317zm0 0" fill="#ebb02e"/>
                  </svg>
                </div>
                <span className="dash-card-name">Slack</span>
              </div>
              <div className="dash-card">
                <div className="dash-card-icon" style={{ color: '#475569' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="6" r="3" />
                    <circle cx="18" cy="18" r="3" />
                    <path d="M9 12h3c2 0 3-6 6-6" />
                    <path d="M9 12h3c2 0 3 6 6 6" />
                  </svg>
                </div>
                <span className="dash-card-name">CI/CD</span>
              </div>
              <div className="dash-card">
                <div className="dash-card-icon" style={{ color: 'var(--accent-cyan)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <span className="dash-card-name">Toolchain</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="separator-gradient"></div>

      {/* FLAGSHIP PLATFORMS & PRODUCTS SHOWCASE */}
      <section id="products-section">
        <div className="section-header">
          <span className="accent-label">FLAGSHIP PLATFORMS</span>
          <h2 className="section-title">State-of-the-Art Operations &amp; Code Generation</h2>
        </div>
        <div className="platforms-container">
          {/* YOTTABUILDER.AI ROW */}
          <div className="product-row" data-aos="fade-up">
            <div className="product-meta">
              <span className="accent-label" style={{ color: 'var(--accent-cyan)' }}>PRODUCT 01</span>
              <h3 className="product-name">YottaBuilder.ai</h3>
              <p className="product-summary">
                YottaBuilder.ai doesn't just assist. It accelerates every phase of development from day one.
                One secure platform. Technology agnostic &amp; compliant. Raw requirements to production-ready code. Human-governance at every step. Delivery in days, not months.
              </p>
              <div style={{ marginTop: '1rem' }}>
                <a href="https://yottabuilder.ai/" target="_blank" rel="noopener noreferrer" className="btn btn-gradient">
                  Visit Site
                </a>
              </div>
            </div>
            
            {/* Visual representation card */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', padding: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,245,255,0.1)', paddingBottom: '1rem' }}>
                <span style={{ fontFamily: 'monospace', color: 'var(--accent-cyan)' }}>yottabuilder_daemon // active</span>
                <span style={{ width: '10px', height: '10px', background: 'var(--accent-green)', borderRadius: '50%', boxShadow: '0 0 8px var(--accent-green)' }}></span>
              </div>
              <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                $ parse --input raw_requirements.txt <br />
                <span style={{ color: 'var(--accent-purple)' }}>&gt;&gt; Ingesting specifications... OK</span><br />
                $ compile --target repository --governed-by expert-agent <br />
                <span style={{ color: 'var(--accent-cyan)' }}>&gt;&gt; Building files structure: stories, tests, code...</span><br />
                <span style={{ color: 'var(--accent-green)' }}>&gt;&gt; Status: 100% trace complete. Deployed to GitHub.</span>
              </p>
            </div>
          </div>

          {/* SAFECHIEF.COM ROW */}
          <div className="product-row" data-aos="fade-up" style={{ marginTop: '2rem' }}>
            {/* Interactive SDB Dashboard Tabs */}
            <div className="product-dashboard">
              <div className="dashboard-tabs">
                <button 
                  className={`tab-btn ${safeChiefTab === 'workflows' ? 'active' : ''}`}
                  onClick={() => setSafeChiefTab('workflows')}
                >
                  Workflows
                </button>
                <button 
                  className={`tab-btn ${safeChiefTab === 'inventory' ? 'active' : ''}`}
                  onClick={() => setSafeChiefTab('inventory')}
                >
                  SDB Inventory
                </button>
                <button 
                  className={`tab-btn ${safeChiefTab === 'compliance' ? 'active' : ''}`}
                  onClick={() => setSafeChiefTab('compliance')}
                >
                  Compliance &amp; Admin
                </button>
              </div>

              <div className="dashboard-content">
                {safeChiefTab === 'workflows' && (
                  <>
                    <div className="dashboard-card">
                      <h4>Force Open</h4>
                      <p>Initiate drill or non-drill access with photo documentation and witness records at every step.</p>
                    </div>
                    <div className="dashboard-card">
                      <h4>Check-In Contents</h4>
                      <p>Catalog every item with tamper-evident imaging and barcode scanning into secure inventory.</p>
                    </div>
                    <div className="dashboard-card">
                      <h4>Ship/Audit Content</h4>
                      <p>Transport unclaimed property with full chain-of-custody tracking from vault to storage.</p>
                    </div>
                    <div className="dashboard-card">
                      <h4>Checkout &amp; Escheat</h4>
                      <p>File state transfers, owner returns, or final disposition, all with a complete audit trail.</p>
                    </div>
                  </>
                )}

                {safeChiefTab === 'inventory' && (
                  <>
                    <div className="dashboard-card">
                      <h4>Box Inventory</h4>
                      <p>Maintain a centralized inventory of safe deposit boxes, availability status, branch allocation.</p>
                    </div>
                    <div className="dashboard-card">
                      <h4>Allotment</h4>
                      <p>Assign safe deposit boxes to customers, set box sizes, and generate secure digital rental agreements.</p>
                    </div>
                    <div className="dashboard-card">
                      <h4>Vault Access</h4>
                      <p>Monitor and record all vault access activities with timestamped logs, dual-control verification.</p>
                    </div>
                    <div className="dashboard-card">
                      <h4>SDB Surrender</h4>
                      <p>Process safe deposit box surrender requests with closure validation, dues clearance, and final reconciliation.</p>
                    </div>
                  </>
                )}

                {safeChiefTab === 'compliance' && (
                  <>
                    <div className="dashboard-card">
                      <h4>Escheatment Compliance</h4>
                      <p>Built-in state-by-state regulatory workflows and deadline tracking.</p>
                    </div>
                    <div className="dashboard-card">
                      <h4>Warehouse Management</h4>
                      <p>Manage property across multiple storage locations from one platform.</p>
                    </div>
                    <div className="dashboard-card">
                      <h4>Audit-Ready Reports</h4>
                      <p>Every action logged and exportable for regulators on demand.</p>
                    </div>
                    <div className="dashboard-card">
                      <h4>Renter Onboarding</h4>
                      <p>Digital agreements and ID capture. No paperwork required.</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="product-meta">
              <span className="accent-label" style={{ color: 'var(--accent-purple)' }}>PRODUCT 02</span>
              <h3 className="product-name">SafeChief.com</h3>
              <p className="product-summary">
                SafeChief is the ultimate Safe Deposit Box (SDB) vault management, tracking, and escheatment compliance engine. 
                Keep a compliance-grade audit trail, streamline renter onboarding, and manage safe deposit box workflows under unified regulatory standards.
              </p>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('safechief'); }} className="btn btn-gradient">
                  Visit Site
                </a>
                <a href="#waitlist" className="btn btn-outline">
                  Request SafeChief Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="separator-gradient"></div>

      {/* NEW SECTION — ENGINEERING SERVICES */}
      <section id="services-section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="section-header">
          <span className="accent-label" style={{ color: 'var(--accent-purple)' }}>OUR SERVICES</span>
          <h2 className="section-title">End-to-End Enterprise Engineering</h2>
        </div>

        <div className="solutions-grid">
          {/* 1. AI & ML ENGINEERING */}
          <div className="tech-card-wrapper purple-theme" data-aos="fade-up">
            <div className="tech-card">
              <div className="tech-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="glow-svg">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                  <polyline points="7.5 19.79 7.5 14.6 12 12 16.5 14.6 16.5 19.79" />
                  <polyline points="12 22 12 12" />
                </svg>
              </div>
              <h3 className="tech-card-title">AI and ML Engineering</h3>
              <p className="tech-card-desc">
                State-of-the-art model training, fine-tuning, and deployment. We build specialized, agentic ML systems tailored for domain-specific automation.
              </p>
            </div>
          </div>

          {/* 2. CUSTOM SOFTWARE DEVELOPMENT */}
          <div className="tech-card-wrapper purple-theme" data-aos="fade-up" data-aos-delay="100">
            <div className="tech-card">
              <div className="tech-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="glow-svg">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="tech-card-title">Custom Software Development</h3>
              <p className="tech-card-desc">
                Full-stack development of secure, scalable, and audit-ready web and mobile applications engineered to integrate with existing legacy databases.
              </p>
            </div>
          </div>

          {/* 3. DATA ENGINEERING */}
          <div className="tech-card-wrapper purple-theme" data-aos="fade-up" data-aos-delay="200">
            <div className="tech-card">
              <div className="tech-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="glow-svg">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                </svg>
              </div>
              <h3 className="tech-card-title">Data Engineering</h3>
              <p className="tech-card-desc">
                High-throughput pipeline automation, clean data lakehouse deployments, and unified database modeling for real-time analytics.
              </p>
            </div>
          </div>

          {/* 4. CLOUD & DEVOPS */}
          <div className="tech-card-wrapper purple-theme" data-aos="fade-up" data-aos-delay="300">
            <div className="tech-card">
              <div className="tech-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="glow-svg">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>
              <h3 className="tech-card-title">Cloud &amp; DevOps</h3>
              <p className="tech-card-desc">
                Continuous integration and delivery configurations, Kubernetes clustering, container orchestration, and zero-downtime microservice staging.
              </p>
            </div>
          </div>

          {/* 5. QUALITY ANALYSIS & POST SUPPORT */}
          <div className="tech-card-wrapper purple-theme" data-aos="fade-up" data-aos-delay="400">
            <div className="tech-card">
              <div className="tech-card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="glow-svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 11 11 13 15 9" />
                </svg>
              </div>
              <h3 className="tech-card-title">QA, Maintenance &amp; Support</h3>
              <p className="tech-card-desc">
                Rigorous penetration and regression testing, continuous performance audits, and round-the-clock developer maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="separator-gradient"></div>

      {/* SECTION 4 — YOTTABUILDER FEATURE SPOTLIGHT */}
      <section id="spotlight-section">
        <div className="spotlight-content">
          <div className="spotlight-header">
            <span className="accent-label">FEATURE SPOTLIGHT</span>
            <h2 className="section-title">
              YottaBuilder.ai doesn't just assist. It accelerates every phase of development from day one.
            </h2>
          </div>

          <div className="spotlight-grid">
            {/* Left Panel: WITHOUT YOTTABUILDER */}
            <div className="comparison-panel red-tint" id="left-panel">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="terminal-title">traditional_dev_vulnerability.sh</span>
                <span className="terminal-status error">WARN</span>
              </div>
              <h3 className="panel-title red-glow-text">
                WITHOUT YOTTABUILDER
              </h3>
              <ul className="panel-list">
                <li className="panel-list-item">
                  <span className="terminal-log-prefix error">[FAIL]</span>
                  <span className="terminal-log-text">Disconnected AI tools with no shared context.</span>
                </li>
                <li className="panel-list-item">
                  <span className="terminal-log-prefix error">[FAIL]</span>
                  <span className="terminal-log-text">No single source of truth anywhere.</span>
                </li>
                <li className="panel-list-item">
                  <span className="terminal-log-prefix error">[FAIL]</span>
                  <span className="terminal-log-text">Switching AI costs months of rework.</span>
                </li>
                <li className="panel-list-item">
                  <span className="terminal-log-prefix error">[FAIL]</span>
                  <span className="terminal-log-text">Zero visibility into what was generated.</span>
                </li>
                <li className="panel-list-item">
                  <span className="terminal-log-prefix error">[FAIL]</span>
                  <span className="terminal-log-text">Code snippets with no traceability.</span>
                </li>
                <li className="panel-list-item">
                  <span className="terminal-log-prefix error">[FAIL]</span>
                  <span className="terminal-log-text">AI errors cascade downstream.</span>
                </li>
                <li className="panel-list-item">
                  <span className="terminal-log-prefix error">[FAIL]</span>
                  <span className="terminal-log-text">Isolated fragments that don't form a buildable repository.</span>
                </li>
                <li className="panel-list-item">
                  <span className="terminal-log-prefix error">[FAIL]</span>
                  <span className="terminal-log-text">A pile of disconnected AI outputs someone has to manually stitch together.</span>
                </li>
              </ul>
            </div>

            {/* Right Panel: WITH YOTTABUILDER */}
            <div className="comparison-panel green-tint" id="right-panel">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="terminal-title">yottabuilder_orchestration_daemon.sh</span>
                <span className="terminal-status success">PASS</span>
              </div>
              <h3 className="panel-title green-glow-text">
                WITH YOTTABUILDER
              </h3>
              <ul className="panel-list">
                <li className="panel-list-item">
                  <span className="terminal-log-prefix success">[OK]</span>
                  <span className="terminal-log-text">Requirements flow through a structured pipeline, from raw input to validated context.</span>
                </li>
                <li className="panel-list-item">
                  <span className="terminal-log-prefix success">[OK]</span>
                  <span className="terminal-log-text">Swap Claude, GPT-4, or Llama anytime. Complete compliance trail built in.</span>
                </li>
                <li className="panel-list-item">
                  <span className="terminal-log-prefix success">[OK]</span>
                  <span className="terminal-log-text">AI generates code with full lineage. Every function is traceable to a backlog item.</span>
                </li>
                <li className="panel-list-item">
                  <span className="terminal-log-prefix success">[OK]</span>
                  <span className="terminal-log-text">Built-in decision points where humans review and approve before AI proceeds.</span>
                </li>
                <li className="panel-list-item">
                  <span className="terminal-log-prefix success">[OK]</span>
                  <span className="terminal-log-text">Outputs a complete, buildable codebase with proper file structure for GitHub.</span>
                </li>
                <li className="panel-list-item">
                  <span className="terminal-log-prefix success">[OK]</span>
                  <span className="terminal-log-text">A complete, auditable, deployable codebase. Built by AI, governed by humans, traceable end to end.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="spotlight-cta">
            <a href="https://yottabuilder.ai/" target="_blank" rel="noopener noreferrer" className="continue-application">
              Learn More About YottaBuilder
              <div>
                <div className="folder">
                  <div className="top">
                    <svg viewBox="0 0 24 27">
                      <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.18233978 C24,8.77566747 23.473795,9.24838877 22.8832033,9.20459369 L22.4042857,9.16911765 C21.0556287,9.06921703 19.7042537,9.13627993 18.354,9.37 L17.4320435,9.52926715 C15.2984168,9.89775376 13.118946,10.0212007 10.945,9.89775376 L10.518,9.87320588 C9.46162601,9.81302514 8.40251258,9.85507387 7.35,10 L1,10 C0.44771525,10 6.76353751e-17,9.55228475 0,9 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                    </svg>
                  </div>
                  <div className="paper"></div>
                </div>
                <div className="pencil"></div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <div className="separator-gradient"></div>

      {/* SECTION 5 — HOW IT WORKS (3-STEP PIPELINE) */}
      <section id="pipeline-section">
        <div className="section-header">
          <span className="accent-label">THE PIPELINE</span>
          <h2 className="section-title">One pipeline. Three stages. Every line of code traces back to the requirement that created it.</h2>
        </div>

        <div className="pipeline-container">
          <svg className="pipeline-svg" viewBox="0 0 1000 60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--accent-cyan)" />
                <stop offset="100%" stopColor="var(--accent-purple)" />
              </linearGradient>
              <clipPath id="line-clip">
                <rect id="clip-rect" x="0" y="0" width="0" height="60" />
              </clipPath>
            </defs>
            <path d="M 50,30 L 950,30" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="4" />
            <path id="pipeline-path" d="M 50,30 L 950,30" fill="none" stroke="url(#line-gradient)" strokeWidth="4" strokeDasharray="12, 12" clipPath="url(#line-clip)" />
          </svg>

          <div className="pipeline-steps">
            {/* STEP 01 */}
            <div className="pipeline-step-wrapper">
              <div className="pipeline-step-card glass-card step-1">
                <div className="step-header">
                  <div className="step-icon-wrapper">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="step-icon">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                    </svg>
                  </div>
                  <span className="step-number">01</span>
                </div>
                <h3 className="step-title">STEP 01 — INGEST</h3>
                <p>
                  Drop in meeting notes, RFPs, or architecture specs. Any format, any size. YottaBuilder unifies it into one structured project context.
                </p>
              </div>
            </div>

            {/* STEP 02 */}
            <div className="pipeline-step-wrapper">
              <div className="pipeline-step-card glass-card step-2">
                <div className="step-header">
                  <div className="step-icon-wrapper">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="step-icon">
                      <circle cx="12" cy="12" r="4" fill="var(--glass-bg)" />
                      <path d="M12 3v1M12 20v1M3 12h1M20 12h1M18.36 5.64l-.7.7M6.34 17.66l-.7.7M18.36 17.66l-.7-.7M6.34 5.64l-.7-.7" />
                    </svg>
                  </div>
                  <span className="step-number">02</span>
                </div>
                <h3 className="step-title">STEP 02 — GENERATE</h3>
                <p>
                  AI generates epics, stories, tests, and code — each level inheriting full context. Humans approve at every gate.
                </p>
              </div>
            </div>

            {/* STEP 03 */}
            <div className="pipeline-step-wrapper">
              <div className="pipeline-step-card glass-card step-3">
                <div className="step-header">
                  <div className="step-icon-wrapper">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="step-icon">
                      <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 5.5h20c0-2-1-4.25-2.5-5.5" />
                      <path d="M12 2C9 9 9 13 9 15c0 1.66 1.34 3 3 3s3-1.34 3-3c0-2 0-6-3-13z" />
                      <path d="M9 15v2a3 3 0 0 0 6 0v-2" />
                    </svg>
                  </div>
                  <span className="step-number">03</span>
                </div>
                <h3 className="step-title">STEP 03 — DEPLOY</h3>
                <p>
                  Full repository pushed to GitHub. Deploy to AWS, Azure, or GCP through your existing CI/CD. No rewiring required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FlowArt Scroll Presentation */}
      <FlowArtDefaultDemo />



      {/* SECTION 3 — INDUSTRIES / SOLUTIONS */}
      <section id="solutions">
        <div className="section-header">
          <span className="accent-label">WHAT WE OFFER</span>
          <h2 className="section-title">AI-Powered Solutions Across Every Sector</h2>
        </div>

        <div className="solutions-grid">
          {SECTORS.map((sector) => (
            <div className="parent" data-aos="fade-up" data-aos-delay={sector.delay} key={sector.date}>
              <div className="card">
                <div className="content-box">
                  <div className="tech-card-icon">
                    {sector.icon}
                  </div>
                  <span className="card-title">{sector.title}</span>
                  <p className="card-content">{sector.desc}</p>
                  <span className="see-more">See More</span>
                </div>
                <div className="date-box">
                  <span className="month">{sector.month}</span>
                  <span className="date">{sector.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="separator-gradient"></div>

      {/* SECTION 6 — GOVERNANCE & TRUST BADGES */}
      <section id="governance-section">
        <div className="section-header">
          <span className="accent-label">GOVERNANCE</span>
          <h2 className="section-title">Enterprise-Grade Governance. Built In.</h2>
        </div>

        <div className="marquee-container">
          <div className="marquee-track">
            <div className="marquee-content">
              <span>SOC 2 Ready</span>
              <span>RBAC &amp; SSO</span>
              <span>Audit Logs</span>
              <span>Approval Gates</span>
              <span>Traceability</span>
              <span>GitHub / GitLab</span>
              <span>Jira / Linear</span>
              <span>Slack</span>
              <span>CI/CD</span>
              <span>Multiple Expert-Led Gates</span>
            </div>
            <div className="marquee-content">
              <span>SOC 2 Ready</span>
              <span>RBAC &amp; SSO</span>
              <span>Audit Logs</span>
              <span>Approval Gates</span>
              <span>Traceability</span>
              <span>GitHub / GitLab</span>
              <span>Jira / Linear</span>
              <span>Slack</span>
              <span>CI/CD</span>
              <span>Multiple Expert-Led Gates</span>
            </div>
          </div>
        </div>

        <div className="gov-highlights">
          <div className="gov-col" data-aos="fade-right">
            <div className="gov-col-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <div className="gov-col-text">
              <h3>Multiple expert-led gates.</h3>
              <p>Specialists validate every stage, ensuring alignment with architectural guidelines and organizational policies.</p>
            </div>
          </div>
          
          <div className="gov-col" data-aos="fade-left">
            <div className="gov-col-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6M12 2v20"></path></svg>
            </div>
            <div className="gov-col-text">
              <h3>Native integrations.</h3>
              <p>Native integrations into modern dev workflows — from source control systems to custom enterprise deployments.</p>
            </div>
          </div>
        </div>
      </section>

        </>
      ) : activePage === 'yottabuilder' ? (
        <YottaBuilderPage onWaitlistClick={() => navigateToSection('waitlist')} />
      ) : (
        <SafeChiefPage onWaitlistClick={() => navigateToSection('waitlist')} />
      )}      <div className="separator-gradient"></div>

      {/* SECTION 7 — FINAL CTA / WAITLIST */}
      <section id="waitlist" className={activePage === 'safechief' ? 'safechief-waitlist' : ''}>
        <div className="waitlist-content">
          <span className="accent-label">EARLY ACCESS</span>
          <h2 className="waitlist-title">Build Faster. Ship Smarter. Start Today.</h2>
          <p className="waitlist-sub">
            Tell us what you're building and we'll show you how YottaBuilder and SafeChief can accelerate your journey.
          </p>

          <div className="terminal-container" data-aos="zoom-in">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">yottabuilder://waitlist_init</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-row">
                <span className="terminal-prompt">guest@yottaflex:~$</span>
                <span className="terminal-command"> init --waitlist</span>
              </div>
              <div className="terminal-row">
                <span className="terminal-output">&gt;&gt; Please enter your email to request early access:</span>
              </div>
              
              {!isRegistered ? (
                <form className="terminal-form" onSubmit={handleWaitlistSubmit}>
                  <div className="terminal-input-wrapper">
                    <span className="terminal-prompt">email:~$</span>
                    <input 
                      type="email" 
                      className="terminal-input" 
                      placeholder="you@domain.com" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="off" 
                    />
                  </div>
                  <button type="submit" className="terminal-submit-btn">EXECUTE_SUBMIT</button>
                </form>
              ) : (
                <div id="waitlist-success" className="terminal-success-message">
                  <span className="terminal-success-text">&gt;&gt; [SUCCESS] Email registered in waitlist queue. Priority ID: #YF-{priorityID}</span>
                  <span className="terminal-success-text">&gt;&gt; Welcome aboard, Pioneer. Access setup instructions dispatched.</span>
                </div>
              )}
            </div>
          </div>

          <p className="waitlist-note">
            Join the waitlist for early access. Available for IT services teams and software consultancies first.
          </p>
        </div>
      </section>

      {/* SECTION 8 — FOOTER */}
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo-container" onClick={(e) => { e.preventDefault(); setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <img src={logoImg} alt="YottaFlex Logo" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
              <span className="logo-text">YottaFlex</span>
            </a>
            <p className="footer-tagline">Human-led. AI-accelerated.</p>
            
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <a href="tel:+1(804)781-7090" className="interactive" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                Phone: +1 (804) 781-7090
              </a>
              <a href="mailto:contactus@yottaflex.ai" className="interactive" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                Email: contactus@yottaflex.ai
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Platform &amp; Products</h4>
              <a href="https://yottabuilder.ai/" target="_blank" rel="noopener noreferrer">YottaBuilder.ai</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('safechief'); }}>SafeChief</a>
            </div>
            <div className="footer-col">
              <h4>Solutions</h4>
              <a href="#solutions">Industry Solutions</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#governance-section">Governance</a>
              <a href="#waitlist">Contact</a>
            </div>
          </div>
        </div>

        {/* Global Addresses Grid */}
        <div className="office-grid">
          <div className="office-card">
            <h5>USA Office</h5>
            <p>4101 Cox Rd, Suite 340, Glen Allen, VA 23060</p>
          </div>
          <div className="office-card">
            <h5>Canada Office</h5>
            <p>Suite 670-3300 Bloor Street West, Toronto, Ontario, M8X 2X2</p>
          </div>
          <div className="office-card">
            <h5>India Office</h5>
            <p>The Business Park, Kondapur, Hyderabad, India 500084</p>
          </div>
          <div className="office-card">
            <h5>Colombia Office</h5>
            <p>Cra 39 #5a-95, Ofc# 709 Edificio Avantgarde, Medellín, Colombia 050021</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 YottaFlex.ai. All rights reserved.</p>
          
          <div className="footer-socials">
            <a href="https://www.facebook.com/yottatechports" target="_blank" rel="noopener noreferrer" className="footer-social-link facebook interactive" aria-label="Facebook">
              <span className="tooltip">Facebook</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link instagram interactive" aria-label="Instagram">
              <span className="tooltip">Instagram</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
