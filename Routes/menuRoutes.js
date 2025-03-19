const express = require("express");
const router = express.Router();
const { 
    getMenu, 
    getMenuItem, 
    getMenuByCategory, 
    addMenuItem, 
    updateMenuItem, 
    deleteMenuItem 
} = require("../Controllers/menuController"); // ✅ Make sure the path is correct

// 🛒 USER SIDE - View Menu Items
router.get("/menu", getMenu);                
router.get("/menu/:id", getMenuItem);        
router.get("/menu/category/:category", getMenuByCategory); 

// 🔧 ADMIN SIDE - Manage Menu Items (Protected)
router.post("/menu", addMenuItem);           
router.put("/menu/:id", updateMenuItem);     
router.delete("/menu/:id", deleteMenuItem);  

module.exports = router;


