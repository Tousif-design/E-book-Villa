import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const modelPapers = {
    papers: 'BCom',
    semesters: [
        {
            semester: '1st Semester',
            subjects: [
                { id: 1, name: 'All The Model Question Papers Of 1st Semester', pdf: '/Model Pappers/1st sem question papers 2022 (1).pdf' },
            ],
        },
        {
            semester: '2nd Semester',
            subjects: [
                { id: 1, name: 'All The Model Question Papers Of 2nd Semester', pdf: '/Model Pappers/2nd sem question papers 2022.pdf' },
            ],
        },
        {
            semester: '3rd Semester',
            subjects: [
                { id: 1, name: 'All The Model Question Papers Of 3rd Semester', pdf: '/Model Pappers/3rd Sem BCA 23-24 Question Papers.pdf' },
            ],
        },
        {
            semester: '4th Semester',
            subjects: [
                { id: 1, name: 'Computer Multimedia Animation Model Paper', pdf: '/Model Pappers/4 SEM BCA/BCA CMA-2023.pdf' },
                { id: 2, name: 'Operating System', pdf: '/Model Pappers/4 SEM BCA/OS QP 2023-24.pdf' },
                { id: 3, name: 'Python', pdf: '/Model Pappers/4 SEM BCA/BCA PYTHON-2023.pdf' },
                { id: 4, name: 'General English', pdf: '/Model Pappers/4 SEM BCA/BCA GENERAL ENG-2023.pdf' },
                { id: 5, name: 'Hindi', pdf: '/Model Pappers/4 SEM BCA/Hindi.pdf' },
                { id: 6, name: 'Kannada', pdf: '/Model Pappers/4 SEM BCA/Kannada.pdf' },
            ],
        },
        {
            semester: '5th Semester',
            subjects: [
                { id: 1, name: 'Few Model Question Papers Of 5th Semester', pdf: '/Model Pappers/5 SEM BCA/5 SEM BCA 2024.pdf' },
                { id: 2, name: 'Cyber Security', pdf: '/Model Pappers/5 SEM BCA/CYBER SECURITY.pdf' },
                { id: 3, name: 'Cloud Computing', pdf: '/Model Pappers/5 SEM BCA/Cloud computing.pdf' },
            ],
        },
    ],
};

const ModelPapers = () => {
    const [selectedSemester, setSelectedSemester] = useState(modelPapers.semesters[0].semester);

    const handleSemesterChange = (event) => {
        setSelectedSemester(event.target.value);
    };

    const subjects = modelPapers.semesters.find(
        (semester) => semester.semester === selectedSemester
    )?.subjects || [];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <div className="container mx-auto mt-8 pt-16 flex-grow">
                <h1 className="text-3xl font-bold text-center mb-6">{selectedSemester} Model Papers</h1>

                <div className="mb-4 text-center">
                    <label htmlFor="semester-select" className="mr-2 font-semibold">Select Semester: </label>
                    <select
                        id="semester-select"
                        className="border border-gray-300 rounded p-2"
                        value={selectedSemester}
                        onChange={handleSemesterChange}
                    >
                        {modelPapers.semesters.map((semester) => (
                            <option key={semester.semester} value={semester.semester}>
                                {semester.semester}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subjects.map((subject) => (
                            <div key={subject.id} className="bg-white shadow-md rounded-lg p-4">
                                <h3 className="text-sm font-bold mb-4">{subject.name}</h3>
                                <div className="flex justify-between items-center">
                                    <a
                                        href={subject.pdf}
                                        className="bg-blue-500 text-white px-4 py-2 rounded"
                                        download={subject.name}
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer className="mt-auto" />
        </div>
    );
};

export default ModelPapers;
