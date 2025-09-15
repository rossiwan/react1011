import { useState } from "react";

type Task = {
  title: string;
  type: string;
  dueDate: string;
};

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (title.trim() === "") return;

    setTasks([...tasks, { title, type, dueDate }]);
    setTitle("");
    setType("");
    setDueDate("");
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My To-do List</h1>

      <input
        type="text"
        value={title}
        placeholder="งานที่ต้องทำ"
        onChange={(e) => setTitle(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">เลือกประเภทงาน</option>
        <option value="เรียน">เรียน</option>
        <option value="ทำงาน">ทำงาน</option>
        <option value="บ้าน">งานบ้าน</option>
        <option value="อื่นๆ">อื่นๆ</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: "5px 0" }}>
            {task.title}
            {task.type && ` | ประเภท: ${task.type}`}
            {task.dueDate && ` | ส่ง: ${task.dueDate}`}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => deleteTask(index)}
            >
              ลบ
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
