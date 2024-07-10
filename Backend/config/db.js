import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://ruvishushukla:RV12985@cluster0.zomdbrm.mongodb.net/food-del").then(() => console.log("DB Connected"))
}
