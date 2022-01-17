const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">
        <a
          className="home"
          href="https://www.ngoako.com/coding-resource-finder/"
          rel="noreferrer"
        >
          Coding Resource Finder
        </a>
      </h1>
      <div className="header-details">
        <h2 className="header-description">
          An easier way to find coding related topics and projects on the{" "}
          <a
            className="simple-link"
            href="http://syllabus.africacode.net/"
            target="_blank"
            rel="noreferrer"
          >
            ACN syllabus
          </a>
        </h2>
        <div className="header-links">
          <p className="creator">
            Created by{" "}
            <a
              className="simple-link"
              href="https://ngoako.com"
              target="_blank"
              rel="noreferrer"
            >
              Ngoako
            </a>
            . Source code on{" "}
            <a
              className="simple-link"
              href="https://github.com/Ngoakor12/coding-resource-finder"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>.
          </p>
          {/* <p className="source-code"> */}
          {/* </p> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
