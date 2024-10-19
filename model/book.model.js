import mongoose from "mongoose";

// Define the schema for subjects
const subjectSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  pdf: { type: String }, // Used for subjects with PDFs
  image: { type: String }, // Used for subjects with images
});

// Define the schema for semesters
const semesterSchema = new mongoose.Schema({
  semester: { type: String, required: true },
  subjects: [subjectSchema], // Array of subjects
});

// Define the schema for books
const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  semesters: [semesterSchema], // Array of semesters
});

// Export the model
const Book = mongoose.model("Book", bookSchema);
export default Book;
