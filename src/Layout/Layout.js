import React, { Fragment } from "react";
import About from "../components/About";
import Education from "../components/Education";
// 컴포넌트 컴파일 시 불필요한 element(div) 확산 방지

import Header from "../components/Header";
import MainSection from "../components/MainSection";

function Layout() {
	return (
		<Fragment>
			<Header />
			<MainSection />
			<About />
		</Fragment>
	);
}

export default Layout;
