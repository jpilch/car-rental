import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate()
  
  return (
    <header id="navbar">
      <div className="content">
        <div className="logo company-name">
          <h1>
            <span>
              <i className="fa-solid fa-car-side"></i>Moto
            </span>
            Rent
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#" onClick={() => navigate('/cars')}>Cars</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <button className="btn">
            <a href="">Sign Up</a>
          </button>
        </nav>
      </div>
    </header>
  );
}
