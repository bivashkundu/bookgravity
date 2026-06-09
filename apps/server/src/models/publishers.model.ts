import mongoose from "mongoose";

const publishersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
}, {
    timestamps: true,
});

const Publishers = mongoose.model('Publishers', publishersSchema);
export default Publishers;