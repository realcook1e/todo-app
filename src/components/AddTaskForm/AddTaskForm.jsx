import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

function AddTaskForm({ onAddTask }) {
	const [newTask, setNewTask] = useState({
		title: "",
		maxCount: 1,
	});

	return (
		<form
			className="AddTaskForm"
			name="new-task"
			onSubmit={evt => onAddTask(evt, newTask)}
		>
			<input
				type="text"
				name="title"
				placeholder="Название задачи"
				onChange={evt => setNewTask({ ...newTask, title: evt.target.value })}
				value={newTask.title}
			/>
			<input
				type="number"
				name="target"
				placeholder="Цель"
				min="1"
				onChange={evt => setNewTask({ ...newTask, maxCount: +evt.target.value })}
				value={newTask.maxCount}
			/>
			<button className="btn">Добавить</button>
		</form>
	);
}

AddTaskForm.propTypes = {
	onAddTask: PropTypes.func.isRequired,
};

export default AddTaskForm;
