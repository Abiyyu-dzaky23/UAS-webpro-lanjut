import { useState, useEffect } from "react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function AdminDashboard() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    const activities = [
        {
            title: "Customer baru mendaftar",
            time: "5 menit lalu",
        },
        {
            title: "Pesanan RTX 4060 masuk",
            time: "10 menit lalu",
        },
        {
            title: "Pengiriman ORD001 selesai",
            time: "20 menit lalu",
        },
        {
            title: "Produk ASUS ROG ditambahkan",
            time: "1 jam lalu",
        },
        {
            title: "Customer melakukan pembayaran",
            time: "2 jam lalu",
        },
    ];

    const lowStockProducts = [
        {
            name: "RTX 4060",
            stock: 3,
        },
        {
            name: "ASUS ROG",
            stock: 2,
        },
        {
            name: "Ryzen 7 5800X",
            stock: 5,
        },
    ];

    const topProducts = [
        {
            name: "RTX 4060",
            sold: 320,
        },
        {
            name: "ASUS ROG",
            sold: 180,
        },
        {
            name: "Ryzen 7",
            sold: 140,
        },
    ];

    return (

        <AdminLayout>

            <div className="space-y-8">

                {/* HEADER */}
                <div className="bg-white border rounded-3xl p-8 shadow-sm">

                    <h1 className="text-4xl font-bold text-slate-900">
                        Dashboard
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Monitoring aktivitas marketplace
                    </p>

                </div>

                {/* STATISTIK */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    <div className="bg-white border rounded-3xl p-6 shadow-sm">
                        <p className="text-slate-500 text-sm">
                            Total Produk
                        </p>
                        <h2 className="text-4xl font-bold mt-3">
                            150
                        </h2>
                    </div>

                    <div className="bg-white border rounded-3xl p-6 shadow-sm">
                        <p className="text-slate-500 text-sm">
                            Total Customer
                        </p>
                        <h2 className="text-4xl font-bold mt-3">
                            350
                        </h2>
                    </div>

                    <div className="bg-white border rounded-3xl p-6 shadow-sm">
                        <p className="text-slate-500 text-sm">
                            Total Pesanan
                        </p>
                        <h2 className="text-4xl font-bold mt-3">
                            320
                        </h2>
                    </div>

                    <div className="bg-white border rounded-3xl p-6 shadow-sm">
                        <p className="text-slate-500 text-sm">
                            Pengiriman Aktif
                        </p>
                        <h2 className="text-4xl font-bold mt-3">
                            45
                        </h2>
                    </div>

                    <div className="bg-white border rounded-3xl p-6 shadow-sm">
                        <p className="text-slate-500 text-sm">
                            Pesanan Hari Ini
                        </p>
                        <h2 className="text-4xl font-bold mt-3">
                            25
                        </h2>
                    </div>

                    <div className="bg-white border rounded-3xl p-6 shadow-sm">
                        <p className="text-slate-500 text-sm">
                            Pendapatan
                        </p>
                        <h2 className="text-3xl font-bold mt-3">
                            Rp 250 JT
                        </h2>
                    </div>

                </div>

                {/* STATUS ORDER */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-white border rounded-3xl p-6">
                        <p className="text-gray-500">
                            Diproses
                        </p>
                        <h2 className="text-4xl font-bold mt-2">
                            45
                        </h2>
                    </div>

                    <div className="bg-white border rounded-3xl p-6">
                        <p className="text-gray-500">
                            Dikirim
                        </p>
                        <h2 className="text-4xl font-bold mt-2">
                            28
                        </h2>
                    </div>

                    <div className="bg-white border rounded-3xl p-6">
                        <p className="text-gray-500">
                            Selesai
                        </p>
                        <h2 className="text-4xl font-bold mt-2">
                            210
                        </h2>
                    </div>

                    <div className="bg-white border rounded-3xl p-6">
                        <p className="text-gray-500">
                            Dibatalkan
                        </p>
                        <h2 className="text-4xl font-bold mt-2">
                            12
                        </h2>
                    </div>

                </div>

                {/* MENU */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    <a
                        href="/admin/products"
                        className="bg-white border rounded-3xl p-8 text-center hover:shadow-md transition"
                    >
                        <div className="text-3xl mb-3">🖥️</div>
                        <h2 className="font-semibold">Produk</h2>
                    </a>

                    <a
                        href="/admin/orders"
                        className="bg-white border rounded-3xl p-8 text-center hover:shadow-md transition"
                    >
                        <div className="text-3xl mb-3">📦</div>
                        <h2 className="font-semibold">Pesanan</h2>
                    </a>

                    <a
                        href="/admin/shipping"
                        className="bg-white border rounded-3xl p-8 text-center hover:shadow-md transition"
                    >
                        <div className="text-3xl mb-3">🚚</div>
                        <h2 className="font-semibold">Pengiriman</h2>
                    </a>

                    <a
                        href="/admin/users"
                        className="bg-white border rounded-3xl p-8 text-center hover:shadow-md transition"
                    >
                        <div className="text-3xl mb-3">👥</div>
                        <h2 className="font-semibold">Customer</h2>
                    </a>

                </div>

                {/* PRODUK TERLARIS */}
                <div className="bg-white border rounded-3xl p-8 shadow-sm">

                    <h2 className="text-2xl font-bold mb-6">
                        Produk Terlaris
                    </h2>

                    <div className="space-y-4">

                        {topProducts.map((product, index) => (

                            <div
                                key={index}
                                className="flex justify-between border-b pb-3"
                            >
                                <span>{product.name}</span>

                                <span className="font-medium">
                                    {product.sold} Terjual
                                </span>
                            </div>

                        ))}

                    </div>

                </div>

                {/* AKTIVITAS & STOK */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <div className="bg-white border rounded-3xl p-8 shadow-sm">

                        <h2 className="text-2xl font-bold mb-6">
                            Aktivitas Terbaru
                        </h2>

                        <div className="space-y-4">

                            {activities.map((item, index) => (

                                <div
                                    key={index}
                                    className="border rounded-2xl p-4 hover:bg-gray-50 cursor-pointer transition"
                                >

                                    <p className="font-medium">
                                        {item.title}
                                    </p>

                                    <p className="text-sm text-gray-500 mt-1">
                                        {item.time}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                    <div className="bg-white border rounded-3xl p-8 shadow-sm">

                        <h2 className="text-2xl font-bold mb-6">
                            Produk Stok Menipis
                        </h2>

                        <div className="space-y-4">

                            {lowStockProducts.map((product, index) => (

                                <div
                                    key={index}
                                    className="flex justify-between items-center border-b pb-3"
                                >

                                    <span className="font-medium">
                                        {product.name}
                                    </span>

                                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                        {product.stock} Stok
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </AdminLayout>

    );

}