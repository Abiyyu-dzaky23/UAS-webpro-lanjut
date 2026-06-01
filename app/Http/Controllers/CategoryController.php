<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return Category::all();
    }

    public function store(Request $request)
    {
        $category = Category::create($request->all());

        return response()->json([
            'message' => 'Kategori berhasil ditambah',
            'data' => $category
        ]);
    }

    public function show(string $id)
    {
        return Category::findOrFail($id);
    }

    public function update(Request $request, string $id)
    {
        $category = Category::findOrFail($id);

        $category->update($request->all());

        return response()->json([
            'message' => 'Kategori berhasil diupdate'
        ]);
    }

    public function destroy(string $id)
    {
        Category::destroy($id);

        return response()->json([
            'message' => 'Kategori berhasil dihapus'
        ]);
    }
}