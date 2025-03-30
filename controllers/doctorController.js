const Doctor = require("../models/Doctor");

exports.setAvailability = async (req, res) => {
    try {
        const { availableSlots } = req.body;

        const doctor = await Doctor.findByIdAndUpdate(req.user.id, { availableSlots }, { new: true });

        res.json({ message: "Availability updated", doctor });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getDoctorProfile = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.user.id).select("-password");
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
