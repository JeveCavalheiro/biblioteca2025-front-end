export default function Menu (){
    return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
  <a className="navbar-brand" href="#">
    Navbar
  </a>
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          data-bs-toggle="dropdown"
        >
          Dropdown
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" />
      <button className="btn btn-outline-light" type="submit">
        Search
      </button>
    </form>
  </div>
</nav>
  </>
    );
};