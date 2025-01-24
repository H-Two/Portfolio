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
      </section>
      <section className='projects'>
        <h2>PROJECTS</h2>
      </section>
    </>
  );
}

export default App;
