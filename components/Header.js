import Link from 'next/link';

const linkStyle = {
  //marginRight: 15
};

const Header = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
    <div className="container">
      <img src="https://brand.uga.edu/wp-content/uploads/GEORGIA-FS-CW-1024x335.png" alt="UGA Logo" id="ugalogo" />
      <a className="navbar-brand container d-flex justify-content-center" href="#">ProKinO</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/">
            <a className="nav-link">Home
              <span className="sr-only">(current)</span>
            </a>
            </Link>
          </li>
          <li className="nav-item active">
          <Link href="/about">
            <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item">
          <Link href="/publications">
            <a className="nav-link">Publications</a>
            </Link>
          </li>
          <li className="nav-item">
          <Link href="/">
            <a className="nav-link">Contact</a>
          </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  </div>
);

export default Header;

