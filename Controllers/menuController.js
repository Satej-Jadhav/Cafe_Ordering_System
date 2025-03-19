const Menu = require('../Models/menu');

// ✅ Get All Menu Items
const getMenu = async (req, res) => {
    try {
        const menu = await Menu.find();
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

// ✅ Get Menu Item by ID
const getMenuItem = async (req, res) => {
    try {
        const menuItem = await Menu.findById(req.params.id);
        if (!menuItem) {
            return res.status(404).json({ success: false, message: "Menu item not found" });
        }
        res.status(200).json(menuItem);
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

// ✅ Get Menu Items by Category
const getMenuByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const menuItems = await Menu.find({ category });
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

// ✅ Add Menu Item
const addMenuItem = async (req, res) => {
    try {
        const { name, price, image, category, variants } = req.body;
        const newMenuItem = new Menu({ name, price, image, category, variants });
        await newMenuItem.save();
        res.status(201).json({ success: true, message: "Menu item added successfully", newMenuItem });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

// ✅ Update Menu Item
const updateMenuItem = async (req, res) => {
    try {
        const updatedMenu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMenu) {
            return res.status(404).json({ success: false, message: "Menu item not found" });
        }
        res.status(200).json({ success: true, message: "Menu item updated", updatedMenu });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

// ✅ Delete Menu Item
const deleteMenuItem = async (req, res) => {
    try {
        const deletedMenu = await Menu.findByIdAndDelete(req.params.id);
        if (!deletedMenu) {
            return res.status(404).json({ success: false, message: "Menu item not found" });
        }
        res.status(200).json({ success: true, message: "Menu item deleted", deletedMenu });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

// ✅ Export All Controllers
module.exports = { 
    getMenu, 
    getMenuItem, 
    getMenuByCategory, 
    addMenuItem, 
    updateMenuItem, 
    deleteMenuItem 
};
