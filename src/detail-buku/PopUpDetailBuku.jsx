import React from "react";
import styles from "./popupdetailbuku.module.css"
import datadetailbuku from "../data/datadetailbuku";
import { useNavigate } from "react-router-dom";
import backiconinvoice from "../Resource/back-icon-invoice.png"

function PopUpDetailBuku({ closePopup }) {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/Koleksi-Buku");
  };

  return (
    <div className={styles.popupDetailOverlay}>
      <div className={styles.popupDetailContainer}>
        <img src={backiconinvoice} className={styles.backBtn} onClick={closePopup} />
        <h2 className={styles.popupTitle}>PB-PSK-20241201-001</h2>
        <div className={styles.titleDivider}></div>
        <div className={styles.popupContentBuku}>
          {/* Kolom 1 */}
          <div className={`${styles.column} ${styles.borrowerInfo}`}>
            <div className={styles.dipinjamOlehInvoice}>
              <h3>Dipinjam oleh</h3>
              <p>Valentino</p>
              <p>+62 821 - 6351 - 0121</p>
              <p>Valentino@students.mikroskil.ac.id</p>
            </div>
            <div className={styles.judulBukuInvoice}>
              <h3>Judul Buku</h3>
              <p>The Psychology of Money</p>
            </div>
            <div className={styles.penerbitInvoice}>
              <h3>Penerbit</h3>
              <p>Morgan Housel</p>
            </div>
            <div className={styles.kategoriInvoice}>
              <h3>Kategori</h3>
              <p>Non - Fiksi</p>
            </div>
          </div>
          {/* Kolom 2 */}
          <div className={`${styles.column} ${styles.bookDetails}`}>
            <div className={styles.tanggalInvoice}>
              <h3>Tanggal Peminjaman</h3>
              <p>01 Desember 2024</p>
              <h3>Tanggal Jatuh Tempo</h3>
              <p>04 Desember 2024</p>
            </div>
            <img src={datadetailbuku.gambar1} alt="The Psychology of Money" className={styles.bookImageInvoice} />
            <button className={styles.confirmBtn} onClick={handleConfirm}>Konfirmasi</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUpDetailBuku;