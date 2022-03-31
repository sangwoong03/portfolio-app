import React from "react";
import "./SideNav.css";

function SideNav() {
	return (
		<div className="sidenav__wrapper">
			<span>
				<a
					href="https://github.com/sangwoong03"
					target="_blank"
					rel="noreferrer"
				>
					<i class="ri-github-line"></i>
					<p> Github </p>
				</a>
			</span>
			<span>
				<a href="#">
					<i class="ri-linkedin-line"></i>
					<p> LinkedIn</p>
				</a>
			</span>
			<span>
				<a href="#">
					<i class="ri-instagram-line"></i>
					<p> Instagram </p>
				</a>
			</span>
		</div>
	);
}

export default SideNav;
