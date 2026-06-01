import { useState, useEffect } from "react";

export default function AdminLayout({ children }) {

    const [darkMode, setDarkMode] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [time, setTime] = useState(new Date());

    const currentPath = window.location.pathname;

    useEffect(() => {

        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    const menuClass = (path) =>
        currentPath === path
            ? "flex items-center gap-4 px-4 py-4 rounded-2xl text-cyan-400 font-bold bg-white/10 transition-all duration-300"
            : "flex items-center gap-4 px-4 py-4 rounded-2xl text-white hover:text-cyan-400 hover:bg-white/10 hover:translate-x-2 transition-all duration-300";

    return (

        <div
            className={
                darkMode
                    ? "min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white flex"
                    : "min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 flex"
            }
        >

            {/* SIDEBAR */}
            <div
                className={
                    sidebarOpen
                        ? "w-72 bg-black text-white shadow-2xl transition-all duration-300 flex flex-col"
                        : "w-24 bg-black text-white shadow-2xl transition-all duration-300 flex flex-col"
                }
            >

                {/* HEADER */}
                <div className="p-6 border-b border-gray-800 flex justify-between items-center">

                    {sidebarOpen && (

                        <div>

                            <h1 className="text-3xl font-black">
                                ADMIN
                            </h1>

                            <p className="text-cyan-400 font-semibold">
                                Marketplace Pro
                            </p>

                        </div>

                    )}

                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 transition"
                    >
                        ☰
                    </button>

                </div>

                {/* MENU */}
                <div className="flex-1 p-4 space-y-2">

                    <a href="/admin" className={menuClass("/admin")}>
                        <span className="text-2xl">🏠</span>
                        {sidebarOpen && <span>Dashboard</span>}
                    </a>

                    <a href="/admin/orders" className={menuClass("/admin/orders")}>
                        <span className="text-2xl">📦</span>
                        {sidebarOpen && <span>Pesanan</span>}
                    </a>

                    <a href="/admin/shipping" className={menuClass("/admin/shipping")}>
                        <span className="text-2xl">🚚</span>
                        {sidebarOpen && <span>Pengiriman</span>}
                    </a>

                    <a href="/admin/users" className={menuClass("/admin/users")}>
                        <span className="text-2xl">👥</span>
                        {sidebarOpen && <span>Customer</span>}
                    </a>

                    <a href="/admin/reports" className={menuClass("/admin/reports")}>
                        <span className="text-2xl">📊</span>
                        {sidebarOpen && <span>Laporan</span>}
                    </a>

                    <a href="/admin/settings" className={menuClass("/admin/settings")}>
                        <span className="text-2xl">⚙️</span>
                        {sidebarOpen && <span>Settings</span>}
                    </a>

                </div>

                {/* PROFILE */}
                <div className="p-4">

                    <div className="bg-white/10 rounded-3xl p-4 border border-white/10">

                        <div className="flex items-center gap-3">

                            <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-xl">
                                👨‍💻
                            </div>

                            {sidebarOpen && (

                                <div>

                                    <h2 className="font-bold">
                                        Admin
                                    </h2>

                                    <p className="text-sm text-gray-400">
                                        admin@pcstore.com
                                    </p>

                                </div>

                            )}

                        </div>

                        {sidebarOpen && (

                            <button className="mt-4 w-full bg-red-500 hover:bg-red-600 transition py-3 rounded-2xl font-bold">
                                Logout
                            </button>

                        )}

                    </div>

                </div>

            </div>

            {/* CONTENT */}
            <div className="flex-1 p-10">

                {/* TOPBAR */}
                <div className="flex justify-between items-center mb-10">

                    <div>

                        <h1
                            className={
                                darkMode
                                    ? "text-5xl font-black text-white"
                                    : "text-5xl font-black text-slate-900"
                            }
                        >
                            Admin Marketplace
                        </h1>

                        <p className="text-gray-500 mt-2">
                            {time.toLocaleString()}
                        </p>

                    </div>

                    <div className="flex items-center gap-4">

                        <input
                            type="text"
                            placeholder="Cari data..."
                            className="w-96 px-6 py-4 rounded-2xl shadow-lg border focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />

                        <button className="w-14 h-14 rounded-2xl bg-white shadow-lg hover:scale-110 transition">
                            🔔
                        </button>

                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="w-14 h-14 rounded-2xl bg-black text-white shadow-lg hover:scale-110 transition"
                        >
                            {darkMode ? "☀️" : "🌙"}
                        </button>

                    </div>

                </div>

                {children}

            </div>

        </div>

    );
}