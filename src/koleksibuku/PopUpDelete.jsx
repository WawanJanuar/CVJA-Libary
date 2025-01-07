import React from "react";

const PopUpDelete = ({ onClose }) => {
  return (
    <div className="popup-invoice">
      <div className="popup-content">
        <h2>Invoice</h2>
        <p>Detail invoice akan ditampilkan di sini.</p>
        <button onClick={onClose}>Tutup</button>
      </div>
    </div>
  );
};

export default PopUpDelete;
