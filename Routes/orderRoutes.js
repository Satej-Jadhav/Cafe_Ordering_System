const express = require("express");
const router = express.Router();
const { placeOrder, getOrders, updateOrderStatus } = require("../Controllers/orderController");

// 🛒 USER SIDE - Place Order
router.post("/orders", placeOrder);

// 🔧 ADMIN SIDE - Manage Orders
router.get("/admin/orders", getOrders);
router.put("/admin/order/:id", updateOrderStatus);

module.exports = router;
