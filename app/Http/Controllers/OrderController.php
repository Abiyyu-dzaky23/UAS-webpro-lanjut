<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        return response()->json(
            Order::latest()->get()
        );
    }

    public function store(Request $request)
    {
        $order = Order::create([
            'customer_name' => $request->customer_name,
            'product_name' => $request->product_name,
            'total_price' => $request->total_price,
            'status' => $request->status,
        ]);

        return response()->json($order);
    }

    public function show(string $id)
    {
        return response()->json(
            Order::findOrFail($id)
        );
    }

    public function update(Request $request, string $id)
    {
        $order = Order::findOrFail($id);

        $order->update($request->all());

        return response()->json($order);
    }

    public function destroy(string $id)
    {
        Order::destroy($id);

        return response()->json([
            'message' => 'Order deleted'
        ]);
    }
}