import { useNavigate } from "react-router-dom";
import styles from "./koleksibuku.module.css";
import datadetailbuku from "../data/datadetailbuku";
// import { View } from "lucide-react";
import viewbtn from "../Resource/view.png";
import deletebtn from "../Resource/Delete.png";
import NavDetailBuku from "../nav/NavDetailBuku";

function KoleksiBuku() {
  const navigate = useNavigate();

  return (
    <div className={styles.koleksiBukuContainer}>
      < NavDetailBuku />
      <h1 className={styles.title}>Koleksi Buku</h1>
      <div className={styles.bookCardContainer}>
        {/* Box 1 */}
        <div className={styles.bookCard}>
          <div className={styles.bookCardBody}>
            <div className={styles.bookCardleft}>
              <img
                src={datadetailbuku.gambar1}
                alt="The Psychology of Money"
                className={styles.bookImage}
              />
            </div>
            <div className={styles.bookCardRight}>
              <p className={styles.dueDate}>Exp: 04 Des 2024</p>
              <h3 className={styles.bookTitle}>The Psychology of Money</h3>
              <p className={styles.bookAuthor}>Morgan Housel</p>
              <div className={styles.bookActions}>
                <img src={viewbtn} className={styles.actionButton}></img>
                <img src={deletebtn} className={styles.actionButton}></img>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tambahBookCard}>
          <button
            className={styles.addButton}
            onClick={() => navigate("/")}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default KoleksiBuku;