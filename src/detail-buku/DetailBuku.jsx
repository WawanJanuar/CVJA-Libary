import React, { useState } from "react";
import styles from "./detailbuku.module.css";
import NavDetailBuku from "../nav/NavDetailBuku";
import PopUpDetailBuku from "./PopUpDetailBuku";
import datadetailbuku from "../data/datadetailbuku";

function DetailBuku() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className={styles.detailContainer}>
      <NavDetailBuku />
      <div className={styles.content}>
        <div className={styles.bookImage}>
          <h1 className={styles.judulHalaman}>Detail Buku</h1>
          <img src={datadetailbuku.gambar1} alt={datadetailbuku.title} />
        </div>
        <div className={styles.bookDetails}>
          <h2 className={styles.penerbit}>{datadetailbuku.author}</h2>
          <h1 className={styles.judulDetailBuku}>{datadetailbuku.title}</h1>
          <span className={styles.badge}>{datadetailbuku.category}</span>
          <p>
            <strong>Status Ketersediaan :</strong>
            <span className={styles.available}>{datadetailbuku.availability}</span>
          </p>
          <p className={styles.descriptionJudul}>Deskripsi :</p>
          <p className={styles.description}>{datadetailbuku.description}</p>
          <button className={styles.loanButton} onClick={togglePopup}>
            Ajukan Peminjaman
          </button>
        </div>
      </div>
      
      {showPopup && <PopUpDetailBuku closePopup={togglePopup} />}
    </div>
  );
}

export default DetailBuku;
