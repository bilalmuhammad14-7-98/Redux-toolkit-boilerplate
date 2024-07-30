import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          {/* <!-- Logo on the left --> */}
          <a class="navbar-brand" href="#">
            <img
              src="/assets/img/ATOM-Logo.png"
              alt="Your Logo"
              width="100%"
              height="40"
            />
          </a>

          {/* <!-- Toggle button for small screens --> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* <!-- Links on the right --> */}
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Recomendation
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Careers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
