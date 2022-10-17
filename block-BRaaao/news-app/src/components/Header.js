function Header(props) {
  return (
    <div className="header">
      <nav className="flex">
        <span>Logo</span>
        <ul className="flex">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contect">Contact</a>
          </li>
          <li>
            <a href="#more">More</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
