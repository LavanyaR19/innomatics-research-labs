import { useState } from "react";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function app() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);

  const addTask = () => {
    if (!task.trim()) return;
    if (editId !== null) {
      setTasks(
        tasks.map((t, index) => (index === editId ? { text: task, completed: t.completed } : t))
      );
      setEditId(null);
    } else {
      setTasks([...tasks, { text: task, completed: false }]);
    }
    setTask("");
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t))
    );
  };

  const editTask = (index) => {
    setTask(tasks[index].text);
    setEditId(index);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <motion.h1 className="text-3xl font-bold mb-4" animate={{ scale: 1.1 }}>Todo List</motion.h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="p-2 border rounded-md w-64"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={addTask}
        >
          {editId !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul className="w-80">
        {tasks.map((t, index) => (
          <motion.li
            key={index}
            className="flex justify-between items-center p-2 bg-white shadow-md mb-2 rounded-md"
            whileHover={{ scale: 1.05 }}
          >
            <span
              onClick={() => toggleComplete(index)}
              className={`cursor-pointer flex-1 ${t.completed ? "line-through text-gray-500" : ""}`}
            >
              {t.text}
            </span>
            <div className="flex gap-2">
              <FaEdit
                className="text-yellow-500 cursor-pointer"
                onClick={() => editTask(index)}
              />
              <FaTrash
                className="text-red-500 cursor-pointer"
                onClick={() => deleteTask(index)}
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}


//export default app;
