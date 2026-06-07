import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Bell,
    Menu,
    Moon,
    Sun,
    LogOut,
} from "lucide-react";

export default function AdminLayout({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [time, setTime] = useState(new Date());
    const [showNotifications, setShowNotifications] = useState(false);

    const [settings, setSettings] = useState({
        storeName: "PC Marketplace",
        email: "admin@pcstore.com",
    });

    const notifications = [
        { title: "Pesanan Baru", message: "ORD001 berhasil dibuat" },
        { title: "Customer Baru", message: "Customer baru mendaftar" },
        { title: "Stok Menipis", message: "RTX 4060 tersisa 2 unit" },
    ];

    const currentPath = window.location.pathname;

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode") === "true";
        setDarkMode(savedMode);
    }, []);

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const menuClass = (path) =>
        currentPath === path
            ? "flex items-center gap-4 px-4 py-3 rounded-xl bg-white text-black font-semibold shadow-md dark:bg-zinc-900 dark:text-white transition-all duration-300"
            : "flex items-center gap-4 px-4 py-3 rounded-xl text-zinc-400 dark:text-zinc-500 hover:bg-zinc-900/60 hover:text-white transition-all duration-300";

    const premiumSpring = {
        type: "spring",
        stiffness: 380,
        damping: 35,
        mass: 0.8
    };

    return (
        <div className={`min-h-screen flex w-full relative ${darkMode ? "bg-zinc-950 text-white" : "bg-gray-50 text-slate-900"}`}>
            
            {/* ─── SIDEBAR UTAMA (FIXED: DIJAMIN FULL KE BAWAH LAYAR 100%) ─── */}
            <motion.div
                layout
                animate={{ width: sidebarOpen ? 280 : 90 }}
                transition={premiumSpring}
                className="bg-black text-white flex flex-col z-30 shadow-[5px_0_25px_rgba(0,0,0,0.15)] fixed left-0 top-0 bottom-0 h-screen overflow-hidden"
            >
                {/* Header Brand Sidebar */}
                <div className="p-6 border-b border-zinc-900 flex justify-between items-center h-24 flex-shrink-0">
                    <div className="min-w-0 flex flex-col overflow-hidden">
                        <AnimatePresence mode="wait">
                            {sidebarOpen && (
                                <motion.div 
                                    initial={{ opacity: 0, x: -15 }} 
                                    animate={{ opacity: 1, x: 0 }} 
                                    exit={{ opacity: 0, x: -15 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <h1 className="text-lg font-black tracking-tight truncate whitespace-nowrap">{settings.storeName}</h1>
                                    <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest whitespace-nowrap">Admin Panel</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <motion.button 
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSidebarOpen(!sidebarOpen)} 
                        className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors flex-shrink-0"
                    >
                        <Menu size={18} />
                    </motion.button>
                </div>

                {/* List Menu Internal */}
                <div className="flex-1 p-4 space-y-1.5 overflow-y-auto no-scrollbar">
                    {[
                        { path: "/admin", label: "Dashboard", icon: "🏠" },
                        { path: "/admin/products", label: "Produk", icon: "🛒" },
                        { path: "/admin/orders", label: "Pesanan", icon: "📦" },
                        { path: "/admin/shipping", label: "Pengiriman", icon: "🚚" },
                        { path: "/admin/users", label: "Customer", icon: "👥" },
                        { path: "/admin/reports", label: "Laporan", icon: "📊" },
                        { path: "/admin/settings", label: "Pengaturan", icon: "⚙️" },
                    ].map((item, index) => (
                        <motion.a 
                            key={index} 
                            href={item.path} 
                            className={menuClass(item.path)}
                            whileHover={{ x: currentPath === item.path ? 0 : 5, backgroundColor: currentPath === item.path ? "" : "rgba(39,39,42,0.3)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="text-lg flex-shrink-0">{item.icon}</span>
                            <AnimatePresence mode="wait">
                                {sidebarOpen && (
                                    <motion.span 
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.15 }}
                                        className="text-sm font-medium truncate whitespace-nowrap"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.a>
                    ))}
                </div>
                
                {/* Profile Box */}
                <div className="p-4 border-t border-zinc-900 bg-black flex-shrink-0">
                    <div className="bg-zinc-900/40 p-3 rounded-2xl border border-zinc-900/80">
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">A</div>
                            <AnimatePresence>
                                {sidebarOpen && (
                                    <motion.div 
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                        exit={{ opacity: 0, width: 0 }}
                                        className="truncate text-xs font-semibold text-zinc-400 whitespace-nowrap"
                                    >
                                        {settings.email}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <AnimatePresence>
                            {sidebarOpen && (
                                <motion.button 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    whileHover={{ backgroundColor: "#ef4444", color: "#ffffff" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => router.post("/logout")} 
                                    className="mt-3 w-full flex items-center justify-center gap-2 text-[10px] font-black bg-zinc-900/80 p-2.5 rounded-xl transition-colors text-zinc-400 border border-zinc-800"
                                >
                                    <LogOut size={12} /> LOGOUT
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

            {/* ─── AREA KANAN: JALUR UTAMA TOPBAR & ISI HALAMAN KONTEN ─── */}
            {/* Menggunakan animasi padding kiri dinamis mengikuti ukuran lebar sidebar fixed */}
            <motion.div 
                animate={{ paddingLeft: sidebarOpen ? 280 : 90 }}
                transition={premiumSpring}
                className="flex-1 flex flex-col min-w-0"
            >
                
                {/* Topbar */}
                <div className="flex justify-between items-center p-8 border-b border-gray-100 dark:border-zinc-900/60 bg-transparent flex-shrink-0">
                    <div>
                        <h1 className="text-3xl font-black tracking-tight">Admin Marketplace</h1>
                        <p className="text-xs font-bold text-zinc-400 dark:text-zinc-500 mt-0.5 uppercase tracking-wider">
                            {time.toLocaleTimeString('id-ID')} WIB — {time.toLocaleDateString('id-ID', { dateStyle: 'medium' })}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <input
                            type="text"
                            placeholder="Cari data..."
                            className={`px-4 py-2.5 text-sm rounded-xl border focus:outline-none transition-all duration-300 w-64 shadow-sm ${
                                darkMode 
                                    ? "bg-zinc-900/60 border-zinc-800 text-white focus:border-zinc-700" 
                                    : "bg-white border-gray-200 text-slate-900 focus:border-gray-400"
                            }`}
                        />

                        {/* Dropdown Notifikasi */}
                        <div className="relative">
                            <motion.button 
                                whileTap={{ scale: 0.92 }}
                                onClick={() => setShowNotifications(!showNotifications)} 
                                className={`p-2.5 rounded-xl border transition-colors relative shadow-sm ${
                                    darkMode ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-gray-200 text-slate-600"
                                }`}
                            >
                                <Bell size={18} />
                                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
                                    {notifications.length}
                                </span>
                            </motion.button>

                            <AnimatePresence>
                                {showNotifications && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                        transition={premiumSpring}
                                        className={`absolute right-0 mt-3 w-72 rounded-2xl shadow-2xl border z-50 overflow-hidden ${
                                            darkMode ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-gray-100 text-slate-900"
                                        }`}
                                    >
                                        <div className="p-4 font-bold text-xs border-b border-gray-50 dark:border-zinc-800/60 uppercase tracking-wider text-zinc-400">Notifikasi</div>
                                        <div className="max-h-60 overflow-y-auto">
                                            {notifications.map((n, i) => (
                                                <div key={i} className="p-4 border-b last:border-0 border-gray-50 dark:border-zinc-800/40 hover:bg-gray-50 dark:hover:bg-zinc-800/30 transition-colors cursor-pointer">
                                                    <div className="text-xs font-bold">{n.title}</div>
                                                    <div className="text-[11px] text-zinc-400 mt-0.5">{n.message}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* DarkMode Toggle */}
                        <motion.button 
                            whileTap={{ scale: 0.9, rotate: 15 }}
                            onClick={() => setDarkMode(!darkMode)} 
                            className={`p-2.5 rounded-xl border transition-colors shadow-sm ${
                                darkMode ? "bg-zinc-900 border-zinc-800 text-yellow-400" : "bg-white border-gray-200 text-slate-600"
                            }`}
                        >
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </motion.button>
                    </div>
                </div>

                {/* Area Konten Utama */}
                <motion.div 
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex-1 p-8 overflow-x-auto w-full"
                >
                    <div className="min-w-full inline-block align-middle">
                        {children}
                    </div>
                </motion.div>

            </motion.div>
            
            {/* CSS Global Mini untuk buang Scrollbar Jelek di Sidebar */}
            <style dangerouslySetInnerHTML={{__html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />
        </div>
    );
}