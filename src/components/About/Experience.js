import React from "react";
import "./Experience.css";

const ExData = [
	{
		year: "2019-03 ~ 2021-06",
		title: "Leader",
		desc: "I have to fill this form about my experiences when I did in Korean	Army. uhmm about 100-120 words maybe.",
		img: "../assets/ex_1.jpg", // Public 폴더에 assets 폴더 생성해야 태그 상대경로 사용 가능
	},
	{
		year: "2021-10 ~ 2022-05",
		title: "Traveler",
		desc: "I have to fill this form about my experiences when I did in Korean	Army. uhmm about 100-120 words maybe.",
		img: "../assets/ex_2.jpg",
	},
	{
		year: "2022-05 ~ 2022-08",
		title: "Developer",
		desc: "I have to fill this form about my experiences when I did in Korean	Army. uhmm about 100-120 words maybe.",
		img: "../image/ex_3.jpg",
	},
];

function Experience() {
	const ExItem = ({ year, title, desc, img }) => (
		<div className="ex__item d-flex justify-content-between">
			<div className="ex__item-left">
				<span className="ex__icon">
					<i class="ri-briefcase-line"></i>
				</span>
				<h6 className="ex__year"> {year} </h6>
				<h5 className="ex__title"> {title} </h5>
				<p>{desc}</p>
			</div>
			<div className="ex__item-right">
				<img src={img} alt="" />
			</div>
		</div>
	);

	return (
		<div className="ex__container">
			{ExData.map((item, index) => (
				<ExItem
					key={index}
					year={item.year}
					title={item.title}
					desc={item.desc}
					img={item.img}
				/>
			))}
		</div>
	);
}
export default Experience;
