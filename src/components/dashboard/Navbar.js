import React from 'react';
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <div className="canva">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ color: '#F3FDE8' }}>
              <strong>Navbar</strong>
            </a>
            <button
              className="navbar-toggler"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                  {/* Your list items here */}
                </ul>
                <form className="d-flex">
                  <button className="btn btn-outline-primary px-3" type="submit" style={{ color: '#F3FDE8', backgroundColor: '#141E46' }}>
                    {/* Your button content here */}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
