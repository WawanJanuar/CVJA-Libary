import react from "react";
import { Link } from 'react-router-dom';
import styles from './nav.module.css';

const Nav = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>CVJA Library</h1>
            <nav className={styles.nav}>
            <Link to="/SignUp" className={styles.navLink}>SignUp</Link>
            <Link to="/login" className={styles.navLink}>Login</Link>
  
        <div className={styles.userSection}>
        <div className={styles.profilePic}>
            <img
         className={styles.avatar}
        />
    </div>
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
      />
    </div>
  </div>
</nav>
</header>
    )
}

export default Nav;