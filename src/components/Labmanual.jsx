import React, { useState } from 'react';
import Navbar from './Navbar'; // Ensure the path is correct
import Footer from './Footer'; // Ensure the path is correct
import LabImage from '../../public/Lab Manual/lab image.png'; // Adjust the path to the Banner.png image

const LabManuals = () => {
  // Sample data for lab manuals
  const labManuals = [
    { id: 1, name: 'Lab Manual 1 - Semester 1', description: 'Programming In C', semester: 1, pdf: 'public/Lab Manual/c program-New Lab Manual.pdf' },
    { id: 2, name: 'Lab Manual 2 - Semester 1', description: 'Fundamental Of Computer', semester: 1, pdf: 'public/Lab Manual/Computer Fundamentals.pdf' },
    { id: 3, name: 'Lab Manual 1 - Semester 2', description: 'Programming In Java', semester: 2, pdf: 'public/Lab Manual/JavaLabPrograms-IISEMBCA-BNU-PartA&B.pdf' },
    { id: 4, name: 'Lab Manual 2 - Semester 2', description: 'Data Structure In C', semester: 2, pdf: 'public/Lab Manual/DSC program (1).pdf' },
    { id: 5, name: 'Lab Manual 1 - Semester 3', description: 'Programming in C#.Net', semester: 3, pdf: 'public/Lab Manual/C# Lab Programs ( 1 ).pdf' },
    { id: 6, name: 'Lab Manual 2 - Semester 3', description: 'Database Managment System', semester: 3, pdf: 'public/Lab Manual/DATABASE MANAGEMENT SYSTEM LAB.pdf' },
    { id: 7, name: 'Lab Manual 1 - Semester 4', description: 'Computer MultiMedia And Animation', semester: 4, pdf: 'public/Lab Manual/CMA Lab.pdf' },
    { 
      id: 8, 
      name: 'Lab Manual 2 - Semester 4', 
      description: 'Python Programming', 
      semester: 4, 
      pdfs: [
        { label: 'Part A', url: 'public/Lab Manual/python program part A.pdf' }, 
        { label: 'Part B', url: 'public/Lab Manual/PYTHON PART-B.pdf' }
      ]
    },
    { id: 9, name: 'Lab Manual 1 - Semester 5', description: 'R Programming', semester: 5, pdf: 'public/Lab Manual/5 sem Lab manual R programming BCA_BSC.pdf' },
    { id: 10, name: 'Lab Manual 2 - Semester 5', description: 'Data Analysis Algorithem', semester: 5, pdf: 'public/Lab Manual/DAA_Lab_Programs.pdf' },
    { id: 11, name: 'Lab Manual 1 - Semester 6', description: 'Php Programming', semester: 6, pdf: 'public/Lab Manual/Programming In PHP Lab.pdf' },
    { id: 12, name: 'Lab Manual 2 - Semester 6', description: 'Mobile Application', semester: 6, pdf: 'public/Lab Manual/MOBILE APPLICATIONS.pdf' },
  ];

  const [selectedSemester, setSelectedSemester] = useState(1); // Default to Semester 1

  // Filter manuals based on selected semester
  const filteredManuals = labManuals.filter(manual => manual.semester === selectedSemester);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar /> {/* Navbar is now integrated here */}

      <h1 className="text-center text-4xl font-extrabold text-gray-800 my-8 mt-20">Lab Manuals</h1>

      {/* Dropdown for selecting semester */}
      <div className="flex justify-center mb-6">
        <label className="mr-2 text-lg font-medium text-gray-700">Select Semester:</label>
        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(Number(e.target.value))}
          className="bg-white border border-gray-300 rounded-lg p-2 shadow-md hover:border-blue-500 transition-colors"
        >
          <option value={1}>Semester 1</option>
          <option value={2}>Semester 2</option>
          <option value={3}>Semester 3</option>
          <option value={4}>Semester 4</option>
          <option value={5}>Semester 5</option>
          <option value={6}>Semester 6</option>
        </select>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredManuals.map((manual) => (
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105" key={manual.id}>
              <img src={LabImage} alt={manual.name} className="w-full h-52 md:h-52 object-cover" />
              <div className="p-4">
                <h5 className="text-xl font-semibold text-gray-800">{manual.name}</h5>
                <p className="text-gray-600 mb-4">{manual.description}</p>

                {/* Conditionally handle two PDFs for id: 8 */}
                {manual.id === 8 ? (
                  <div>
                    {manual.pdfs.map((pdf, index) => (
                      <a 
                        key={index} 
                        href={pdf.url} 
                        className="block bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition-colors mb-2" 
                        download
                      >
                        Download {pdf.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a href={manual.pdf} className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition-colors" download>
                    Download PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LabManuals;
