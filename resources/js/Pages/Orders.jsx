import { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Orders() {

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("Semua");
    const [selectedOrder, setSelectedOrder] = useState(null);

    const [orders, setOrders] = useState([
        {
            id: "ORD001",
            customer: "Abiyyu",
            product: "RTX 4060",
            total: 8000000,
            status: "Diproses",
            payment: "Lunas",
            date: "03/06/2026",
        },
        {
            id: "ORD002",
            customer: "Dzaky",
            product: "ASUS ROG",
            total: 15000000,
            status: "Dikirim",
            payment: "Pending",
            date: "03/06/2026",
        },
        {
            id: "ORD003",
            customer: "Rizky",
            product: "Ryzen 7 5800X",
            total: 5000000,
            status: "Selesai",
            payment: "Lunas",
            date: "02/06/2026",
        },
    ]);

    const formatRupiah = (angka) => {
        return "Rp " + angka.toLocaleString("id-ID");
    };

    const tambahPesanan = () => {

        const customer = prompt("Nama Customer");
        if (!customer) return;

        const product = prompt("Nama Produk");
        if (!product) return;

        const total = prompt("Total Harga");
        if (!total) return;

        const newOrder = {
            id: "ORD" + Math.floor(Math.random() * 9999),
            customer,
            product,
            total: Number(total),
            status: "Diproses",
            payment: "Pending",
            date: new Date().toLocaleDateString(),
        };

        setOrders([...orders, newOrder]);
    };

    const hapusPesanan = (id) => {

        if (window.confirm("Yakin ingin menghapus pesanan ini?")) {

            setOrders(
                orders.filter((order) => order.id !== id)
            );

        }

    };

    const updateStatus = (id, status) => {

        setOrders(
            orders.map((order) =>
                order.id === id
                    ? { ...order, status }
                    : order
            )
        );

    };

    const detailPesanan = (order) => {
        setSelectedOrder(order);
    };

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

    const totalPendapatan = orders.reduce(
        (total, item) => total + item.total,
        0
    );

    return (

        <AdminLayout>

            <div className="space-y-8">

                {/* HEADER */}
                <div className="flex justify-between items-center">

                    <div>

                        <h1 className="text-4xl font-bold">
                            Manajemen Pesanan
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Kelola transaksi marketplace
                        </p>

                    </div>

                    <button
                        onClick={tambahPesanan}
                        className="bg-black text-white px-6 py-3 rounded-xl"
                    >
                        + Tambah Pesanan
                    </button>

                </div>

                {/* CARD */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

                    <div className="bg-white border rounded-3xl p-6">

                        <p className="text-gray-500 text-sm">
                            Total Pesanan
                        </p>

                        <h2 className="text-4xl font-bold mt-2">
                            {orders.length}
                        </h2>

                    </div>

                    <div className="bg-white border rounded-3xl p-6">

                        <p className="text-gray-500 text-sm">
                            Diproses
                        </p>

                        <h2 className="text-4xl font-bold mt-2">
                            {
                                orders.filter(
                                    (o) => o.status === "Diproses"
                                ).length
                            }
                        </h2>

                    </div>

                    <div className="bg-white border rounded-3xl p-6">

                        <p className="text-gray-500 text-sm">
                            Dikirim
                        </p>

                        <h2 className="text-4xl font-bold mt-2">
                            {
                                orders.filter(
                                    (o) => o.status === "Dikirim"
                                ).length
                            }
                        </h2>

                    </div>

                    <div className="bg-white border rounded-3xl p-6">

                        <p className="text-gray-500 text-sm">
                            Selesai
                        </p>

                        <h2 className="text-4xl font-bold mt-2">
                            {
                                orders.filter(
                                    (o) => o.status === "Selesai"
                                ).length
                            }
                        </h2>

                    </div>

                    <div className="bg-white border rounded-3xl p-6">

                        <p className="text-gray-500 text-sm">
                            Pendapatan
                        </p>

                        <h2 className="text-2xl font-bold mt-2">
                            {formatRupiah(totalPendapatan)}
                        </h2>

                    </div>

                </div>

                {/* FILTER */}
                <div className="bg-white border rounded-3xl p-6">

                    <div className="flex flex-col md:flex-row gap-4">

                        <input
                            type="text"
                            placeholder="Cari customer..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            className="flex-1 border rounded-xl p-4"
                        />

                        <select
                            value={filter}
                            onChange={(e) =>
                                setFilter(e.target.value)
                            }
                            className="border rounded-xl p-4"
                        >
                            <option>Semua</option>
                            <option>Diproses</option>
                            <option>Dikirim</option>
                            <option>Selesai</option>
                            <option>Dibatalkan</option>
                        </select>

                    </div>

                </div>

                {/* TABLE */}
                <div className="bg-white border rounded-3xl overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="p-5 text-left">
                                    ID
                                </th>

                                <th className="p-5 text-left">
                                    Customer
                                </th>

                                <th className="p-5 text-left">
                                    Produk
                                </th>

                                <th className="p-5 text-left">
                                    Total
                                </th>

                                <th className="p-5 text-left">
                                    Payment
                                </th>

                                <th className="p-5 text-left">
                                    Status
                                </th>

                                <th className="p-5 text-left">
                                    Tanggal
                                </th>

                                <th className="p-5 text-center">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredOrders.map((order) => (

                                <tr
                                    key={order.id}
                                    className="border-b hover:bg-gray-50"
                                >

                                    <td className="p-5">
                                        {order.id}
                                    </td>

                                    <td className="p-5 font-medium">
                                        {order.customer}
                                    </td>

                                    <td className="p-5">
                                        {order.product}
                                    </td>

                                    <td className="p-5">
                                        {formatRupiah(order.total)}
                                    </td>

                                    <td className="p-5">
                                        {order.payment}
                                    </td>

                                    <td className="p-5">

                                        <select
                                            value={order.status}
                                            onChange={(e) =>
                                                updateStatus(
                                                    order.id,
                                                    e.target.value
                                                )
                                            }
                                            className="border rounded-lg px-3 py-2"
                                        >
                                            <option>Diproses</option>
                                            <option>Dikirim</option>
                                            <option>Selesai</option>
                                            <option>Dibatalkan</option>
                                        </select>

                                    </td>

                                    <td className="p-5">
                                        {order.date}
                                    </td>

                                    <td className="p-5">

                                        <div className="flex justify-center gap-2">

                                            <button
                                                onClick={() =>
                                                    detailPesanan(order)
                                                }
                                                className="border px-4 py-2 rounded-xl"
                                            >
                                                Detail
                                            </button>

                                            <button
                                                onClick={() =>
                                                    hapusPesanan(order.id)
                                                }
                                                className="bg-black text-white px-4 py-2 rounded-xl"
                                            >
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

            {selectedOrder && (

<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

    <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-8">

        <h2 className="text-3xl font-bold text-center mb-8">
            Detail Pesanan
        </h2>

        <div className="space-y-4">

            <div className="flex justify-between border-b pb-3">
                <span className="font-medium">ID Pesanan</span>
                <span>{selectedOrder.id}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
                <span className="font-medium">Customer</span>
                <span>{selectedOrder.customer}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
                <span className="font-medium">Produk</span>
                <span>{selectedOrder.product}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
                <span className="font-medium">Total</span>
                <span>
                    {formatRupiah(selectedOrder.total)}
                </span>
            </div>

            <div className="flex justify-between border-b pb-3">
                <span className="font-medium">Pembayaran</span>
                <span>{selectedOrder.payment}</span>
            </div>

            <div className="flex justify-between border-b pb-3">
                <span className="font-medium">Status</span>

                <span className="px-3 py-1 rounded-full bg-gray-100 text-sm">
                    {selectedOrder.status}
                </span>
            </div>

            <div className="flex justify-between">
                <span className="font-medium">Tanggal</span>
                <span>{selectedOrder.date}</span>
            </div>

        </div>

        <button
            onClick={() => setSelectedOrder(null)}
            className="w-full mt-8 bg-black text-white py-3 rounded-xl hover:bg-gray-800"
        >
            Tutup
        </button>

    </div>

</div>

)}

        </AdminLayout>

    );

}