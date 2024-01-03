import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar/ProgressBar";

import "./style.css";

function TaskItem({ task, onTaskInc, onTaskDec, onTaskDelete }) {
	const getTaskProgress = () => {
		if (task.count === 0) {
			return "TaskItem__notstarted";
		} else if (task.count === task.maxCount) {
			return "TaskItem__completed";
		} else {
			return "TaskItem__inprogress";
		}
	};

	return (
		<div className={`TaskItem ${getTaskProgress()}`}>
			<div className="TaskItem-header">
				<p className="TaskItem-title">{task.title}</p>
				<button
					className="TaskItem-delete"
					onClick={() => onTaskDelete(task.id)}
				>
					✖
				</button>
			</div>
			<ProgressBar
				target={task.maxCount}
				current={task.count}
			/>
			<div className="TaskItem-controls">
				<button
					className="btn"
					onClick={() => onTaskInc(task.id)}
					disabled={task.count === task.maxCount}
				>
					Make step
				</button>
				<button
					className="btn"
					onClick={() => onTaskDec(task.id)}
					disabled={task.count === 0}
				>
					Step back
				</button>
			</div>
		</div>
	);
}

TaskItem.propTypes = {
	task: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		count: PropTypes.number.isRequired,
		maxCount: PropTypes.number.isRequired,
	}).isRequired,
	onTaskInc: PropTypes.func.isRequired,
	onTaskDec: PropTypes.func.isRequired,
	onTaskDelete: PropTypes.func.isRequired,
};

export default TaskItem;
