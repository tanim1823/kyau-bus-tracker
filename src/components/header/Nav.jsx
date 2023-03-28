import React from 'react'

const Nav = () => {
  return (
    <div>
         <nav className="navbar container-fluid ">
        <div className="container">
          <span className="navbar-brand mb-0 d-flex gap-1">
            <img
              src="/logo.png"
              alt="KYAU Logo"
              width={35}
              height={40}
              className=""
            />
            <div>
              <p> Khwaja Yunus Ali University</p>
            </div>
          </span>

          {
            // Nav bar button toggle
          }
          {/* <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          > 
            <span class="navbar-toggler-icon"></span>
          </button>
          */}
          <div
            className="offcanvas offcanvas-end"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                KYAU Bus Tracker
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/map"}>Map</Link>
                </li>
              </ul>
              <div className="mt-2">
                <button
                  style={{ marginRight: "0.25rem" }}
                  className="btn btn-outline-warning"
                >
                  Singup
                </button>
                <button className="btn btn-outline-success">Login</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Nav
   <nav className="navbar container-fluid ">
        <div className="container">
          <span className="navbar-brand mb-0 d-flex gap-1">
            <img
              src="/logo.png"
              alt="KYAU Logo"
              width={35}
              height={40}
              className=""
            />
            <div>
              <p> Khwaja Yunus Ali University</p>
            </div>
          </span>

          {
            // Nav bar button toggle
          }
          {/* <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          > 
            <span class="navbar-toggler-icon"></span>
          </button>
          */}
          <div
            className="offcanvas offcanvas-end"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                KYAU Bus Tracker
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/map"}>Map</Link>
                </li>
              </ul>
              <div className="mt-2">
                <button
                  style={{ marginRight: "0.25rem" }}
                  className="btn btn-outline-warning"
                >
                  Singup
                </button>
                <button className="btn btn-outline-success">Login</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
