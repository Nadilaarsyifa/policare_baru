import "dotenv/config"; // Mengimpor konfigurasi dari file .env

import { db } from "./configs/db.js"; // Mengimpor koneksi database dari file konfigurasi

// Data pengguna (users) yang akan dimasukkan ke database
const users = [
  {
    username: "2023573010040",
    password: "$2b$10$vD5yRWdxLp1j6riuSi/Ozu71x145viXeGC7AHT5R0WcycGalmYTae", // Kata sandi yang sudah dienkripsi
    nama: "nadila arsyifa",
    jenisKelamin: "perempuan",
    tglLahir: "1995-05-21",
    alamat: "Jl. Merdeka No. 123",
    noHp: "081234567890",
    role: "civitas_akademika", // Role ini hanya mencakup 3 opsi: petugas_klinik, civitas_akademika, dan admin
    avatar: "https://g.codewithnathan.com/default-user.png",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    username: "2023573010042",
    password: "$2b$10$vD5yRWdxLp1j6riuSi/Ozu71x145viXeGC7AHT5R0WcycGalmYTae", // Kata sandi yang sudah dienkripsi
    nama: "raudhatul husna",
    jenisKelamin: "perempuan",
    tglLahir: "1995-05-21",
    alamat: "Jl. Merdeka No. 123",
    noHp: "081234567890",
    role: "civitas_akademika", // Role ini hanya mencakup 3 opsi: petugas_klinik, civitas_akademika, dan admin
    avatar: "https://g.codewithnathan.com/default-user.png",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

try {
  // Memasukkan data pengguna ke koleksi "users"
  let collection = db.collection("users");
  console.log("[seed]", "Memasukkan data pengguna...");
  const result = await collection.insertMany(users);
  console.log(result.insertedIds);
  console.log("[seed]", "Data pengguna berhasil dimasukkan");

  console.log("[seed]", "Semua data berhasil dimasukkan");
} catch (error) {
  console.log("[seed]", "Kesalahan: ", error);
}

process.exit(); // Keluar dari proses setelah selesai
