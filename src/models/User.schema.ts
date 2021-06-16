import { model, Schema, Types } from 'mongoose';

const UserSchema = new Schema({
    user_firstname: {type: String, required: true},
    user_lastname: {type: String, required: true},
    user_email: {type: String, required: true, unique: true},
    user_login: {type: String, required: true, unique: true},
    user_gender: {type: String, required: true},
    user_password: {type: String, required: true},
    user_avatar: {type: String, required: true, default: "/client/source/upload/userIcons/user-default-logo.png"},
    user_joined: {type: Date, required: true, default: Date.now()},
    user_role: {type: Number, required: true, default: 1},
    user_block_reason: {type: String, required: false, default: null},

    user_purchases: [{type: Types.ObjectId, ref: 'Purchase', default: {}}]
});

module.exports = model('User', UserSchema);


