import "./Header.css";

function Header({ name }) {
	return (
		<div className="header">
			<div className="circle">#</div>
			<div className="welcome">Welcome to # {name}!</div>
			<div className="start">This is the start of the # {name} channel</div>
			<hr />
		</div>
	);
}
export default Header;
