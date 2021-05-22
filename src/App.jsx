import { useState, useRef, useEffect } from "react";

import MessageBlock from "./components/MessageBlock/MessageBlock";
import Header from "./components/Header/Header";

import "./App.css";

import chip from "./assets/chip.png";
import chris from "./assets/chris.png";
import you from "./assets/you.png";

function App() {
	const channel = "Recursive Reacts";
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState("");
	const chatRef = useRef(null);

	useEffect(() => {
		if (chatRef.current.scrollTop) {
			chatRef.current.scrollTop = chatRef.current.scrollHeight;
		} else {
			setTimeout(() => {
				chatRef.current.scrollTo({
					top: chatRef.current.scrollHeight + 10,
					behavior: "smooth",
				});
			}, 500);
		}
	}, [input]);

	function submitForm(e) {
		e.preventDefault();
		if (input.trim() !== "") setMessages([...messages, input]);
		setInput("");
	}

	return (
		<div className="app">
			<div ref={chatRef} className="chat-container">
				<Header name={channel} />
				<MessageBlock
					name="chip2222"
					date="Today at 5:57 PM"
					icon={chip}
					time="5:57 PM"
					content={["do u ever wish u could react to reactions?"]}
				/>
				<MessageBlock
					name="chris ge"
					date="Today at 5:57 PM"
					icon={chris}
					time="5:57 PM"
					content={["hwa", "wha", "wdym"]}
				/>
				<MessageBlock
					name="chip2222"
					date="Today at 5:58 PM"
					icon={chip}
					time="5:58 PM"
					content={["like"]}
					initial={[[{ "\u2764\uFE0F": 1 }, { "\u2764\uFE0F": [{ "👍": 1 }] }]]}
				/>
				<MessageBlock
					name="chris ge"
					date="Today at 5:58 PM"
					icon={chris}
					time="5:58 PM"
					content={["lmao", "that would be HELL"]}
				/>
				{!!messages.length && (
					<MessageBlock
						name="you"
						date="Today at 5:59 PM"
						icon={you}
						time="5:59 PM"
						content={messages}
					/>
				)}
				<br />
			</div>
			<form className="text-input" onSubmit={submitForm}>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder={"message # " + channel}
				/>
				<a href="https://apringle.dev" className="logo">
					<div>Made by</div> <div className="brand">Adrien Pringle</div>
				</a>
			</form>
		</div>
	);
}

export default App;
