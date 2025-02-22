import './style/App.css'

function App() {
  return (
    <>
      <div className='nav-bar'>
        <ul>
          <li><a href="#info-section" target="_self">Home</a></li>
          <li><a href="#project-section" target="_self">Projects</a></li>
          <li><a href="https://www.linkedin.com/in/hai-hoang-do-b65b18339/" target="_blank">LinkedIn</a></li>
          <li><a href="/Resume.pdf" target="_blank">CV</a></li>
        </ul>
      </div>
      <section className='info' id='info-section'>
        <h1>Hai Hoang Do</h1>
        <p>Montreal, Canada<br/>haihoangdovn05@gmail.com</p>
        <h3>
          Third year Computer Science student at Dawson College. <br/> Passionate and eager to pursue a career in the tech industry.
        </h3>
      </section>
      <section className='skills'>
        <h2>SKILLS</h2>
        <div className='skill-container'>
          <div className='skill-block'>
            <h3>JavaScript</h3>
          </div>
          <div className='skill-block'>
            <h3>React</h3>
          </div>
          <div className='skill-block'>
            <h3>Node.js</h3>
          </div>
          <div className='skill-block'>
            <h3>Express</h3>
          </div>
          <div className='skill-block'>
            <h3>C#</h3>
          </div>
          <div className='skill-block'>
            <h3>Entity</h3>
          </div>
          <div className='skill-block'>
            <h3>Avalonia</h3>
          </div>
          <div className='skill-block'>
            <h3>Python</h3>
          </div>
          <div className='skill-block'>
            <h3>Flask</h3>
          </div>
          <div className='skill-block'>
            <h3>Java</h3>
          </div>
          <div className='skill-block'>
            <h3>Kotlin</h3>
          </div>
        </div>
      </section>
      <section className='education'>
        <h2>EDUCATION</h2>
        <div className='education-block'>
          <img src='/dawson-logo.svg'/>
          <div className='education-info'>
            <h4>Dawson College</h4>
            <h4>Computer Science and Technology program</h4>
            <ul>
              <li>Create robust software systems including web and cloud-based applications</li>
              <li>Use multiple programming languages in various operating systems</li>
              <li>Develop analytical/problem-solving skills and logical thinking</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='experience'>
        <h2>EXPERIENCE</h2>
        <div className='experience-block'>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <h4>Computer Service Technician</h4>
                <h4>Canada Computers</h4>
                <ul>
                  <li>Build, maintain, and conduct repairs computer systems and related products</li>
                  <li>Install and configure software, hardware, drivers and BIOS on machines</li>
                  <li>Troubleshoot and locate root cause of problems in order to provide technical support</li>
                </ul>
              </div>
              <div className='flip-card-back'>
                <img src='/cc-banner.svg' alt='CC banner' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='projects' id='project-section'>
        <h2>PROJECTS</h2>
        <div className='project-block'>
          <h4>
            <a href='https://github.com/H-Two/Appoint-Me' target="_blank">Office Hour Scheduler</a>
          </h4>
          <div className='project-info'>
            <ul>
              <li>Full stack Python & Flask web application</li>
              <li>Oracle database used for data collection</li>
              <li>Communication platform for managing appointments and reports</li>
              <li>Provides user authentication for different user type</li>
            </ul>
            <div className='project-image'>
              <img src='/scheduler-1.svg' alt='Scheduler 1' className='front-image'/>
              <img src='/scheduler-2.svg' alt='Scheduler 2' className='back-image'></img>
            </div>
          </div>
        </div>
        <div className='project-block'>
          <h4>
            <a href='https://github.com/H-Two/CO2-and-Natural-Disaster-Visualizer' target="_blank">CO2 Emission & Natural Disasters Visualizer</a>
          </h4>
          <div className='project-info'>
            <ul>
              <li>Full stack React web application</li>
              <li>Utilizes a MongoDB cloud database</li>
              <li>Displays CO2 emission and natural disasters datasets over maps and graphs</li>
              <li>Provides REST API for data retrieval hosted with Express.js</li>
            </ul>
            <div className='project-image'>
              <img src='/emission.svg' alt='Emission' className='front-image'/>
              <img src='/emission-dark.svg' alt='Emission dark mode' className='back-image'></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
