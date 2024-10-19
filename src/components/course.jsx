import React, { useState } from 'react';
import List from "../../public/list.json"; // Assuming this is your book data
import Cards from './cards'; // Component for displaying each book
import { Link } from 'react-router-dom';

const Course = () => {
  const [selectedSemester, setSelectedSemester] = useState('1st Semester');
  const [selectedField, setSelectedField] = useState('BCA'); // Default field

  // Function to handle semester change
  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  // Function to handle field change
  const handleFieldChange = (e) => {
    setSelectedField(e.target.value);
  };

  // Find the selected semester data based on the selected field
  const semesterData = List.find(semester => semester.semester === selectedSemester);

  return (
    <div className='max-w-full container mx-auto px-4'>
      <div className='mt-28 text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>
          We're delighted to have you <span className='text-pink-500'>Here! :)</span>
        </h1>
        <p className='mt-6'>
          "Unlock the door to limitless knowledge—every page is a new adventure! Journey through our collection and start your journey today!"
        </p>
        <Link to='/'>
          <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 mt-5'>
            Back
          </button>
        </Link>
      </div>

      {/* Dropdown for field selection */}
      <div className='mt-12 flex justify-center space-x-4'>
        <select 
          value={selectedField}
          onChange={handleFieldChange}
          className='p-2 border rounded-md'>
          <option value='BCA'>BCA</option>
        </select>

        {/* Dropdown for semester selection */}
        <select 
          value={selectedSemester}
          onChange={handleSemesterChange}
          className='p-2 border rounded-md'>
          {List.map((semester, index) => (
            <option key={index} value={semester.semester}>
              {semester.semester}
            </option>
          ))}
        </select>
      </div>

      {/* Display subjects for the selected semester */}
      <div className='mt-12'>
        <h2 className='text-xl font-semibold mb-4'>{selectedSemester}</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {semesterData?.subjects.map((subject) => (
            <Cards key={subject.id} item={subject} />
          )) || <p>No subjects found for this semester.</p>}
        </div>
      </div>
    </div>
  );
};

export default Course;
