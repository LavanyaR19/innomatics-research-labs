const Appointment = require("../models/Appointment");

exports.bookAppointment = async (req, res) => {
    try {
        const { doctorId, date, time } = req.body;

        const appointment = new Appointment({
            patient: req.user.id,
            doctor: doctorId,
            date,
            time,
            status: "Pending"
        });

        await appointment.save();
        res.status(201).json({ message: "Appointment booked successfully", appointment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.cancelAppointment = async (req, res) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        res.json({ message: "Appointment canceled successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ patient: req.user.id }).populate("doctor", "name specialization");
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
