import "./Home.css";
export default function Home() {
  return (
    <main id="main">
      <div className="introContainer">
        <div className="intro">
          <p>
            Hi, I'm <span className="name">Kevin</span> - Wenhao Lu
          </p>
          <p>I'm a full stack developer.</p>
        </div>
        <div className="linkContainer">
          <ul className="introLink">
            <li>
              <p className="linkBtn1">
                <a href="#skills">Skills</a>
              </p>
            </li>
            <li>
              <p className="linkBtn2">
                <a href="#projects">Projects</a>
              </p>
            </li>
            <li>
              <p className="linkBtn3">
                <a href="#education">Education</a>
              </p>
            </li>
            <li>
              <p className="linkBtn4">
                <a href="#contact">Contact</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
