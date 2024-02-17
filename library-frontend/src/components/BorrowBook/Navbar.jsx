import React, { useState } from "react";
import "../../style/Navbar.css";
import { Link } from 'react-router-dom'


export default function Navbarx() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow p-5">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
          <div><Link to="/" className="logo text-2xl font-bold hover:text-green-600">โปรแกรมระบบงานห้องสมุด</Link></div>

            {/* Toggle Menu Bar */}
            <div className="md:hidden">
              <button id="menu-toggle" onClick={toggleMenu}>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  className="w-6 h-6 "
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            <ul className="hidden md:flex space-x-8 menu-items">
                <Link to="/borrowbook" className=" hover:text-green-600">จัดการข้อมูล</Link>
                <Link to="/borrowbook_borrow" className=" hover:text-green-600">ยืมหนังสือ</Link>
                <Link to="/borrowbook_return" className=" hover:text-green-600">คืนหนังสือ</Link>
                <Link to="/borrowbook_data" className=" hover:text-green-600">ข้อมูลสถิติ</Link>
            </ul>
          </div>
          {/* Moblie Menu */}
          {isMenuOpen ? (
            <ul className="flex-col menu-items md:hidden mt-4">
              <Link to="/borrowbook" className="text-center py-5 border-b-2">
                จัดการข้อมูล
              </Link>
              <Link to="/borrowbook" className="text-center py-5 border-b-2">
                ยืมหนังสือ
              </Link>
              <li className="text-center py-5 border-b-2">
                <a href="#certificate">CERTIFICATE</a>
              </li>
              <li className="text-center py-5 border-b-2">
                <a href="#project">PROJECT</a>
              </li>
              <li className="text-center py-5 border-b-2">
                <a href="#activity">ACTIVITY</a>
              </li>
              <li className="text-center py-5 border-b-2">
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          ) : null}
        </div>
      </nav>
    </>
  );
}
