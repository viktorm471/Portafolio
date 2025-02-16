import React from "react";
import "./style.css";
import IMG1 from "../../assets/portafolio1.png";
import IMG2 from "../../assets/portafolio2.png";
import IMG3 from "../../assets/portafolio3.png";
import IMG4 from "../../assets/portafolio4.png";
import IMG5 from "../../assets/portafolio5.png";
import IMG6 from "../../assets/portafolio6.png";
import IMG7 from "../../assets/portafolio7.png";
import IMG8 from "../../assets/portafolio8.png";
import IMG9 from "../../assets/portafolio9.png";
import IMG10 from "../../assets/portafolio10.png";
import IMG11 from "../../assets/portafolio11.png";
import IMG12 from "../../assets/portafolio12.png";
import IMG13 from "../../assets/portafolio13.png";

const data = [
  {
		id: 13,
		image: IMG13,
		title: "Ecommerce Angular + Node JS + Firebase",
		github: "https://github.com/viktorm471/ecommerce2",
		demo: "http://food-a-667bc.web.app/",
	},
	{
		id: 12,
		image: IMG1,
		title: "Social Network React + Redux",
		github: "https://github.com/viktorm471/Memories-public",
		demo: "https://mern-memories-victorapp.netlify.app",
	},
	{
		id: 11,
		image: IMG2,
		title: "Travel Web Page JS",
		github: "https://github.com/viktorm471/travel-resorts",
		demo: "https://travelandresorts.b4a.app/",
	},
	{
		id: 10,
		image: IMG3,
		title: "Api Soduku Solver Node + Mocha",
		github: "https://replit.com/@victorrestrepo1/boilerplate-project-sudoku-solver",
		demo: "https://boilerplate-project-sudoku-solver.victorrestrepo1.repl.co",
	},
	{
		id: 9,
		image: IMG4,
		title: "Api American/British Translator Node + Mocha",
		github: "https://replit.com/@victorrestrepo1/boilerplate-project-american-british-english-translator#server.js",
		demo: "https://boilerplate-project-american-british-english-translator.victorrestrepo1.repl.co/",
	},
	{
		id: 8,
		image: IMG5,
		title: "Api Online OnlineChat  Node + Socket.io",
		github: "https://replit.com/@victorrestrepo1/boilerplate-advancednode#routes.js",
		demo: "https://boilerplate-advancednode.victorrestrepo1.repl.co/",
	},
	{
		id: 7,
		image: IMG6,
		title: "CRUD app PHP",
		github: "https://github.com/viktorm471/-PHP-mySQL",
		demo: "",
	},
	{
		id: 6,
		image: IMG7,
		title: "Hotel Api Laravel+Passport",
		github: "https://github.com/viktorm471/Laravel_api",
		demo: "",
	},
	{
		id: 5,
		image: IMG8,
		title: "Pomodoro Clock React",
		github: "https://codepen.io/viktorm471/pen/NWYroLg",
		demo: "https://codepen.io/viktorm471/full/NWYroLg",
	},
	{
		id: 4,
		image: IMG9,
		title: "Data visualization JS+D3",
		github: "https://codepen.io/viktorm471/pen/wvmrzdB",
		demo: "https://codepen.io/viktorm471/full/wvmrzdB",
	},
	{
		id: 3,
		image: IMG10,
		title: "PERN App Todo List",
		github: "https://github.com/viktorm471/PERNAPP",
		demo: "",
	},
	{
		id: 2,
		image: IMG11,
		title: "Issue Tracker Node + Mocha",
		github: "https://replit.com/@victorrestrepo1/boilerplate-project-issuetracker#tests/2_functional-tests.js",
		demo: "https://boilerplate-project-issuetracker.victorrestrepo1.repl.co/",
	},
	{
		id: 1,
		image: IMG12,
		title: "Calculator React",
		github: "https://replit.com/@victorrestrepo1/boilerplate-project-american-british-english-translator#server.js",
		demo: "https://boilerplate-project-american-british-english-translator.victorrestrepo1.repl.co/",
	},
];

const portafolio = () => {
	return (
		<section id="portafolio">
			<h5>My Recent Work</h5>
      <h5>(Please be patient, as the app is hosted on a free hosting service)</h5>
			<h2>Portafolio</h2>

			<div className="container portafolio__container">
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className="portafolio__item">
							<div className="portafolio__item-image">
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<div className="portafolio__item-cta">
								<a
									href={github}
									className="btn"
									target="_blank"
									rel="noreferrer"
								>
									Code
								</a>
								{demo === "" ? (
									""
								) : (
									<a
										href={demo}
										className="btn btn-primary"
										target="_blank"
										rel="noreferrer"
									>
										Live Demo
									</a>
								)}
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default portafolio;
