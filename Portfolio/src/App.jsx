import './style/App.css'

function App() {
  return (
    <>
      <div className='nav-bar'>
        <ul>
          <li><a>Home</a></li>
          <li><a>Projects</a></li>
          <li><a href="https://www.linkedin.com/in/hai-hoang-do-b65b18339/" target="_blank">LinkedIn</a></li>
          <li><a>CV</a></li>
        </ul>
      </div>
      <section className='info'>
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
            <h3>C#</h3>
          </div>
          <div className='skill-block'>
            <h3>Python</h3>
          </div>
          <div className='skill-block'>
            <h3>Java</h3>
          </div>
          <div className='skill-block'>
            <h3>Kotlin</h3>
          </div>
        </div>
      </section>
      <section className='experience'>
        <h2>EXPERIENCE</h2>
        <h4>Computer Service Technician</h4>
        <h4>Canada Computers</h4>
        <ul>
          <li>Build, test, and maintain computer systems and related products</li>
        </ul>
      </section>
      <section className='projects'>
        <h2>PROJECTS</h2>
        <div className='project-block'>
          <h4>Office Hour Scheduler</h4>
          <div className='project-info'>
            <ul>
              <li>Full stack Python & Flask web application</li>
              <li>Oracle database used for data collection</li>
              <li>Communication platform for managing appointments and reports</li>
              <li>Provides user authentication for different user type</li>
            </ul>
            <img src='./src/assets/scheduler.svg' alt='Scheduler'/>
          </div>
        </div>
        <div className='project-block'>
          <h4>CO2 Emission & Natural Disasters Visualizer</h4>
          <div className='project-info'>
            <ul>
              <li>Full stack React web application</li>
              <li>Utilizes a MongoDB cloud database</li>
              <li>Displays CO2 emission and natural disasters datasets over maps and graphs</li>
              <li>Provides REST API for data retrieval hosted with Express.js</li>
            </ul>
            <img src='./src/assets/emission.svg' alt='Scheduler'/>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
