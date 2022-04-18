import React, { Fragment } from "react";
// 컴포넌트 컴파일 시 불필요한 element(div) 확산 방지

import Header from "../components/Header/Header";
import MainSection from "../components/Main/MainSection";
import SideNav from "../components/SideNav/SideNav";
import About from "../components/About/About";
import Projects from "../components/Project/Project";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Layout() {
	return (
		<Fragment>
			<Header />
			<SideNav />
			<MainSection />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</Fragment>
	);
}

export default Layout;
