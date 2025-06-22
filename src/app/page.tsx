'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

// Music Player Component
function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Configuration - using your Emmanuel.mp3 file
  const musicConfig = {
    localFile: '/music/Emmanuel.mp3',
    title: 'Beau Malheur',
    artist: 'Emmanuel Moire'
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.log('Audio play failed:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const displayTitle = musicConfig.artist 
    ? `${musicConfig.title} - ${musicConfig.artist}` 
    : musicConfig.title;

  // Handle audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => setIsPlaying(false);
      const handlePause = () => setIsPlaying(false);
      const handlePlay = () => setIsPlaying(true);

      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('play', handlePlay);

      return () => {
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('play', handlePlay);
      };
    }
  }, []);

  return (
    <>
      {/* Audio element for local file */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      >
        <source src={musicConfig.localFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className={`music-player ${isVisible ? 'visible' : 'minimized'}`}>
        {isVisible ? (
          <div className="music-player-content">
            <div className="music-info">
              <div className={`music-note ${isPlaying ? 'dancing' : ''}`}>
                🎵
              </div>
              <span className="music-text" title={displayTitle}>
                {displayTitle}
              </span>
            </div>
            <div className="music-controls">
              <button 
                onClick={togglePlay}
                className="play-pause-btn"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? '⏸️' : '▶️'}
              </button>
              <button 
                onClick={toggleVisibility}
                className="minimize-btn"
                title="Minimize"
              >
                ➖
              </button>
            </div>
          </div>
        ) : (
          <button 
            onClick={toggleVisibility}
            className="music-toggle-btn"
            title="Show Music Player"
          >
            🎵
          </button>
        )}
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <MusicPlayer />
      <div className="container">
        <div className="header-section">
          <div className="profile-container">
            <div className="profile-image">
              <Image
                src="/pictures/Headshot.png"
                alt="Jahid Hasan&apos;s headshot"
                width={180}
                height={180}
                priority
              />
            </div>
          </div>

          <h1 className="header-title">Jahid Hasan</h1>
          <p className="header-subtitle">
            <span>Researcher</span>
            <span>Entrepreneur</span>
            <span>Founder</span>
            <span>Engineer</span>
          </p>

          <div className="social-links">
            <a href="https://github.com/jahidhasanlinix" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/jhasanofficial/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://x.com/jhasanofficial" target="_blank" rel="noopener noreferrer" title="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="https://scholar.google.com/citations?user=l-ONe1oAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Google Scholar">
              <svg xmlns="http://www.w3.org/2000/svg" aria-label="Google Scholar" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#4285f4"></rect><path fill="#ffffff" d="M213 111l-107 94h69c5 45 41 64 78 67-7 18-4 27 7 39-43 1-103 26-103 67 4 45 63 54 92 54 38 1 81-19 90-54 4-35-10-54-31-71-23-18-28-28-21-40 15-17 35-27 39-51 2-17-2-28-6-43l45-38-1 16c-3 2-5 6-5 9v103c2 13 22 11 23 0V160c0-3-2-7-5-8v-25l16-16zm58 141c-61 10-87-87-38-99 56-11 83 86 38 99zm-5 73c60 13 61 63 10 78-44 9-82-4-81-30 0-25 35-48 71-48z"></path></g></svg>
            </a>
            <a href="https://www.youtube.com/@JahidInVision" target="_blank" rel="noopener noreferrer" title="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a2.994 2.994 0 00-2.107-2.117C19.379 3.5 12 3.5 12 3.5s-7.379 0-9.391.569A2.994 2.994 0 00.502 6.186C0 8.2 0 12 0 12s0 3.8.502 5.814a2.994 2.994 0 002.107 2.117C4.621 20.5 12 20.5 12 20.5s7.379 0 9.391-.569a2.994 2.994 0 002.107-2.117C24 15.8 24 12 24 12s0-3.8-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        <nav className="nav-menu">
          <a href="#about">About Me</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#media">Media</a>
          <a href="#contact">Contact</a>
        </nav>

        <section id="about">
          <h2>👋 About Me</h2>
          <p>
            Hello, I am Jahid, an AI researcher specializing in deep learning and a PhD student in Computer Science at Iowa State University, with dual Master&apos;s degrees in CS and Entrepreneurship. I blended my technical and entrepreneurial knowledge with a focus on AI and startup development.
          </p>
          <p>
            I&apos;m currently working with: <a href="https://tometoai.com/" target="_blank" rel="noopener noreferrer">Tometo, Inc.</a> (ProductHunt #2) FAANG-tier AI Engineering Manager to help startup founders and another open-source community project <a href="https://github.com/TheBinder-AI" target="_blank" rel="noopener noreferrer">TheBinder AI</a>, where I&apos;m developing <a href="https://github.com/TheBinder-AI/SwarmSync-SDK" target="_blank" rel="noopener noreferrer">SwarmSync SDK</a> - an open-source platform for AI agent swarms that work like real human teams. Previously, I helped startups grow as a Senior Venture Scout at <a href="https://www.lvlup.vc/" target="_blank" rel="noopener noreferrer">LvlUp Ventures</a>.
            Previously, I founded TucanaStarSoft, LLC., a video game development company. When not coding or building, I&apos;m at the gym, in the kitchen, or exploring new places.
          </p>

          <div style={{ marginTop: "15px", marginBottom: "20px" }}>
            <h3>📊 Gist of My GitHub Contributions</h3>
            <div style={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
              overflowX: "auto"
            }}>
              <Image
                src="https://ghchart.rshah.org/jahidhasanlinix"
                alt="Jahid Hasan&apos;s GitHub Contributions"
                width={800}
                height={150}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </section>

        <section id="experience">
          <h2>💼 Experience</h2>
          <div className="experience-container">
            <div className="experience-timeline">
              
              {/* <div className="experience-item current">
                <div className="experience-marker">
                  <div className="experience-dot">
                    <Image 
                      src="/favicon.jpeg" 
                      alt="TheBinder AI Logo" 
                      width={80}
                      height={80}
                      className="experience-icon-image"
                    />
                  </div>
                </div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h3 className="experience-title">Founding CEO & Engineering</h3>
                      <span className="experience-status current">Current</span>
                    </div>
                    <div className="experience-company-section">
                      <a href="https://github.com/TheBinder-AI" target="_blank" rel="noopener noreferrer" className="experience-company">
                        TheBinder AI
                      </a>
                      <span className="experience-type">Stealth AI Startup</span>
                    </div>
                    <div className="experience-date">2025</div>
                  </div>
                  <div className="experience-body">
                    <p className="experience-description">
                      Building an open-source community driven platform to develop <a href="https://github.com/TheBinder-AI/SwarmSync-SDK" target="_blank" rel="noopener noreferrer" className="inline-link">SwarmSync-SDK</a> for seamless multi-agentic collaboration.
                    </p>
                    <div className="experience-skills">
                      <span className="skill-tag primary">AI Leadership</span>
                      <span className="skill-tag primary">Multi-Agent Systems</span>
                      <span className="skill-tag">Product Strategy</span>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="experience-item current">
                <div className="experience-marker">
                  <div className="experience-dot">
                    <Image 
                      src="/tometo.png" 
                      alt="Tometo AI Logo" 
                      width={80}
                      height={80}
                      className="experience-icon-image"
                    />
                  </div>
                </div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h3 className="experience-title">Co-Founder & Engineering</h3>
                      <span className="experience-status current">Current</span>
                    </div>
                    <div className="experience-company-section">
                      <a href="https://tometoai.com/" target="_blank" rel="noopener noreferrer" className="experience-company">
                        Tometo, Inc.
                      </a>
                      <span className="experience-type">AI Startup</span>
                    </div>
                    <div className="experience-date">Jan 2025 - Present</div>
                  </div>
                  <div className="experience-body">
                    <p className="experience-description">
                      Building FAANG-tier AI Engineering Manager to help startups founders and teams.
                    </p>
                    <div className="experience-skills">
                      <span className="skill-tag primary">AI Research & Engineering</span>
                      <span className="skill-tag primary">Product Strategy</span>
                      <span className="skill-tag">Growth</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="experience-item current">
                <div className="experience-marker">
                  <div className="experience-dot">
                    <Image 
                      src="/isu.png" 
                      alt="Iowa State University Logo" 
                      width={80}
                      height={80}
                      className="experience-icon-image"
                    />
                  </div>
                </div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h3 className="experience-title">Graduate Research Assistant</h3>
                      <span className="experience-status current">Current</span>
                    </div>
                    <div className="experience-company-section">
                      <a href="https://www.bilab2012.com/home" target="_blank" rel="noopener noreferrer" className="experience-company">
                        BiLab, Iowa State University
                      </a>
                    </div>
                    <div className="experience-date">Nov 2024 - Present</div>
                  </div>
                  <div className="experience-body">
                    <p className="experience-description">
                      Building deep learning frameworks for biomedical research (Ultrasound, Photoacoustic tomography, etc.).
                    </p>
                    <div className="experience-skills">
                      <span className="skill-tag primary">Deep Learning</span>
                      <span className="skill-tag primary">Biomedical Research</span>
                      <span className="skill-tag">PhD</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-marker">
                  <div className="experience-dot">
                    <Image 
                      src="/lvlup.jpg" 
                      alt="LvlUp Ventures Logo" 
                      width={80}
                      height={80}
                      className="experience-icon-image"
                    />
                  </div>
                </div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h3 className="experience-title">Senior Venture Scout</h3>
                    </div>
                    <div className="experience-company-section">
                      <a href="https://www.lvlup.vc/" target="_blank" rel="noopener noreferrer" className="experience-company">
                        LvlUp Ventures
                      </a>
                    </div>
                    <div className="experience-date">Nov 2024 - Jun 2025</div>
                  </div>
                  <div className="experience-body">
                    <p className="experience-description">
                      Conducting investment scouting and due diligence for early-stage startups.
                    </p>
                    <div className="experience-skills">
                      <span className="skill-tag primary">Venture Capital</span>
                      <span className="skill-tag">Investment Analysis</span>
                      <span className="skill-tag">Startup Scouting</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-marker">
                  <div className="experience-dot">
                    <Image 
                      src="/perplexity.png" 
                      alt="Perplexity AI Logo" 
                      width={80}
                      height={80}
                      className="experience-icon-image"
                    />
                  </div>
                </div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h3 className="experience-title">Campus Strategist</h3>
                    </div>
                    <div className="experience-company-section">
                      <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer" className="experience-company">
                        Perplexity AI
                      </a>
                    </div>
                    <div className="experience-date">Sep - Dec 2024</div>
                  </div>
                  <div className="experience-body">
                    <p className="experience-description">
                      Led Perplexity AI&apos;s campus product growth marketing campaign, driving user adoption and engagement.
                    </p>
                    <div className="experience-skills">
                      <span className="skill-tag">Growth Marketing</span>
                      <span className="skill-tag">Product Strategy</span>
                      <span className="skill-tag">Campus Outreach</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-marker">
                  <div className="experience-dot">
                    <Image 
                      src="/steam.png" 
                      alt="Steam Logo" 
                      width={80}
                      height={80}
                      className="experience-icon-image"
                    />
                  </div>
                </div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h3 className="experience-title">Project Manager</h3>
                    </div>
                    <div className="experience-company-section">
                      <a href="https://store.steampowered.com/app/2504810/Arcane_Arena/" target="_blank" rel="noopener noreferrer" className="experience-company">
                        BLÜ Games
                      </a>
                      <span className="experience-type">Indie Game Studio</span>
                    </div>
                    <div className="experience-date">May 2023 - Nov 2024</div>
                  </div>
                  <div className="experience-body">
                    <p className="experience-description">
                      Managed development of Arcane Arena, a competitive multiplayer video game.
                    </p>
                    <div className="experience-skills">
                      <span className="skill-tag">Game Development</span>
                      <span className="skill-tag">Project Management</span>
                      <span className="skill-tag">Steam</span>
                      <span className="skill-tag">Unreal Engine 5</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-marker">
                  <div className="experience-dot">
                    <Image 
                      src="/tucana.png" 
                      alt="TucanaStarSoft Logo" 
                      width={80}
                      height={80}
                      className="experience-icon-image"
                    />
                  </div>
                </div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h3 className="experience-title">Founder</h3>
                    </div>
                    <div className="experience-company-section">
                      <a href="https://www.youtube.com/watch?v=I6RZcBQG4fA&ab_channel=1UniverseGames" target="_blank" rel="noopener noreferrer" className="experience-company">
                        TucanaStarSoft, LLC
                      </a>
                      <span className="experience-type">DISSOLVED</span>
                    </div>
                    <div className="experience-date">May 2022 - May 2023</div>
                  </div>
                  <div className="experience-body">
                    <p className="experience-description">
                      Founded and operated a video game development company, gaining valuable entrepreneurial experience.
                    </p>
                    <div className="experience-skills">
                      <span className="skill-tag">Entrepreneurship</span>
                      <span className="skill-tag">Game Development</span>
                      <span className="skill-tag">Business Operations</span>
                      <span className="skill-tag">Unreal Engine 5</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-marker">
                  <div className="experience-dot">
                    <Image 
                      src="/microsoft.png" 
                      alt="Microsoft Logo" 
                      width={80}
                      height={80}
                      className="experience-icon-image"
                    />
                  </div>
                </div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h3 className="experience-title">Technical Support Engineer</h3>
                    </div>
                    <div className="experience-company-section">
                      <a href="https://www.microsoft.com/en-us/" target="_blank" rel="noopener noreferrer" className="experience-company">
                        Microsoft (Shanghai)
                      </a>
                    </div>
                    <div className="experience-date">Oct 2019 - Jan 2020</div>
                  </div>
                  <div className="experience-body">
                    <p className="experience-description">
                      Provided technical support for Microsoft Office 365 products, resolving complex technical issues for enterprise clients.
                    </p>
                    <div className="experience-skills">
                      <span className="skill-tag">Technical Support</span>
                      <span className="skill-tag">Microsoft Technologies</span>
                      <span className="skill-tag">Problem Solving</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-marker">
                  <div className="experience-dot">
                    <Image 
                      src="/lnx.png" 
                      alt="LNX Protocol Logo" 
                      width={80}
                      height={80}
                      className="experience-icon-image"
                    />
                  </div>
                </div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-section">
                      <h3 className="experience-title">Software Engineer Intern</h3>
                    </div>
                    <div className="experience-company-section">
                      <a href="https://github.com/linix-platform" target="_blank" rel="noopener noreferrer" className="experience-company">
                        LNX Protocol
                      </a>
                    </div>
                    <div className="experience-date">Jun - Oct 2019</div>
                  </div>
                  <div className="experience-body">
                    <p className="experience-description">
                      Contributed to building a DAG-based blockchain protocol, working on distributed systems architecture.
                    </p>
                    <div className="experience-skills">
                      <span className="skill-tag">Blockchain</span>
                      <span className="skill-tag">DAG Protocol</span>
                      <span className="skill-tag">Distributed Systems</span>
                      <span className="skill-tag">Rust</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="projects">
          <h2>🚀 Highlighted Projects</h2>
          <ul className="project-list">
            <li className="project-item active" data-filter-item>
              <a href="https://github.com/TheBinder-AI/SwarmSync-SDK" target="_blank">
                <h3 className="project-title">🤖 SwarmSync SDK</h3>
                <p className="project-category">Building an open-source SwarmSync multi-agent</p>
              </a>
            </li>

            <li className="project-item active" data-filter-item>
              <a href="https://github.com/TheBinder-AI/SwarmSync-Deep-Research" target="_blank">
                <h3 className="project-title">🧠 SwarmSync Deep Research</h3>
                <p className="project-category">AI-driven platform for building deep research tools</p>
              </a>
            </li>

            <li className="project-item active" data-filter-item>
              <a href="https://intelliparse.vercel.app/" target="_blank">
                <h3 className="project-title">📄 IntelliParse</h3>
                <p className="project-category">AI-powered Document Parser</p>
              </a>
            </li>

            <li className="project-item active" data-filter-item>
              <a href="https://github.com/jahidhasanlinix/FraudDetectApp" target="_blank">
                <h3 className="project-title">🛡️ FraudDetect App</h3>
                <p className="project-category">Credit Card Fraud Detection System</p>
              </a>
            </li>

            <li className="project-item active" data-filter-item>
              <a href="https://pypi.org/project/nexusfm/" target="_blank">
                <h3 className="project-title">📁 NexusFM File Manager</h3>
                <p className="project-category">Personalized file manager with both GUI and terminal interfaces</p>
              </a>
            </li>

            <li className="project-item active" data-filter-item>
              <a href="https://github.com/jahidhasanlinix/livekit_voice_agent" target="_blank">
                <h3 className="project-title">🎙️ Voice Agent</h3>
                <p className="project-category">Building a voice agent using LiveKit</p>
              </a>
            </li>

            <li className="project-item active" data-filter-item>
              <a href="https://github.com/jahidhasanlinix/RefactorizeSueNes" target="_blank">
                <h3 className="project-title">📝 Refactorize SueNes</h3>
                <p className="project-category">Document Summarizer evaluation using HuggingFace Transformers</p>
              </a>
            </li>

            <li className="project-item active" data-filter-item>
              <a href="https://startupvaluationcalculation.vercel.app/" target="_blank">
                <h3 className="project-title">💰 Startup Valuation Playground</h3>
                <p className="project-category">Calculate startup valuation using different methods</p>
              </a>
            </li>
          </ul>
        </section>

        <section id="media">
          <h2>📰 Media Coverage</h2>
          <ul className="media-list">
            <li className="media-item">
              <h3 className="media-title">🏆 Finalist at the International Immigrant Entrepreneurs Summit 2022</h3>
              <p className="media-description">
                Featured in We Are Iowa Local 5 News for achievements as a finalist at the International Immigrant Entrepreneurs Summit.<br />
                <a href="https://www.weareiowa.com/article/news/local/entrepreneurs-summit-education-immigrant-business-owners-iowa-des-moines/524-8c350764-4e40-41bd-80e5-2a9f114804aa" target="_blank" rel="noopener noreferrer">
                  Read the article
                </a>
                {" | "}
                <a href="https://www.youtube.com/watch?v=cAgYhMkLVyk&ab_channel=WeAreIowaLocal5News" target="_blank" rel="noopener noreferrer">
                  Watch the TV segment
                </a>
              </p>
            </li>
          </ul>
        </section>

        <section id="contact">
          <h2>📬 Contact</h2>
          <p>
            <b>📧 Email:</b> <a href="mailto:jhasan@iastate.edu">jhasan@iastate.edu</a><br />
            <b>🐦 Twitter:</b> <a href="https://twitter.com/jhasanofficial" target="_blank" rel="noopener noreferrer">@jhasanofficial</a><br />
            <b>📍 Location:</b> Ames, Iowa
          </p>
        </section>

        <hr />

        <div className="footer">
          <p className="copyright">
            © {new Date().getFullYear()} Jahid Hasan • Built with <span className="heart">❤️</span>
          </p>
          <div className="made-in-america">
            <span className="flag-icon">🇺🇸</span>
            <span>Made in America</span>
          </div>
        </div>
      </div>
    </>
  );
}