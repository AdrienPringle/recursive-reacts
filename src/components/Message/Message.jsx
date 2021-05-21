import { useState, useEffect, useRef } from "react";

import "./Message.css";
import Reaction from "../Reaction/Reaction";

function Message({ content, initial }) {
	const currentState = useState(null);
	const reactionRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (reactionRef.current && !reactionRef.current.contains(event.target)) {
				currentState[1](null);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [currentState]);
	return (
		<div ref={reactionRef} className="root-reaction">
			<Reaction
				initial={initial}
				content={content}
				currentState={currentState}
				count={""}
				depth={0}
			/>
		</div>
	);
}

export default Message;
