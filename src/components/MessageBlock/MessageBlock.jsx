import "./MessageBlock.css";
import Message from "../Message/Message";

function MessageBlock({ icon, name, date, time, content, initial }) {
	const [first, ...rest] = content.map((c, index) => (
		<Message content={c} initial={initial && initial[index]} />
	));
	return (
		<div className="message-block">
			<div className="row">
				<div className="first">
					<img className="icon" src={icon} alt={"profile icon for " + name} />
				</div>
				<div style={{ width: "100%" }}>
					<span className="name">{name}</span>
					<small className="date">{date}</small>
					{first}
				</div>
			</div>
			{rest.map((m, index) => (
				<div key={"message" + index} className="row">
					<small className="time first">{time}</small>
					{m}
				</div>
			))}
		</div>
	);
}

export default MessageBlock;
