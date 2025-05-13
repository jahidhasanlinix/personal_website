import Image from 'next/image';

export default function Home() {
  return (
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
          Hello, I am Jahid, a PhD student in Computer Science at Iowa State University, with dual Master&apos;s degrees in CS and Entrepreneurship. My work combines technical innovation with business acumen, focusing on AI and startup development.
        </p>
        <p>
          I&apos;m building the future of AI collaboration through two ventures: <a href="https://tometoai.com/" target="_blank" rel="noopener noreferrer">Tometo AI</a> (ProductHunt #2) and <a href="https://www.linkedin.com/company/thebinder/" target="_blank" rel="noopener noreferrer">TheBinder AI</a>, where I&apos;m developing <a href="https://github.com/TheBinder-AI/SwarmSync-SDK" target="_blank" rel="noopener noreferrer">SwarmSync SDK</a> - an open-source platform for AI agent swarms that work like elite human teams. I also help startups grow as a Senior Venture Scout at <a href="https://www.lvlup.vc/" target="_blank" rel="noopener noreferrer">LvlUp Ventures</a>.
          Previously founded TucanaStarSoft, LLC., a video game development company. When not coding or building, I&apos;m at the gym, in the kitchen, or exploring new places.
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
        <h2>💼 Experience (Research/Work)</h2>
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-dot"></div>
            <div className="experience-content">
              <h3 className="experience-title">🤖 Founding CEO & Engineering</h3>
              <a href="https://www.linkedin.com/company/thebinder/" target="_blank" rel="noopener noreferrer" className="experience-company">TheBinder AI (Stealth AI startup)</a>
              <p className="experience-date">2025</p>
              <p className="experience-description">Building a platform for AI Agents to collaborate and build together, checkout <a href="https://github.com/TheBinder-AI/SwarmSync-SDK" target="_blank" rel="noopener noreferrer">SwarmSync-SDK</a>.</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-dot"></div>
            <div className="experience-content">
              <h3 className="experience-title">🚀 Engineering & Co-Founder</h3>
              <a href="https://tometoai.com/" target="_blank" rel="noopener noreferrer" className="experience-company">Tometo AI</a>
              <p className="experience-date">Jan 2025 - Present</p>
              <p className="experience-description">Building FAANG-tier AI Engineering Manager.</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-dot"></div>
            <div className="experience-content">
              <h3 className="experience-title">🔬 Graduate Research Assistant</h3>
              <a href="https://www.bilab2012.com/home" target="_blank" rel="noopener noreferrer" className="experience-company">BiLab, ISU</a>
              <p className="experience-date">Nov 2024 - Present</p>
              <p className="experience-description">Researching on deep learning for biomedical applications.</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-dot"></div>
            <div className="experience-content">
              <h3 className="experience-title">💼 Senior Venture Scout</h3>
              <a href="https://www.lvlup.vc/" target="_blank" rel="noopener noreferrer" className="experience-company">LvlUp Ventures</a>
              <p className="experience-date">Nov 2024 - Present</p>
              <p className="experience-description">Investment scouting and due diligence.</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-dot"></div>
            <div className="experience-content">
              <h3 className="experience-title">🎯 Campus Strategist</h3>
              <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer" className="experience-company">Perplexity AI</a>
              <p className="experience-date">Sep-Dec 2024</p>
              <p className="experience-description">Building multi-purpose web agents for insurance companies.</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-dot"></div>
            <div className="experience-content">
              <h3 className="experience-title">🎮 Founder</h3>
              <a href="https://www.youtube.com/watch?v=I6RZcBQG4fA&ab_channel=1UniverseGames" target="_blank" rel="noopener noreferrer" className="experience-company">TucanaStarSoft, LLC</a>
              <p className="experience-date">2022-2023</p>
              <p className="experience-description">Video game development company (DISSOLVED).</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-dot"></div>
            <div className="experience-content">
              <h3 className="experience-title">🎲 Project Manager</h3>
              <a href="https://store.steampowered.com/app/2504810/Arcane_Arena/" target="_blank" rel="noopener noreferrer" className="experience-company">BLÜ Games</a>
              <p className="experience-date">May 2023 - Nov 2023</p>
              <p className="experience-description">Building Arcane Arena Video Game.</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-dot"></div>
            <div className="experience-content">
              <h3 className="experience-title">💻 Technical Support Engineer</h3>
              <a href="https://www.microsoft.com/en-us/" target="_blank" rel="noopener noreferrer" className="experience-company">Shanghai Microsoft</a>
              <p className="experience-date">Oct 2019 - Jan 2020</p>
              <p className="experience-description">Technical support for Microsoft products.</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-dot"></div>
            <div className="experience-content">
              <h3 className="experience-title">⚡ Software Engineer Intern</h3>
              <a href="https://github.com/linix-platform" target="_blank" rel="noopener noreferrer" className="experience-company">LNX Protocol</a>
              <p className="experience-date">Jun-Oct 2019</p>
              <p className="experience-description">Building DAG-based blockchain protocol.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>🚀 Projects</h2>
        <ul className="project-list">
          <li className="project-item active" data-filter-item>
            <a href="https://github.com/TheBinder-AI/SwarmSync-SDK" target="_blank">
              <h3 className="project-title">🤖 SwarmSync SDK</h3>
              <p className="project-category">Building an open-source SwarmSync multi-agent</p>
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
  );
}