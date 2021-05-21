import "./AddReaction.css";

function AddReaction({ newReact, close, isRoot }) {
	const reactions = ["\u2764\uFE0F", "👍", "🍆"];

	return (
		<div className={"add-reaction " + (isRoot ? "root" : "")}>
			{reactions.map((emoji) => (
				<button
					onClick={() => {
						close();
						newReact(emoji);
					}}
					key={"button" + emoji}
				>
					{emoji}
				</button>
			))}
		</div>
	);
}

export default AddReaction;
