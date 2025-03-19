const authenticateAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== "admin") {
        return res.status(403).json({ error: "Unauthorized: Admin access required" });
    }
    next();
};

module.exports = { authenticateAdmin };
