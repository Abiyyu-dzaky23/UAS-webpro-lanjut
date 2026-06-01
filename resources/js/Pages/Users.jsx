import { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Users() {

    const [search, setSearch] = useState("");

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Abiyyu",
            email: "abiyyu@gmail.com",
            phone: "081234567890",
            status: "Aktif",
        },
        {
            id: 2,
            name: "Dzaky",
            email: "dzaky@gmail.com",
            phone: "081234567891",
            status: "Aktif",
        },
        {
            id: 3,
            name: "Rafly",
            email: "rafly@gmail.com",
            phone: "081234567892",
            status: "Nonaktif",
        },
    ]);

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    const totalCustomer = users.length;

    const customerAktif = users.filter(
        (user) => user.status === "Aktif"
    ).length;

    const customerNonaktif = users.filter(
        (user) => user.status === "Nonaktif"
    ).length;

    return (

        <AdminLayout>

            <div className="space-y-8">

                {/* HEADER */}
                <div>

                    <h1 className="text-5xl font-black mb-2">
                        👥 Data Customer
                    </h1>

                    <p className="text-gray-500">
                        Kelola seluruh customer marketplace
                    </p>

                </div>

                {/* CARD */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white rounded-3xl shadow-xl p-8">

                        <h2 className="text-gray-500 text-xl">
                            Total Customer
                        </h2>

                        <p className="text-5xl font-black mt-4">
                            {totalCustomer}
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8">

                        <h2 className="text-gray-500 text-xl">
                            Customer Aktif
                        </h2>

                        <p className="text-5xl font-black mt-4 text-green-500">
                            {customerAktif}
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8">

                        <h2 className="text-gray-500 text-xl">
                            Customer Nonaktif
                        </h2>

                        <p className="text-5xl font-black mt-4 text-red-500">
                            {customerNonaktif}
                        </p>

                    </div>

                </div>

                {/* SEARCH */}
                <div className="bg-white rounded-3xl shadow-xl p-6">

                    <input
                        type="text"
                        placeholder="Cari customer..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full border rounded-2xl p-4"
                    />

                </div>

                {/* TABLE */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-black text-white">

                            <tr>

                                <th className="p-5 text-left">
                                    Nama
                                </th>

                                <th className="p-5 text-left">
                                    Email
                                </th>

                                <th className="p-5 text-left">
                                    No HP
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

                            {filteredUsers.map((user) => (

                                <tr
                                    key={user.id}
                                    className="border-b hover:bg-gray-50"
                                >

                                    <td className="p-5 font-bold">
                                        {user.name}
                                    </td>

                                    <td className="p-5">
                                        {user.email}
                                    </td>

                                    <td className="p-5">
                                        {user.phone}
                                    </td>

                                    <td className="p-5">

                                        <span
                                            className={
                                                user.status === "Aktif"
                                                    ? "bg-green-500 text-white px-4 py-2 rounded-full"
                                                    : "bg-red-500 text-white px-4 py-2 rounded-full"
                                            }
                                        >
                                            {user.status}
                                        </span>

                                    </td>

                                    <td className="p-5 text-center">

                                        <button
                                            onClick={() => deleteUser(user.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
                                        >
                                            Hapus
                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

                {/* ACTIVITY */}
                <div className="bg-white rounded-3xl shadow-xl p-8">

                    <h2 className="text-3xl font-bold mb-6">
                        📋 Aktivitas Customer
                    </h2>

                    <div className="space-y-4">

                        <div className="border-l-4 border-green-500 pl-4 py-2">
                            Customer baru mendaftar
                        </div>

                        <div className="border-l-4 border-blue-500 pl-4 py-2">
                            Customer melakukan pembelian
                        </div>

                        <div className="border-l-4 border-yellow-500 pl-4 py-2">
                            Customer mengubah profil
                        </div>

                    </div>

                </div>

            </div>

        </AdminLayout>
    );
}