import React from "react";
import "./Education.css";

function Education() {
	const eduInfo = [
		{
			institute: "SEMA HIGHSCHOLL",
			major: "-",
			terms: "2012. 03 ~ 2015. 02",
			grade: "Graduated",
		},
		{
			institute: "AJOU UNIVERSITY",
			major: "English Lang. and Lit.",
			terms: "2015. 03 ~ 2019. 02",
			grade: "3.7 / 4.5 ",
		},
		{
			institute: "ZEROBASE",
			major: "Front-end Programming",
			terms: "2021. 11 ~ 2022. 01",
			grade: "Passed",
		},
		{
			institute: "WECODE BOOTCAMP",
			major: "Front-end Programming",
			terms: "2022. 05 ~ ",
			grade: "not yet",
		},
	];

	return (
		<table className="edu__table">
			<thead>
				<tr>
					<th>Institute</th>
					<th>Major</th>
					<th>Terms</th>
					<th>Grade</th>
				</tr>
			</thead>

			<tbody>
				{eduInfo.map((item, index) => (
					<tr key={index}>
						<td> {item.institute} </td>
						<td> {item.major} </td>
						<td> {item.terms} </td>
						<td> {item.grade} </td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Education;
