import mongoose from "mongoose";

const sectionHeadingSchema = new mongoose.Schema({
    sectionKey: {
        type: String,
        required: true,
        unique: true,
    },
    mainHeading: {
        type: String,
        required: true,
    },
    subHeading: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const SectionHeading = mongoose.model('SectionHeading', sectionHeadingSchema);
export default SectionHeading;
