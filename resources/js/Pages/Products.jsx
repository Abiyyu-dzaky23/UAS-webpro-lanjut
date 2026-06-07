import { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Products() {

    const [search, setSearch] = useState("");

    const [showModal, setShowModal] = useState(false);

const [form, setForm] = useState({
    image: "",
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
});

    const [products, setProducts] = useState([
        {
            id: 1,
            image: "https://via.placeholder.com/80",
            name: "RTX 4060",
            category: "VGA",
            price: "Rp 8.000.000",
            stock: 10,
            status: "Aktif",
            description: "VGA Gaming NVIDIA RTX 4060",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/80",
            name: "ASUS ROG",
            category: "Laptop",
            price: "Rp 15.000.000",
            stock: 5,
            status: "Aktif",
            description: "Laptop Gaming ASUS ROG",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/80",
            name: "Ryzen 7 5800X",
            category: "Processor",
            price: "Rp 5.000.000",
            stock: 2,
            status: "Aktif",
            description: "Processor AMD Ryzen 7",
        },
    ]);

    const simpanProduk = () => {

        if (
            !form.name ||
            !form.category ||
            !form.price ||
            !form.stock
        ) {
            alert("Lengkapi semua data");
            return;
        }
    
        setProducts([
            ...products,
            {
                id: Date.now(),
                image: form.image,
                name: form.name,
                category: form.category,
                price: form.price,
                stock: Number(form.stock),
                status: "Aktif",
                description: form.description,
            },
        ]);
    
        setForm({
            image: "",
            name: "",
            category: "",
            price: "",
            stock: "",
            description: "",
        });
    
        setShowModal(false);
    };
    

    const toggleStatus = (id) => {

        setProducts(
            products.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          status:
                              item.status === "Aktif"
                                  ? "Nonaktif"
                                  : "Aktif",
                      }
                    : item
            )
        );

    };

    const hapusProduk = (id) => {

        if (confirm("Yakin hapus produk?")) {

            setProducts(
                products.filter(
                    (item) => item.id !== id
                )
            );

        }

    };

    const filteredProducts = products.filter((product) =>
        product.name
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
                            Produk
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Kelola seluruh produk marketplace
                        </p>

                    </div>

                    <button
    onClick={() => setShowModal(true)}
    className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
>
    + Upload Produk
</button>

                </div>

                {/* STATISTIK */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    <div className="bg-white border rounded-3xl p-6">

                        <p className="text-gray-500">
                            Total Produk
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            {products.length}
                        </h2>

                    </div>

                    <div className="bg-white border rounded-3xl p-6">

                        <p className="text-gray-500">
                            Produk Aktif
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            {
                                products.filter(
                                    (item) =>
                                        item.status === "Aktif"
                                ).length
                            }
                        </h2>

                    </div>

                    <div className="bg-white border rounded-3xl p-6">

                        <p className="text-gray-500">
                            Total Stok
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            {products.reduce(
                                (total, item) =>
                                    total +
                                    Number(item.stock),
                                0
                            )}
                        </h2>

                    </div>

                    <div className="bg-white border rounded-3xl p-6">

                        <p className="text-gray-500">
                            Stok Menipis
                        </p>

                        <h2 className="text-4xl font-bold mt-3">
                            {
                                products.filter(
                                    (item) =>
                                        item.stock <= 5
                                ).length
                            }
                        </h2>

                    </div>

                </div>

                {/* SEARCH */}
                <div className="bg-white border rounded-3xl p-6">

                    <input
                        type="text"
                        placeholder="Cari produk..."
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
        Foto
    </th>

    <th className="p-5 text-left">
        Produk
    </th>

    <th className="p-5 text-left">
        Kategori
    </th>

    <th className="p-5 text-left">
        Harga
    </th>

    <th className="p-5 text-left">
        Stok
    </th>

    <th className="p-5 text-left">
        Status
    </th>

    <th className="p-5 text-left">
        Deskripsi
    </th>

    <th className="p-5 text-center">
        Action
    </th>
</tr>

                        </thead>

                        <tbody>

                            {filteredProducts.map((product) => (

<tr
key={product.id}
className="border-b hover:bg-gray-50"
>

<td className="p-5">
    <img
        src={product.image}
        alt={product.name}
        className="w-16 h-16 object-cover rounded-xl border"
    />
</td>

                                    <td className="p-5 font-medium">
                                    {product.name}
                                    </td>

                                    <td className="p-5">
                                    {product.category}
                                    </td>

                                    <td className="p-5">
                                    {product.price}
                                    </td>
                                    <td className="p-5">

                                        <span
                                            className={
                                                product.stock <= 5
                                                    ? "bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm"
                                                    : "bg-gray-100 px-3 py-1 rounded-full text-sm"
                                            }
                                        >
                                            {product.stock}
                                        </span>

                                    </td>

                                    <td className="p-5">

                                        <span
                                            className={
                                                product.status === "Aktif"
                                                    ? "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                                                    : "bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
                                            }
                                        >
                                            {product.status}
                                        </span>

                                    </td>

                                    <td className="p-5 max-w-xs truncate">
                                        {product.description}
                                    </td>

                                    <td className="p-5">

                                        <div className="flex gap-2 justify-center">

                                            <button
                                                onClick={() =>
                                                    editProduk(product.id)
                                                }
                                                className="bg-black text-white px-3 py-2 rounded-lg"
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() =>
                                                    toggleStatus(product.id)
                                                }
                                                className="border px-3 py-2 rounded-lg"
                                            >
                                                Status
                                            </button>

                                            <button
                                                onClick={() =>
                                                    hapusProduk(product.id)
                                                }
                                                className="border border-red-500 text-red-500 px-3 py-2 rounded-lg"
                                            >
                                                Hapus
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}
                            {showModal && (
<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

    <div className="bg-white p-8 rounded-3xl w-full max-w-xl">

        <h2 className="text-2xl font-bold mb-6">
            Tambah Produk
        </h2>

        <div className="space-y-4">

            <input
                type="text"
                placeholder="Nama Produk"
                className="w-full border p-3 rounded-xl"
                value={form.name}
                onChange={(e)=>
                    setForm({
                        ...form,
                        name:e.target.value
                    })
                }
            />

            <input
                type="text"
                placeholder="Kategori"
                className="w-full border p-3 rounded-xl"
                value={form.category}
                onChange={(e)=>
                    setForm({
                        ...form,
                        category:e.target.value
                    })
                }
            />

            <input
                type="text"
                placeholder="Harga"
                className="w-full border p-3 rounded-xl"
                value={form.price}
                onChange={(e)=>
                    setForm({
                        ...form,
                        price:e.target.value
                    })
                }
            />

            <input
                type="number"
                placeholder="Stok"
                className="w-full border p-3 rounded-xl"
                value={form.stock}
                onChange={(e)=>
                    setForm({
                        ...form,
                        stock:e.target.value
                    })
                }
            />

            <textarea
                placeholder="Deskripsi Produk"
                className="w-full border p-3 rounded-xl"
                value={form.description}
                onChange={(e)=>
                    setForm({
                        ...form,
                        description:e.target.value
                    })
                }
            />

            <input
                type="file"
                accept="image/*"
                onChange={(e)=>
                    setForm({
                        ...form,
                        image: URL.createObjectURL(
                            e.target.files[0]
                        )
                    })
                }
            />

            <div className="flex gap-3">

                <button
                    onClick={simpanProduk}
                    className="flex-1 bg-black text-white py-3 rounded-xl"
                >
                    Simpan
                </button>

                <button
                    onClick={() => setShowModal(false)}
                    className="flex-1 border py-3 rounded-xl"
                >
                    Batal
                </button>

            </div>

        </div>

    </div>

</div>
)}

                        </tbody>

                    </table>

                </div>

            </div>

        </AdminLayout>

    );

}