import React, { useState } from "react";
import "./Header.css";
import { Container } from "reactstrap";

const navItems = [
	{
		display: "Home",
		url: ".header",
	},
	{
		display: "About",
		url: ".about",
	},
	{
		display: "Projects",
		url: ".project",
	},
	{
		display: "Contact",
		url: ".contact",
	},
];

function Header() {
	let last_scroll_position = 0;
	let working = false;

	const [changing, setChanging] = useState(false);
	const [scrolling, setScrolling] = useState(false);

	const scrollView = (scroll_position) => {
		if (scroll_position >= 10) {
			setChanging(true);
			setScrolling(true);
		} else {
			setChanging(false);
			setScrolling(false);
		}
	};
	window.addEventListener("scroll", (e) => {
		last_scroll_position = window.scrollY;

		if (!working) {
			window.requestAnimationFrame(() => {
				scrollView(last_scroll_position);
				working = false;
			});
			working = true;
		}
	});

	const MouseMove = () => {
		if (scrolling) return;
		setChanging((current) => !current);
	};

	const NavHandleClick = (e) => {
		e.preventDefault();
		const targetAttr = e.target.getAttribute("href");
		const location = document.querySelector(targetAttr).offsetTop;

		window.scroll({
			left: 0,
			top: location - 70,
		});
	};

	return (
		<header
			className="header"
			onMouseOver={MouseMove}
			onMouseOut={MouseMove}
			style={
				changing
					? {
							background: "#132247",
							boxShadow: "2px 2px 4px -2px #7865FF",
					  }
					: { backgroundColor: "transparent" }
			}
		>
			<Container>
				<div className="navigation d-flex align-items-center justify-content-between">
					<div className="logo">
						<h5>SangWoong</h5>
					</div>

					<div className="nav__menu">
						<ul className="nav__list">
							{navItems.map((item, index) => (
								<li className="nav__item" key={index}>
									<a href={item.url} onClick={NavHandleClick}>
										{item.display}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="nav__right d-flex align-items-center gap-4">
						<button className="btn"> Let's a Talk</button>
						<span className="mobile__menu">
							<i class="ri-menu-5-line"></i>
						</span>
					</div>
				</div>
			</Container>
		</header>
	);
}

export default Header;
