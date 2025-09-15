

import { useState } from "react";

type Course = {
    subject: string;
    grade: string;
};

function Grade() {
    const [subject, setSubject] = useState<string>("");
    const [grade, setGrade] = useState<string>("");
    const [courses, setCourses] = useState<Course[]>([]);

    const addCourse = () => {
        if (subject.trim() === "") return;
        if (grade.trim() === "") return;
        setCourses([...courses, { subject, grade }]);
        setSubject("");
        setGrade("");
    };

    const deleteCourse = (index: number) => {
        const newCourses = courses.filter((_, i) => i !== index);
        setCourses(newCourses);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>My course</h1>
            <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="รายชื่อวิชา"
            />
            <select
                className="grade-select"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
            >
                <option value="">เลือกเกรด</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>
            <button onClick={addCourse}>Add</button>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {courses.map((course, index) => (
                    <li key={index} style={{ margin: "5px 0" }}>
                        {course.subject} - {course.grade}
                        <button
                            style={{ marginLeft: "10px" }}
                            onClick={() => deleteCourse(index)}
                        >
                            ลบ
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Grade;