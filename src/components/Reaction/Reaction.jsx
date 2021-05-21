import { useState, useRef } from "react";
import "./Reaction.css";
import AddReaction from "../AddReaction/AddReaction";

function Reaction({ content, count, currentState, depth, initial }) {
	const [children, setChildren] = useState((initial && initial[0]) || {});
	const selfRef = useRef(null);
	const [current, setCurrent] = currentState;

	function newReact(emoji) {
		const count = children[emoji] || 0;
		setChildren({ ...children, [emoji]: count + 1 });
	}
	function close(event) {
		if (event.target !== selfRef.current) return;
		setCurrent(null);
	}
	function toggleClicked() {
		if (selfRef === current) {
			setCurrent(null);
			return;
		}
		setCurrent(selfRef);
	}
	return (
		<div ref={selfRef} onClick={close} className={`box ${depth ? "" : "root"}`}>
			<div className={`content ${depth ? "" : "root"}`} onClick={toggleClicked}>
				{content} <span className="count"> {count} </span>
				{selfRef === current && (
					<AddReaction
						isRoot={depth === 0}
						className={depth ? "" : "root"}
						newReact={newReact}
						close={() => setCurrent(null)}
					/>
				)}
			</div>
			<div
				className={`reaction-container ${depth ? "" : "root"}`}
				style={{ fontSize: Math.pow(1 / 3, depth) + "rem" }}
			>
				{Object.entries(children).map(([key, value]) => (
					<Reaction
						initial={initial && initial[1] && initial[1][key]}
						currentState={currentState}
						count={value}
						key={key}
						content={key}
						depth={depth + 1}
					/>
				))}
			</div>
		</div>
	);
}

export default Reaction;
