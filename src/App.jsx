import { useState } from "react";
import TasksBoard from "./components/TasksBoard/TasksBoard";
import "./global.css";

function App() {
	const [tasks, setTasks] = useState([
		{ id: 1, title: "Турник", count: 0, maxCount: 5 },
		{ id: 2, title: "Поесть", count: 0, maxCount: 3 },
		{ id: 3, title: "Поспать", count: 0, maxCount: 1 },
		{ id: 4, title: "Ещё что-нибудь", count: 0, maxCount: 10 },
	]);

	const onTasksChange = newValue => {
		setTasks(newValue);
	};

	return (
		<TasksBoard
			tasks={tasks}
			onTasksChange={onTasksChange}
		/>
	);
}

export default App;
