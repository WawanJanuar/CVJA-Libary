import React from "react";
import styles from "./navdetailbuku.module.css"
import backicon from "../Resource/back-icon.png"
import { Link } from "react-router-dom";

function NavDetailBuku() {
  return (
    <div className={styles.navBarDetail}> 
      <button className={styles.backButtonDetail}>
        <Link to='/'><img src={backicon} alt="back" className={styles.BackIconDetail} /></Link>
      </button>
      <h1 className={styles.title}>CVJA Library</h1>
    </div>
  );
}

export default NavDetailBuku;
