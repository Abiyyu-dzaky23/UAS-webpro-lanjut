import { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Users() {

    const [search, setSearch] = useState("");

    const [selectedCustomer, setSelectedCustomer] = useState(null);
   
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Abiyyu",
            email: "abiyyu@gmail.com",
            phone: "08123456789",
            address: "Purwokerto",
            totalOrder: 12,
            totalBelanja: "Rp 20.000.000",
            status: "Aktif",
        },
        {
            id: 2,
            name: "Dzaky",
            email: "dzaky@gmail.com",
            phone: "08111111111",
            address: "Jakarta",
            totalOrder: 8,
            totalBelanja: "Rp 12.000.000",
            status: "Aktif",
        },
        {
            id: 3,
            name: "Rizky",
            email: "rizky@gmail.com",
            phone: "08222222222",
            address: "Bandung",
            totalOrder: 2,
            totalBelanja: "Rp 2.000.000",
            status: "Nonaktif",
        },
    ]);

    const hapusUser = (id) => {

        if (confirm("Yakin hapus customer?")) {

            setUsers(
                users.filter(
                    (user) => user.id !== id
                )
            );

        }

    };

    const updateStatus = (id, status) => {

        setUsers(
            users.map((user) =>
                user.id === id
                    ? { ...user, status }
                    : user
            )
        );

    };

    const detailCustomer = (customer) => {
        setSelectedCustomer(customer);
    };

    const filteredUsers = users.filter((user) =>
        user.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (

        <AdminLayout>

            <div className="space-y-8">

                {/* HEADER */}
                <div>

                    <h1 className="text-4xl font-bold">
                        Customer
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Kelola data customer marketplace
                    </p>

                </div>

                {/* CARD */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    <div className="bg-white border rounded-3xl p-6">

                        <p className="text-gray-500">
                            Total Customer
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            {users.length}
                        </h2>

                    </div>

                    <div className="bg-white border rounded-3xl p-6">

                        <p className="text-gray-500">
                            Customer Aktif
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            {
                                users.filter(
                                    (u) =>
                                        u.status ===
                                        "Aktif"
                                ).length
                            }
                        </h2>

                    </div>

                    <div className="bg-white border rounded-3xl p-6">

                        <p className="text-gray-500">
                            Customer VIP
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            {
                                users.filter(
                                    (u) =>
                                        u.totalOrder >= 10
                                ).length
                            }
                        </h2>

                    </div>

                    <div className="bg-white border rounded-3xl p-6">

                        <p className="text-gray-500">
                            Total Order
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            {users.reduce(
                                (total, user) =>
                                    total +
                                    user.totalOrder,
                                0
                            )}
                        </h2>

                    </div>

                </div>

                {/* SEARCH */}
                <div className="bg-white border rounded-3xl p-6">

                    <input
                        type="text"
                        placeholder="Cari customer..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        className="w-full border rounded-xl p-4"
                    />

                </div>

                {/* TABLE */}
                <div className="bg-white border rounded-3xl overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-gray-100">

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
                                    Total Order
                                </th>

                                <th className="p-5 text-left">
                                    Total Belanja
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

                                    <td className="p-5 font-medium">
                                        {user.name}
                                    </td>

                                    <td className="p-5">
                                        {user.email}
                                    </td>

                                    <td className="p-5">
                                        {user.phone}
                                    </td>

                                    <td className="p-5">
                                        {user.totalOrder}
                                    </td>

                                    <td className="p-5">
                                        {user.totalBelanja}
                                    </td>

                                    <td className="p-5">

                                        <select
                                            value={user.status}
                                            onChange={(e) =>
                                                updateStatus(
                                                    user.id,
                                                    e.target.value
                                                )
                                            }
                                            className="border rounded-lg px-3 py-2"
                                        >
                                            <option>
                                                Aktif
                                            </option>

                                            <option>
                                                Nonaktif
                                            </option>

                                        </select>

                                    </td>

                                    <td className="p-5">

                                        <div className="flex justify-center gap-2">

                                            <button
                                                onClick={() =>
                                                    detailCustomer(
                                                        user
                                                    )
                                                }
                                                className="border px-4 py-2 rounded-xl"
                                            >
                                                Detail
                                            </button>

                                            <button
                                                onClick={() =>
                                                    hapusUser(
                                                        user.id
                                                    )
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

            {selectedCustomer && (

<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

    <div className="bg-white rounded-3xl shadow-xl w-full max-w-2xl p-8">

        <h2 className="text-3xl font-bold text-center mb-8">
            Detail Customer
        </h2>

        <div className="grid grid-cols-2 gap-6">

            <div>
                <p className="text-gray-500 text-sm">
                    Nama
                </p>

                <p className="font-semibold text-lg">
                    {selectedCustomer.name}
                </p>
            </div>

            <div>
                <p className="text-gray-500 text-sm">
                    Email
                </p>

                <p className="font-semibold text-lg">
                    {selectedCustomer.email}
                </p>
            </div>

            <div>
                <p className="text-gray-500 text-sm">
                    No HP
                </p>

                <p className="font-semibold text-lg">
                    {selectedCustomer.phone}
                </p>
            </div>

            <div>
                <p className="text-gray-500 text-sm">
                    Alamat
                </p>

                <p className="font-semibold text-lg">
                    {selectedCustomer.address}
                </p>
            </div>

            <div>
    <p className="text-gray-500 text-sm">
        Total Order
    </p>

    <p className="font-semibold text-lg">
        {selectedCustomer.totalOrder}
    </p>
</div>

<div>
    <p className="text-gray-500 text-sm">
        Total Belanja
    </p>

    <p className="font-semibold text-lg">
        {selectedCustomer.totalBelanja}
    </p>
</div>

<div>
    <p className="text-gray-500 text-sm">
        Status
    </p>

    <span
        className={
            selectedCustomer.status === "Aktif"
                ? "bg-green-100 text-green-700 px-3 py-1 rounded-full"
                : "bg-red-100 text-red-700 px-3 py-1 rounded-full"
        }
    >
        {selectedCustomer.status}
    </span>
</div>

        </div>

        <button
            onClick={() => setSelectedCustomer(null)}
            className="w-full mt-8 bg-black text-white py-3 rounded-xl"
        >
            Tutup
        </button>

    </div>

</div>

)}

        </AdminLayout>

    );

}