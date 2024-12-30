import React, { useState } from "react"; 
import { Link } from "react-router-dom"; 
import { FaSearch } from "react-icons/fa"; 
import Vincent from "../Resource/VincWallp-LOGSIGN3.png"; 
import "./dashLogin.css"; 

function DashLogin() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>CVJA Library</h1>
        <div className="menu">
          <span>Dashboard</span>
          <div
            className="dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span>Daftar Buku</span>
            {showDropdown && (
              <div className="dropdown-menu">
                <span><Link to="./Kategori-fiksi" className="link">Fiksi</Link></span>
                <span><Link to="./kategori-Nonfiksi" className="link">Non - Fiksi</Link></span>
              </div>
            )}
          </div>

          {/* Profile Icon */}
          <div className="profile">
            <img src={Vincent} alt="Profile" className="profile-pic" />
          </div>

          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
            />
            <button onClick={handleSearch}>
              <FaSearch size={20} color="black" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="content">
        <div className="greeting">
          Hai, Wawan
          <br />
          Januar
        </div>
        <div className="welcome-text">
          Welcome to CVJA Library!
          <br />
          The best place to borrow and return digital books easily
          <br />
          and conveniently. Discover a wide collection of books
          <br />
          ready to accompany your learning journey.
          <button className="view-books-btn">Lihat Buku saya</button>
        </div>
      </div>

      {/* Vincent Image */}
      <img src={Vincent} alt="Vincent" className="vincent" />
    </div>
  );
}

export default DashLogin;
