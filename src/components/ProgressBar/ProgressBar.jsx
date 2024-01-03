import PropTypes from "prop-types";
import "./style.css";

function ProgressBar({ current, target }) {
	return (
		<div className="ProgressBar">
			<progress
				className="ProgressBar-progress"
				max={target}
				value={current}
			></progress>
			<div className="ProgressBar-values">
				{current} / {target}
			</div>
		</div>
	);
}

ProgressBar.propTypes = {
	current: PropTypes.number,
	target: PropTypes.number,
};

export default ProgressBar;
