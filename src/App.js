import DefaultCard from "./Cards/DefaultCard";
import Container from "./Layout/Container";

import avatar from "./avatar.jpg";

export default function App(props) {
	return (
		<div>
			<Container classes="main-wrapper">

				{/* Navbar */}
				<Container classes="grid navbar _2-3-2">

					{/* Explore */}
					<input type="text" placeholder="Explore" className="explore" />

					{/* Home Button */}
					<a href="javascript:void()" className="home-btn">
						<span className="material-icons">home</span>
						<p>Home</p>
					</a>

					{/* Icons */}
					<div className="nav-icons">
						<span className="material-icons">email</span>
						<span className="material-icons">notifications</span>
						<span className="sep"></span>
						<div className="user-btn">
							<img src={avatar} />
							<p>Ocean Winckler</p>
							<span className="material-icons">arrow_drop_down</span>
						</div>
					</div>
				</Container>

				{/* Main Content */}
				<Container classes="grid _2-3-2">
					<Container>

						{/* Suggestions */}
						<DefaultCard title="Suggestions">
							<div className="suggested-user">
								<img src={avatar} />
								<div className="user">
									<p className="full-name">Celine Remlinger</p>
									<p className="username">@celiner</p>
								</div>
								<div className="follow-btn">Follow</div>
							</div>
						</DefaultCard>
					</Container>
				</Container>
			</Container>
		</div>
	);
}