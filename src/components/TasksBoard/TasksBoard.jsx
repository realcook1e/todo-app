import TaskItem from "../TaskItem/TaskItem";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import { getMaxId } from "../../utils";
import PropTypes from "prop-types";

import "./style.css";

function TasksBoard({ tasks, onTasksChange }) {
	const onTaskInc = id => {
		onTasksChange(
			tasks.map(task => {
				if (task.id === id) {
					if (task.count < task.maxCount) {
						return { ...task, count: task.count + 1 };
					} else {
						return task;
					}
				}

				return task;
			})
		);
	};

	const onTaskDec = id => {
		onTasksChange(
			tasks.map(task => {
				if (task.id === id) {
					if (task.count > 0) {
						return { ...task, count: task.count - 1 };
					} else {
						return task;
					}
				}

				return task;
			})
		);
	};

	const onTaskDelete = id => {
		onTasksChange(tasks.filter(task => task.id !== id));
	};

	const onAddTask = (evt, task) => {
		evt.preventDefault();
		if (task.title.length > 2) {
			onTasksChange([{ ...task, id: getMaxId(tasks), count: 0 }, ...tasks]);
		}
	};

	const taskElems = tasks.map(
		task =>
			task && (
				<TaskItem
					key={task.id}
					task={task}
					onTaskInc={onTaskInc}
					onTaskDec={onTaskDec}
					onTaskDelete={onTaskDelete}
				/>
			)
	);
	return (
		<div className="TasksBoard">
			<AddTaskForm onAddTask={onAddTask} />
			{taskElems.length ? taskElems : <div className="TasksBoard-empty">Текущих задач нет</div>}
		</div>
	);
}

TasksBoard.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
	onTasksChange: PropTypes.func.isRequired,
};

export default TasksBoard;
