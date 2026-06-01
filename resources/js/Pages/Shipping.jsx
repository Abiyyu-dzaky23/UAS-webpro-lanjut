import { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Shipping() {

    const [shipping, setShipping] = useState([
        {
            id: 1,
            resi: "JNE001",
            customer: "Abiyyu",
            courier: "JNE",
            product: "RTX 4060",
            status: "Dikirim",
        },
        {
            id: 2,
            resi: "JNT002",
            customer: "Dzaky",
            courier: "J&T",
            product: "Laptop ASUS ROG",
            status: "Sampai",
        },
        {
            id: 3,
            resi: "SICEPAT003",
            customer: "Rafly",
            courier: "SiCepat",
            product: "Ryzen 7",
            status: "Diproses",
        },
    ]);

    const updateStatus = (id, statusBaru) => {

        setShipping(
            shipping.map((item) =>
                item.id === id
                    ? { ...item, status: statusBaru }
                    : item
            )
        );
    };

    return (
        <AdminLayout>

            <div className="space-y-8">

                {/* HEADER */}
                <div>

                    <h1 className="text-5xl font-black mb-2">
                        🚚 Data Pengiriman
                    </h1>

                    <p className="text-gray-500">
                        Monitoring status pengiriman customer
                    </p>

                </div>

                {/* CARD */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white rounded-3xl shadow-xl p-8">

                        <h2 className="text-gray-500 text-xl">
                            Total Pengiriman
                        </h2>

                        <p className="text-5xl font-black mt-4">
                            200
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8">

                        <h2 className="text-gray-500 text-xl">
                            Sedang Dikirim
                        </h2>

                        <p className="text-5xl font-black mt-4 text-yellow-500">
                            45
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8">

                        <h2 className="text-gray-500 text-xl">
                            Paket Sampai
                        </h2>

                        <p className="text-5xl font-black mt-4 text-green-500">
                            155
                        </p>

                    </div>

                </div>

                {/* TABLE */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-black text-white">

                            <tr>

                                <th className="p-5 text-left">
                                    Resi
                                </th>

                                <th className="p-5 text-left">
                                    Customer
                                </th>

                                <th className="p-5 text-left">
                                    Kurir
                                </th>

                                <th className="p-5 text-left">
                                    Produk
                                </th>

                                <th className="p-5 text-left">
                                    Status
                                </th>

                                <th className="p-5 text-center">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {shipping.map((item) => (

                                <tr
                                    key={item.id}
                                    className="border-b hover:bg-gray-50"
                                >

                                    <td className="p-5 font-bold">
                                        {item.resi}
                                    </td>

                                    <td className="p-5">
                                        {item.customer}
                                    </td>

                                    <td className="p-5">
                                        {item.courier}
                                    </td>

                                    <td className="p-5">
                                        {item.product}
                                    </td>

                                    <td className="p-5">

                                        <span
                                            className={
                                                item.status === "Sampai"
                                                    ? "bg-green-500 text-white px-4 py-2 rounded-full"
                                                    : item.status === "Dikirim"
                                                    ? "bg-blue-500 text-white px-4 py-2 rounded-full"
                                                    : "bg-yellow-500 text-white px-4 py-2 rounded-full"
                                            }
                                        >
                                            {item.status}
                                        </span>

                                    </td>

                                    <td className="p-5">

                                        <div className="flex gap-2 justify-center">

                                            <button
                                                onClick={() =>
                                                    updateStatus(
                                                        item.id,
                                                        "Dikirim"
                                                    )
                                                }
                                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl"
                                            >
                                                Kirim
                                            </button>

                                            <button
                                                onClick={() =>
                                                    updateStatus(
                                                        item.id,
                                                        "Sampai"
                                                    )
                                                }
                                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
                                            >
                                                Sampai
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