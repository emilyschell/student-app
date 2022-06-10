import React, { useState } from 'react';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

function App() {
    const [studentData, setStudentData] = useState([
        {
            nameData: 'Ada',
            emailData: 'ada@dev.org',
            id: 1,
            isPresent: false,
        },
        {
            nameData: 'Soo-ah',
            emailData: 'sooah@dev.org',
            id: 2,
            isPresent: false,
        },
        {
            nameData: 'Chrissy',
            emailData: 'chrissy@dev.org',
            id: 3,
            isPresent: false,
        },
        {
            nameData: 'Billy',
            emailData: 'billy@goat.org',
            id: 4,
            isPresent: false,
        },
        {
            nameData: 'Josie',
            emailData: 'josie@phine.org',
            id: 5,
            isPresent: false,
        },
    ]);

    const updateStudentData = (updatedStudent) => {
        const students = studentData.map((student) => {
            if (student.id === updatedStudent.id) {
                return updatedStudent;
            } else {
                return student;
            }
        });
        setStudentData(students);
    };

    return (
        <main>
            <h1>Attendance</h1>
            <ClassInfo memberCount={studentData.length}></ClassInfo>
            <StudentList
                students={studentData}
                onUpdateStudent={updateStudentData}></StudentList>
        </main>
    );
}

export default App;
