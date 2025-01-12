import React from 'react';
import Nav from '../nav/Nav'
import './dasnonlog.css';
import bg from "../Resource/the-psychology-of-money.png"

const Dashnonlog = () => {

    const buku = [
        {
            id: 1,
            judul: "The Psychology of Mo...",
            penerbit: "Morgan House",
            cover: bg
        },
        {
            id: 2,
            judul: "The Lord of the Rings",
            penerbit: "J.R.R. Tolken",
            cover: bg
        },
        {
            id: 3,
            judul: "Atomic Habits",
            penerbit: "James Clear",
            cover: bg
        },
        {
            id: 4,
            judul: "The Popy War",
            penerbit: "R.F Kuang",
            cover: bg
        }
    ]

    return (
        <>
        <Nav />
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Library Dashboard</h1>
                <p>Temukan Koleksi Buku Terbaik Kami Yang Terbagi Menjadi Dua Kategori Utama: 
                   Fiksi Untuk Membawa Anda Ke Dunia Imajinasi, Dan Nonfiksi Untuk Memperluas Wawasan Anda.</p>
            </header>
            <section className="recommended-section">
                <h2>Recommended</h2>
                <div className="book-list">
                    {buku.map((buku) => (
                        <div 
                        key={buku.id}
                        className="book-card">
                        <img 
                        src={buku.cover}
                        alt={buku.judul}
                        />
                        <h3>{buku.judul}</h3>
                        <p>{buku.penerbit}</p>
                    </div>
                    ))}
                </div>
            </section>
        </div>
        </>
    );
};

export default Dashnonlog;