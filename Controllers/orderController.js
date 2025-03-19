const Order = require('../Models/order');
exports.placeOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// 📋 Get All Orders (Admin) -> GET /api/admin/orders
exports. getOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).sort({ createdAt: -1 });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch orders" });
    }
};
// 🔄 Update Order Status (Admin) -> PUT /api/admin/order/:id
exports. updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const validStatuses = ["Pending", "Preparing", "Completed"];

        if (!validStatuses.includes(status)) {
            return res.status(400).json({ error: "Invalid status value" });
        }

        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });

        if (!updatedOrder) {
            return res.status(404).json({ error: "Order not found" });
        }

        res.status(200).json({ message: "Order status updated", order: updatedOrder });
    } catch (error) {
        res.status(500).json({ error: "Failed to update order status" });
    }
};