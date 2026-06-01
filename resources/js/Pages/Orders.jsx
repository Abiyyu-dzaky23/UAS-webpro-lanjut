import { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Orders() {

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("Semua");

    const orders = [
        {
            id: "ORD001",
            customer: "Abiyyu",
            product: "RTX 4060",
            total: "Rp 8.000.000",
            status: "Diproses",
            payment: "Lunas",
        },
        {
            id: "ORD002",
            customer: "Dzaky",
            product: "ASUS ROG",
            total: "Rp 15.000.000",
            status: "Dikirim",
            payment: "Pending",
        },
        {
            id: "ORD003",
            customer: "Rizky",
            product: "Ryzen 7",
            total: "Rp 5.000.000",
            status: "Selesai",
            payment: "Lunas",
        },
    ];

    const filteredOrders = orders.filter((order) => {

        const cocokSearch =
            order.customer
                .toLowerCase()
                .includes(search.toLowerCase());

        const cocokFilter =
            filter === "Semua"
                ? true
                : order.status === filter;

        return cocokSearch && cocokFilter;

    });

    return (

        <AdminLayout>

            {/* HEADER */}
            <div className="flex justify-between items-center mb-10">

                <div>

                    <h1 className="text-5xl font-black mb-2">
                        📦 Data Pesanan
                    </h1>

                    <p className="text-gray-500">
                        Kelola seluruh transaksi marketplace
                    </p>

                </div>

                <button className="bg-black text-white px-6 py-3 rounded-2xl shadow-xl hover:scale-105 transition">
                    + Tambah Pesanan
                </button>

            </div>

            {/* CARD */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-3xl shadow-xl">

                    <h2 className="text-xl font-semibold">
                        Total Pesanan
                    </h2>

                    <p className="text-5xl font-black mt-4">
                        {orders.length}
                    </p>

                </div>

                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-3xl shadow-xl">

                    <h2 className="text-xl font-semibold">
                        Diproses
                    </h2>

                    <p className="text-5xl font-black mt-4">
                        {
                            orders.filter(
                                (o) => o.status === "Diproses"
                            ).length
                        }
                    </p>

                </div>

                <div className="bg-gradient-to-r from-green-500 to-emerald-700 text-white p-8 rounded-3xl shadow-xl">

                    <h2 className="text-xl font-semibold">
                        Selesai
                    </h2>

                    <p className="text-5xl font-black mt-4">
                        {
                            orders.filter(
                                (o) => o.status === "Selesai"
                            ).length
                        }
                    </p>

                </div>

                <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 rounded-3xl shadow-xl">

                    <h2 className="text-xl font-semibold">
                        Pendapatan
                    </h2>

                    <p className="text-4xl font-black mt-4">
                        Rp 28JT
                    </p>

                </div>

            </div>

            {/* SEARCH */}
            <div className="bg-white rounded-3xl shadow-xl p-6 mb-10">

                <div className="flex flex-col md:flex-row gap-4">

                    <input
                        type="text"
                        placeholder="🔍 Cari customer..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 p-4 rounded-2xl border border-gray-200"
                    />

                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="p-4 rounded-2xl border border-gray-200"
                    >

                        <option>Semua</option>
                        <option>Diproses</option>
                        <option>Dikirim</option>
                        <option>Selesai</option>

                    </select>

                </div>

            </div>

            {/* TABLE */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[1200px]">

                        <thead className="bg-black text-white">

                            <tr>

                                <th className="p-5 text-left">ID Order</th>
                                <th className="p-5 text-left">Customer</th>
                                <th className="p-5 text-left">Produk</th>
                                <th className="p-5 text-left">Total</th>
                                <th className="p-5 text-left">Payment</th>
                                <th className="p-5 text-left">Status</th>
                                <th className="p-5 text-center">Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredOrders.map((order) => (

                                <tr
                                    key={order.id}
                                    className="border-b hover:bg-gray-50 transition"
                                >

                                    <td className="p-5 font-bold">
                                        {order.id}
                                    </td>

                                    <td className="p-5">
                                        {order.customer}
                                    </td>

                                    <td className="p-5">
                                        {order.product}
                                    </td>

                                    <td className="p-5 font-bold text-green-600">
                                        {order.total}
                                    </td>

                                    <td className="p-5">

                                        <span
                                            className={
                                                order.payment === "Lunas"
                                                    ? "bg-green-500 text-white px-4 py-2 rounded-full text-sm"
                                                    : "bg-red-500 text-white px-4 py-2 rounded-full text-sm"
                                            }
                                        >
                                            {order.payment}
                                        </span>

                                    </td>

                                    <td className="p-5">

                                        <span
                                            className={
                                                order.status === "Selesai"
                                                    ? "bg-green-500 text-white px-4 py-2 rounded-full text-sm"
                                                    : order.status === "Dikirim"
                                                    ? "bg-blue-500 text-white px-4 py-2 rounded-full text-sm"
                                                    : "bg-yellow-500 text-white px-4 py-2 rounded-full text-sm"
                                            }
                                        >
                                            {order.status}
                                        </span>

                                    </td>

                                    <td className="p-5">

                                        <div className="flex justify-center gap-2">

                                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl">
                                                Detail
                                            </button>

                                            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl">
                                                Hapus
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </AdminLayout>

    );
}