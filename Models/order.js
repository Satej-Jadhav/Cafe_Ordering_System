const Order = require("../Models/order");

// 🍽 Place Order (User) -> POST /api/order
const placeOrder = async (req, res) => {
    try {
        const { items, totalPrice, tableNumber } = req.body;

        if (!items || items.length === 0 || !tableNumber) {
            return res.status(400).json({ error: "Invalid order data" });
        }

        const newOrder = new Order({ items, totalPrice, tableNumber });
        await newOrder.save();

        res.status(201).json({ message: "Order placed successfully", order: newOrder });
    } catch (error) {
        res.status(500).json({ error: "Failed to place order" });
    }
};


