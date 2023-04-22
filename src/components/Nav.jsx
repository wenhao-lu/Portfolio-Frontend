import "./Nav.css";

export default function Nav() {
  return (
    <div className="main-nav" aria-label="Main navigation">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/wenhao-kevin-l-6290b2145/">
            <img
              src="/src/assets/logo/linkedin.png"
              width="50"
              height="50"
              className="contactImg"
              alt="linkedin"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/wenhao-lu">
            <img
              src="/src/assets/logo/github.png"
              width="50"
              height="50"
              className="contactImg"
              alt="github"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
