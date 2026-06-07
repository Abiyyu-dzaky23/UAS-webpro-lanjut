import AdminLayout from "@/Layouts/AdminLayout";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    BarChart,
    Bar,
} from "recharts";

export default function Reports() {

    const salesData = [
        { month: "Jan", sales: 20 },
        { month: "Feb", sales: 35 },
        { month: "Mar", sales: 45 },
        { month: "Apr", sales: 70 },
        { month: "Mei", sales: 55 },
        { month: "Jun", sales: 90 },
    ];

    const productData = [
        {
            name: "RTX 4060",
            sold: 120,
        },
        {
            name: "ASUS ROG",
            sold: 80,
        },
        {
            name: "Ryzen 7",
            sold: 60,
        },
        {
            name: "SSD NVME",
            sold: 45,
        },
    ];

    return (

        <AdminLayout>

            <div className="space-y-8">

                {/* HEADER */}
                <div>

                    <h1 className="text-4xl font-bold">
                        Laporan Penjualan
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Statistik marketplace secara realtime
                    </p>

                </div>

                {/* CARD */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    <div className="bg-white rounded-3xl border p-6">

                        <p className="text-gray-500">
                            Pendapatan
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            Rp 250JT
                        </h2>

                    </div>

                    <div className="bg-white rounded-3xl border p-6">

                        <p className="text-gray-500">
                            Pesanan
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            320
                        </h2>

                    </div>

                    <div className="bg-white rounded-3xl border p-6">

                        <p className="text-gray-500">
                            Customer
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            350
                        </h2>

                    </div>

                    <div className="bg-white rounded-3xl border p-6">

                        <p className="text-gray-500">
                            Produk
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            150
                        </h2>

                    </div>

                </div>

                {/* GRAFIK PENJUALAN */}
                <div className="bg-white rounded-3xl border p-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Grafik Penjualan Bulanan
                    </h2>

                    <div className="h-96">

                        <ResponsiveContainer>

                            <LineChart data={salesData}>

                                <CartesianGrid strokeDasharray="3 3" />

                                <XAxis dataKey="month" />

                                <YAxis />

                                <Tooltip />

                                <Line
                                    type="monotone"
                                    dataKey="sales"
                                    stroke="#000"
                                    strokeWidth={4}
                                />

                            </LineChart>

                        </ResponsiveContainer>

                    </div>

                </div>

                {/* PRODUK TERLARIS */}
                <div className="bg-white rounded-3xl border p-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Produk Terlaris
                    </h2>

                    <div className="h-96">

                        <ResponsiveContainer>

                            <BarChart data={productData}>

                                <CartesianGrid strokeDasharray="3 3" />

                                <XAxis dataKey="name" />

                                <YAxis />

                                <Tooltip />

                                <Bar
                                    dataKey="sold"
                                    fill="#111827"
                                />

                            </BarChart>

                        </ResponsiveContainer>

                    </div>

                </div>

                {/* TOP CUSTOMER */}
                <div className="bg-white rounded-3xl border p-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Customer Terbaik
                    </h2>

                    <div className="space-y-4">

                        <div className="flex justify-between border-b pb-3">
                            <span>Abiyyu</span>
                            <span>Rp 20JT</span>
                        </div>

                        <div className="flex justify-between border-b pb-3">
                            <span>Dzaky</span>
                            <span>Rp 15JT</span>
                        </div>

                        <div className="flex justify-between border-b pb-3">
                            <span>Rizky</span>
                            <span>Rp 10JT</span>
                        </div>

                    </div>

                </div>

            </div>

        </AdminLayout>

    );

}