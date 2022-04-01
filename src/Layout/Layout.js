import React, { Fragment } from "react";
// 컴포넌트 컴파일 시 불필요한 element(div) 확산 방지

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import SideNav from "../components/SideNav/SideNav";
import About from "../components/About";
import Projects from "../components/Project/Project";
import Contact from "../components/Contact/Contact";

function Layout() {
	return (
		<Fragment>
			<Header />
			<SideNav />
			<MainSection />
			<About />
			<Projects />
			<Contact />
		</Fragment>
	);
}

export default Layout;
