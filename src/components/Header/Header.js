const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Coding Resource Finder</h1>
      <div className="header-details">
        <p className="header-description">
          An easier way to find coding related topics and projects on the{" "}
          <a className="simple-link" href="http://syllabus.africacode.net/">
            ACN syllabus
          </a>
        </p>
        <div className="header-links">
          <p className="creator">
            Created by:{" "}
            <a
              className="simple-link"
              href="https://ngoako.com"
              target="_blank"
              rel="noreferrer"
            >
              Ngoako
            </a>
          </p>
          <p className="source-code">
            Source code:{" "}
            <a
              className="simple-link"
              href="https://github.com/Ngoakor12/coding-resource-finder"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
