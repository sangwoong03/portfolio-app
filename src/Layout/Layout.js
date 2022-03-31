import React, { Fragment } from "react";
import About from "../components/About";
// 컴포넌트 컴파일 시 불필요한 element(div) 확산 방지

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import Projects from "../components/Project/Project";
import SideNav from "../components/SideNav/SideNav";

function Layout() {
	return (
		<Fragment>
			<Header />
			<SideNav />
			<MainSection />
			<About />
			<Projects />
		</Fragment>
	);
}

export default Layout;
