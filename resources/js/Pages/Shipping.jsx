import { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Shipping() {

    const [search, setSearch] = useState("");

    const [shipping, setShipping] = useState([
        {
            id: "SHP001",
            order: "ORD001",
            customer: "Abiyyu",
            courier: "JNE",
            receipt: "JNE123456",
            status: "Diproses",
        },
        {
            id: "SHP002",
            order: "ORD002",
            customer: "Dzaky",
            courier: "J&T",
            receipt: "JT987654",
            status: "Dikirim",
        },
        {
            id: "SHP003",
            order: "ORD003",
            customer: "Rizky",
            courier: "SiCepat",
            receipt: "SC555888",
            status: "Selesai",
        },
    ]);

    const tambahPengiriman = () => {

        const customer = prompt("Nama Customer");
        if (!customer) return;

        const courier = prompt(
            "Kurir (JNE / J&T / SiCepat)"
        );

        if (!courier) return;

        const receipt = prompt("Nomor Resi");

        if (!receipt) return;

        const data = {
            id: "SHP" + Math.floor(Math.random() * 9999),
            order: "ORD" + Math.floor(Math.random() * 9999),
            customer,
            courier,
            receipt,
            status: "Diproses",
        };

        setShipping([...shipping, data]);

    };

    const hapusPengiriman = (id) => {

        if (confirm("Hapus data pengiriman?")) {

            setShipping(
                shipping.filter(
                    (item) => item.id !== id
                )
            );

        }

    };

    const updateStatus = (id, status) => {

        setShipping(
            shipping.map((item) =>
                item.id === id
                    ? { ...item, status }
                    : item
            )
        );

    };

    const filteredShipping = shipping.filter(
        (item) =>
            item.customer
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            item.receipt
                .toLowerCase()
                .includes(search.toLowerCase())
    );

    return (

        <AdminLayout>

            <div className="space-y-8">

                {/* HEADER */}
                <div className="flex justify-between items-center">

                    <div>

                        <h1 className="text-4xl font-bold">
                            Pengiriman
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Kelola seluruh pengiriman produk
                        </p>

                    </div>

                    <button
                        onClick={tambahPengiriman}
                        className="bg-black text-white px-6 py-3 rounded-xl"
                    >
                        + Tambah Pengiriman
                    </button>

                </div>

                {/* CARD */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    <div className="bg-white rounded-3xl border p-6">

                        <p className="text-gray-500">
                            Total Pengiriman
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            {shipping.length}
                        </h2>

                    </div>

                    <div className="bg-white rounded-3xl border p-6">

                        <p className="text-gray-500">
                            Diproses
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            {
                                shipping.filter(
                                    (s) =>
                                        s.status ===
                                        "Diproses"
                                ).length
                            }
                        </h2>

                    </div>

                    <div className="bg-white rounded-3xl border p-6">

                        <p className="text-gray-500">
                            Dikirim
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            {
                                shipping.filter(
                                    (s) =>
                                        s.status ===
                                        "Dikirim"
                                ).length
                            }
                        </h2>

                    </div>

                    <div className="bg-white rounded-3xl border p-6">

                        <p className="text-gray-500">
                            Selesai
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            {
                                shipping.filter(
                                    (s) =>
                                        s.status ===
                                        "Selesai"
                                ).length
                            }
                        </h2>

                    </div>

                </div>

                {/* SEARCH */}
                <div className="bg-white rounded-3xl border p-6">

                    <input
                        type="text"
                        placeholder="Cari customer atau resi..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        className="w-full border rounded-xl p-4"
                    />

                </div>

                {/* TABLE */}
                <div className="bg-white rounded-3xl border overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="p-5 text-left">
                                    ID
                                </th>

                                <th className="p-5 text-left">
                                    Order
                                </th>

                                <th className="p-5 text-left">
                                    Customer
                                </th>

                                <th className="p-5 text-left">
                                    Kurir
                                </th>

                                <th className="p-5 text-left">
                                    Resi
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

                            {filteredShipping.map((item) => (

                                <tr
                                    key={item.id}
                                    className="border-b hover:bg-gray-50"
                                >

                                    <td className="p-5">
                                        {item.id}
                                    </td>

                                    <td className="p-5">
                                        {item.order}
                                    </td>

                                    <td className="p-5">
                                        {item.customer}
                                    </td>

                                    <td className="p-5">
                                        {item.courier}
                                    </td>

                                    <td className="p-5 font-semibold">
                                        {item.receipt}
                                    </td>

                                    <td className="p-5">

                                        <select
                                            value={item.status}
                                            onChange={(e) =>
                                                updateStatus(
                                                    item.id,
                                                    e.target.value
                                                )
                                            }
                                            className="border rounded-lg px-3 py-2"
                                        >
                                            <option>
                                                Diproses
                                            </option>

                                            <option>
                                                Dikirim
                                            </option>

                                            <option>
                                                Selesai
                                            </option>

                                            <option>
                                                Dibatalkan
                                            </option>

                                        </select>

                                    </td>

                                    <td className="p-5">

                                        <button
                                            onClick={() =>
                                                hapusPengiriman(
                                                    item.id
                                                )
                                            }
                                            className="bg-black text-white px-4 py-2 rounded-xl"
                                        >
                                            Hapus
                                        </button>

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