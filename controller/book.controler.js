import Semester from "../model/book.model.js"; // Ensure the correct path and file extension (.js)

export const getSemester = async (req, res) => {
  try {
    const semester = await Semester.find(); // Corrected 'Semester' reference
    res.status(200).json(semester);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
