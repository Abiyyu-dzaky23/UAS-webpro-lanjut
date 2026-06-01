import { useState, useEffect } from "react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function AdminDashboard() {

    const [notifications] = useState([
        "Pesanan baru RTX 5090 masuk",
        "Customer melakukan pembayaran",
        "Pengiriman berhasil diupdate",
    ]);

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (

        <AdminLayout>

            <div className="space-y-8">

                {/* HEADER */}
                <div className="bg-white rounded-3xl p-8 shadow-xl">

                    <h1 className="text-5xl font-black text-blue-700 mb-3">
                        Dashboard Marketplace
                    </h1>

                    <p className="text-gray-500">
                        Monitoring seluruh aktivitas marketplace
                    </p>

                    <p className="text-blue-600 font-bold mt-3">
                        {time.toLocaleDateString()} • {time.toLocaleTimeString()}
                    </p>

                </div>

                {/* CARD */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-3xl shadow-xl">
                        <h2>Total Produk</h2>
                        <p className="text-5xl font-black mt-4">150</p>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-3xl shadow-xl">
                        <h2>Total Pesanan</h2>
                        <p className="text-5xl font-black mt-4">320</p>
                    </div>

                    <div className="bg-gradient-to-r from-green-500 to-emerald-700 text-white p-8 rounded-3xl shadow-xl">
                        <h2>Pengiriman</h2>
                        <p className="text-5xl font-black mt-4">45</p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 rounded-3xl shadow-xl">
                        <h2>Pendapatan</h2>
                        <p className="text-4xl font-black mt-4">
                            Rp 250JT
                        </p>
                    </div>

                </div>

                {/* QUICK MENU */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    <a
                        href="/admin/orders"
                        className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition text-center"
                    >
                        <div className="text-5xl mb-3">📦</div>
                        <h2 className="font-bold text-xl">
                            Pesanan
                        </h2>
                    </a>

                    <a
                        href="/admin/shipping"
                        className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition text-center"
                    >
                        <div className="text-5xl mb-3">🚚</div>
                        <h2 className="font-bold text-xl">
                            Pengiriman
                        </h2>
                    </a>

                    <a
                        href="/admin/users"
                        className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition text-center"
                    >
                        <div className="text-5xl mb-3">👥</div>
                        <h2 className="font-bold text-xl">
                            Customer
                        </h2>
                    </a>

                    <a
                        href="/admin/reports"
                        className="bg-white p-8 rounded-3xl shadow-xl hover:scale-105 transition text-center"
                    >
                        <div className="text-5xl mb-3">📊</div>
                        <h2 className="font-bold text-xl">
                            Laporan
                        </h2>
                    </a>

                </div>

                {/* NOTIFIKASI */}
                <div className="bg-white rounded-3xl shadow-xl p-8">

                    <h2 className="text-3xl font-black mb-6">
                        🔔 Notifikasi Realtime
                    </h2>

                    <div className="space-y-4">

                        {notifications.map((notif, index) => (

                            <div
                                key={index}
                                className="bg-blue-50 border-l-8 border-blue-500 p-5 rounded-2xl"
                            >
                                {notif}
                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </AdminLayout>

    );
}