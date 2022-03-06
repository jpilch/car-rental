import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'


export default function Navbar() {
  return (
    <header id='navbar'>
        <div class="content">
            <div class="logo company-name">
                <h1><span><i class="fa-solid fa-car-side"></i>Moto</span>Rent</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Cars</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <button class="btn">
                    <a href="">Sign Up</a>
                </button>
            </nav>
        </div>
    </header>
  )
}
