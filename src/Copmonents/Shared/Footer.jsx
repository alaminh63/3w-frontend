import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="mb-3">Company Name</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tristique augue vel orci fermentum, vitae lobortis lectus
              vulputate.
            </p>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3">Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  <i className="bi bi-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  <i className="bi bi-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  <i className="bi bi-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;