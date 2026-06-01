import AdminLayout from "@/Layouts/AdminLayout";

export default function Reports() {

    const reports = [
        {
            month: "Januari",
            sales: "250 Produk",
            revenue: "Rp 120JT",
            status: "Naik",
        },
        {
            month: "Februari",
            sales: "180 Produk",
            revenue: "Rp 90JT",
            status: "Stabil",
        },
        {
            month: "Maret",
            sales: "300 Produk",
            revenue: "Rp 150JT",
            status: "Naik",
        },
        {
            month: "April",
            sales: "220 Produk",
            revenue: "Rp 110JT",
            status: "Turun",
        },
    ];

    return (
        <AdminLayout>

            <div className="space-y-8">

                {/* HEADER */}
                <div>

                    <h1 className="text-5xl font-black mb-2">
                        📊 Laporan Penjualan
                    </h1>

                    <p className="text-gray-500">
                        Statistik dan performa marketplace
                    </p>

                </div>

                {/* CARD */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-3xl p-8 shadow-xl">

                        <h2 className="text-xl">
                            Total Penjualan
                        </h2>

                        <p className="text-5xl font-black mt-4">
                            1.250
                        </p>

                    </div>

                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-3xl p-8 shadow-xl">

                        <h2 className="text-xl">
                            Pendapatan
                        </h2>

                        <p className="text-5xl font-black mt-4">
                            Rp 500JT
                        </p>

                    </div>

                    <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-3xl p-8 shadow-xl">

                        <h2 className="text-xl">
                            Produk Terjual
                        </h2>

                        <p className="text-5xl font-black mt-4">
                            890
                        </p>

                    </div>

                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-3xl p-8 shadow-xl">

                        <h2 className="text-xl">
                            Customer Aktif
                        </h2>

                        <p className="text-5xl font-black mt-4">
                            350
                        </p>

                    </div>

                </div>

                {/* GRAFIK */}
                <div className="bg-white rounded-3xl shadow-xl p-8">

                    <div className="flex justify-between items-center mb-8">

                        <h2 className="text-3xl font-bold">
                            📈 Grafik Penjualan Bulanan
                        </h2>

                        <button className="bg-black text-white px-6 py-3 rounded-xl">
                            Export PDF
                        </button>

                    </div>

                    <div className="space-y-6">

                        <div>
                            <div className="flex justify-between mb-2">
                                <span>Januari</span>
                                <span>80%</span>
                            </div>

                            <div className="w-full bg-gray-200 h-6 rounded-full">
                                <div className="bg-green-500 h-6 rounded-full w-4/5"></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <span>Februari</span>
                                <span>65%</span>
                            </div>

                            <div className="w-full bg-gray-200 h-6 rounded-full">
                                <div className="bg-blue-500 h-6 rounded-full w-2/3"></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <span>Maret</span>
                                <span>90%</span>
                            </div>

                            <div className="w-full bg-gray-200 h-6 rounded-full">
                                <div className="bg-yellow-500 h-6 rounded-full w-11/12"></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <span>April</span>
                                <span>75%</span>
                            </div>

                            <div className="w-full bg-gray-200 h-6 rounded-full">
                                <div className="bg-red-500 h-6 rounded-full w-3/4"></div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* PRODUK TERLARIS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white rounded-3xl shadow-xl p-8">

                        <h2 className="font-bold text-xl mb-3">
                            🥇 Produk Terlaris
                        </h2>

                        <p className="text-3xl font-black">
                            RTX 4060
                        </p>

                        <p className="text-gray-500 mt-2">
                            320 Unit Terjual
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8">

                        <h2 className="font-bold text-xl mb-3">
                            💰 Pendapatan Hari Ini
                        </h2>

                        <p className="text-3xl font-black text-green-500">
                            Rp 12JT
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl shadow-xl p-8">

                        <h2 className="font-bold text-xl mb-3">
                            📦 Order Hari Ini
                        </h2>

                        <p className="text-3xl font-black text-blue-500">
                            25 Order
                        </p>

                    </div>

                </div>

                {/* TABLE */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                    <table className="w-full">

                        <thead className="bg-black text-white">

                            <tr>

                                <th className="p-5 text-left">
                                    Bulan
                                </th>

                                <th className="p-5 text-left">
                                    Total Penjualan
                                </th>

                                <th className="p-5 text-left">
                                    Pendapatan
                                </th>

                                <th className="p-5 text-left">
                                    Status
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {reports.map((item, index) => (

                                <tr
                                    key={index}
                                    className="border-b hover:bg-gray-50"
                                >

                                    <td className="p-5">
                                        {item.month}
                                    </td>

                                    <td className="p-5">
                                        {item.sales}
                                    </td>

                                    <td className="p-5">
                                        {item.revenue}
                                    </td>

                                    <td className="p-5">

                                        <span
                                            className={
                                                item.status === "Naik"
                                                    ? "bg-green-500 text-white px-4 py-2 rounded-full"
                                                    : item.status === "Stabil"
                                                    ? "bg-yellow-500 text-white px-4 py-2 rounded-full"
                                                    : "bg-red-500 text-white px-4 py-2 rounded-full"
                                            }
                                        >
                                            {item.status}
                                        </span>

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