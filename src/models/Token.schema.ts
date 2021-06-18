import { model, Schema, Types } from "mongoose";

const TokenSchema = new Schema({
    user_id: {type: Types.ObjectId, ref: "User"},
    refreshToken: {type: String, required: true}
});

module.exports = model("Token", TokenSchema);