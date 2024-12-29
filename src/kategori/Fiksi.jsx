// LibraryPage.jsx
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import styles from './fiksi.module.css';
import { VincWallp } from '../Resource/indeksgambar';

const Fiksi = () => {

  const [searchbar, setSearchbar] = useState("")

  const books = [
    {
      id: 1,
      title: 'Harry Potter and the Cursed Child',
      author: 'Morgan House',
      coverUrl: VincWallp 
    },
    {
      id: 2,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      coverUrl: VincWallp
    },
    {
      id: 3,
      title: 'The Chronicles of Narnia',
      author: 'C. S. Lewis',
      coverUrl: VincWallp
    },
    {
      id: 4,
      title: 'The Catcher in the Rye',
      author: 'Stephen R. Covey',
      coverUrl: VincWallp
    }
  ];

  const filterbook = books.filter(
    (book) => 
      book.title.toLowerCase().includes(searchbar.toLocaleLowerCase()) || 
      book.author.toLowerCase().includes(searchbar.toLocaleLowerCase())
  )

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.logo}>CVJA Library</h1>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Dashboard</a>
          <a href="#" className={styles.navLink}>Daftar Buku</a>
          <div className={styles.userSection}>
            <div className={styles.profilePic}>
              <img
                className={styles.avatar}
              />
            </div>
            <div className={styles.searchContainer}>
              <input
                type="search"
                placeholder="Search"
                value={searchbar}
                onChange={(e) => setSearchbar(e.target.value)}
                className={styles.searchInput}
              />
              <Search className={styles.searchIcon} />
            </div>
          </div>
        </nav>
      </header>

      {/* Category */}
      <div className={styles.categoryContainer}>
      <div className={styles.categorySection}>
        <button className={styles.categoryButton}>
          Fiksi
        </button>
      </div>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <h2 className={styles.sectionTitle}>Buku yang tersedia</h2>
        
        <div className={styles.booksGrid}>
          {filterbook.map((book) => (
            <div key={book.id} className={styles.bookCard}>
              <img
                src={book.coverUrl}
                alt={book.title}
                className={styles.bookCover}
              />
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <p className={styles.bookAuthor}>{book.author}</p>
              <button className={styles.viewButton}>
                View
              </button>
            </div>
          ))}
        </div>
      </main>
      </div>
      
    </div>
  );
};

export default Fiksi;