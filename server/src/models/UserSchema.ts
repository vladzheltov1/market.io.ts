import { model, Schema, Types } from 'mongoose';

const UserSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    login: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: true, default: "User.jpg" },
    joined: { type: Date, required: true, default: Date.now() },
    role: { type: Number, required: true, default: 1 },
    block_reason: { type: String, required: false, default: null },

    money: { type: Number, default: 5000 },
    purchases: [{ type: Types.ObjectId, ref: 'Purchase', default: {} }]
});

module.exports = model('User', UserSchema);


