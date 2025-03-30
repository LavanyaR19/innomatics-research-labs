// controllers/adminController.js

const Admin = require("../models/Admin"); // Ensure correct model import

exports.updateAdmin = async (req, res) => {
    try {
        const admin = await Admin.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        res.json({ message: "Admin updated successfully", admin });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
