import React from "react";
import "./style.css";
import ME from "../../assets/mw.png";
import { FaAward } from "react-icons/fa";
const About = () => {
	return (
		<section id="about">
			<h5>Get to Know</h5>
			<h2>About me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="about" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Professional Cibersecurity Certification</h5>
							<small>Google Coursera</small>
						</article>

						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Software Development Technician</h5>
							<small>Cesde</small>
						</article>

						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>English B2 Certificate</h5>
							<small> Colombo Americano</small>
						</article>
					</div>
					<p>
						I am a self-taught, an innovator who enjoys solving
						everyday challenges through creative software solutions.
						In my current role, I have successfully designed and
						implemented diverse applications, including mass mailing
						systems and business tools like CRM and CMS solutions.
						My primary focus is on delivering high-quality, secure,
						and efficient code that meets user needs.
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
