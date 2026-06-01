import { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Settings() {

    const [storeName, setStoreName] = useState("PC Marketplace");
    const [email, setEmail] = useState("admin@pcstore.com");
    const [phone, setPhone] = useState("081234567890");
    const [address, setAddress] = useState("Purwokerto, Jawa Tengah");

    return (
        <AdminLayout>

            <div className="space-y-8">

                <div>

                    <h1 className="text-5xl font-black mb-2">
                        ⚙️ Pengaturan Toko
                    </h1>

                    <p className="text-gray-500">
                        Kelola informasi marketplace dan akun admin
                    </p>

                </div>

                {/* CARD INFO */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white rounded-3xl shadow-xl p-8">

                        <h2 className="text-gray-500">
                            Total Produk
                        </h2>

                        <p className="text-5xl font-black mt-3">
                            150
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8">

                        <h2 className="text-gray-500">
                            Customer
                        </h2>

                        <p className="text-5xl font-black mt-3 text-blue-500">
                            350
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8">

                        <h2 className="text-gray-500">
                            Pendapatan
                        </h2>

                        <p className="text-5xl font-black mt-3 text-green-500">
                            Rp 500JT
                        </p>

                    </div>

                </div>

                {/* PROFILE */}
                <div className="bg-white rounded-3xl shadow-xl p-8">

                    <h2 className="text-3xl font-bold mb-6">
                        👤 Profil Toko
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>

                            <label className="font-bold">
                                Nama Toko
                            </label>

                            <input
                                type="text"
                                value={storeName}
                                onChange={(e) =>
                                    setStoreName(e.target.value)
                                }
                                className="w-full border p-4 rounded-xl mt-2"
                            />

                        </div>

                        <div>

                            <label className="font-bold">
                                Email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                className="w-full border p-4 rounded-xl mt-2"
                            />

                        </div>

                        <div>

                            <label className="font-bold">
                                No HP
                            </label>

                            <input
                                type="text"
                                value={phone}
                                onChange={(e) =>
                                    setPhone(e.target.value)
                                }
                                className="w-full border p-4 rounded-xl mt-2"
                            />

                        </div>

                        <div>

                            <label className="font-bold">
                                Alamat
                            </label>

                            <input
                                type="text"
                                value={address}
                                onChange={(e) =>
                                    setAddress(e.target.value)
                                }
                                className="w-full border p-4 rounded-xl mt-2"
                            />

                        </div>

                    </div>

                    <button className="mt-6 bg-black text-white px-8 py-4 rounded-xl">
                        Simpan Perubahan
                    </button>

                </div>

                {/* PASSWORD */}
                <div className="bg-white rounded-3xl shadow-xl p-8">

                    <h2 className="text-3xl font-bold mb-6">
                        🔒 Ubah Password
                    </h2>

                    <div className="space-y-4">

                        <input
                            type="password"
                            placeholder="Password Lama"
                            className="w-full border p-4 rounded-xl"
                        />

                        <input
                            type="password"
                            placeholder="Password Baru"
                            className="w-full border p-4 rounded-xl"
                        />

                        <input
                            type="password"
                            placeholder="Konfirmasi Password Baru"
                            className="w-full border p-4 rounded-xl"
                        />

                    </div>

                    <button className="mt-6 bg-red-500 text-white px-8 py-4 rounded-xl">
                        Update Password
                    </button>

                </div>

            </div>

        </AdminLayout>
    );
}