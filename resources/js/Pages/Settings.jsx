import { useState, useEffect } from "react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Settings() {

    const [storeName, setStoreName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {

        const data = JSON.parse(
            localStorage.getItem("settings")
        );

        if (data) {

            setStoreName(data.storeName);
            setEmail(data.email);
            setPhone(data.phone);
            setAddress(data.address);

        } else {

            setStoreName("PC Marketplace");
            setEmail("admin@pcstore.com");
            setPhone("081234567890");
            setAddress("Purwokerto, Jawa Tengah");

        }

    }, []);

    const simpanPerubahan = () => {

        localStorage.setItem(
            "settings",
            JSON.stringify({
                storeName,
                email,
                phone,
                address,
            })
        );

        alert("Pengaturan berhasil disimpan!");

    };

    const updatePassword = () => {

        if (
            !oldPassword ||
            !newPassword ||
            !confirmPassword
        ) {
            alert("Lengkapi semua password");
            return;
        }

        if (
            newPassword !== confirmPassword
        ) {
            alert("Konfirmasi password tidak cocok");
            return;
        }

        alert("Password berhasil diperbarui");

        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");

    };

    return (

        <AdminLayout>

            <div className="space-y-8">

                <div className="bg-white border rounded-3xl p-8 shadow-sm">

                    <h1 className="text-4xl font-bold">
                        Pengaturan Toko
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Kelola informasi marketplace dan akun admin
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white border rounded-3xl p-6">

                        <p className="text-gray-500">
                            Total Produk
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            150
                        </h2>

                    </div>

                    <div className="bg-white border rounded-3xl p-6">

                        <p className="text-gray-500">
                            Customer
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            350
                        </h2>

                    </div>

                    <div className="bg-white border rounded-3xl p-6">

                        <p className="text-gray-500">
                            Pendapatan
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            Rp 500JT
                        </h2>

                    </div>

                </div>

                <div className="bg-white border rounded-3xl p-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Profil Toko
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>

                            <label className="block mb-2 font-medium">
                                Nama Toko
                            </label>

                            <input
                                type="text"
                                value={storeName}
                                onChange={(e) =>
                                    setStoreName(
                                        e.target.value
                                    )
                                }
                                className="w-full border rounded-xl p-4"
                            />

                        </div>

                        <div>

                            <label className="block mb-2 font-medium">
                                Email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(
                                        e.target.value
                                    )
                                }
                                className="w-full border rounded-xl p-4"
                            />

                        </div>

                        <div>

                            <label className="block mb-2 font-medium">
                                No HP
                            </label>

                            <input
                                type="text"
                                value={phone}
                                onChange={(e) =>
                                    setPhone(
                                        e.target.value
                                    )
                                }
                                className="w-full border rounded-xl p-4"
                            />

                        </div>

                        <div>

                            <label className="block mb-2 font-medium">
                                Alamat
                            </label>

                            <input
                                type="text"
                                value={address}
                                onChange={(e) =>
                                    setAddress(
                                        e.target.value
                                    )
                                }
                                className="w-full border rounded-xl p-4"
                            />

                        </div>

                    </div>

                    <button
                        onClick={simpanPerubahan}
                        className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800"
                    >
                        Simpan Perubahan
                    </button>

                </div>

                <div className="bg-white border rounded-3xl p-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Ubah Password
                    </h2>

                    <div className="space-y-4">

                        <input
                            type="password"
                            placeholder="Password Lama"
                            value={oldPassword}
                            onChange={(e) =>
                                setOldPassword(
                                    e.target.value
                                )
                            }
                            className="w-full border rounded-xl p-4"
                        />

                        <input
                            type="password"
                            placeholder="Password Baru"
                            value={newPassword}
                            onChange={(e) =>
                                setNewPassword(
                                    e.target.value
                                )
                            }
                            className="w-full border rounded-xl p-4"
                        />

                        <input
                            type="password"
                            placeholder="Konfirmasi Password Baru"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(
                                    e.target.value
                                )
                            }
                            className="w-full border rounded-xl p-4"
                        />

                    </div>

                    <button
                        onClick={updatePassword}
                        className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800"
                    >
                        Update Password
                    </button>

                </div>

            </div>

        </AdminLayout>

    );
}