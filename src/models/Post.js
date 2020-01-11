import mongoose from "mongoose";

export const Tweet = mongoose.model("Post", {username: String, message: String, date: Date});