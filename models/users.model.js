const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: false },
    logo: { type: String, required: false , default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16wLiQZ7c8lcb_aOcI8C9PUX52LEgzdHoX4GnctkD0A&s=10' },
    role: { type: String, enum: ['admin', 'decision_maker'], default: 'admin', required: true },
});

userSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('User', userSchema);