import React from "react";
import "./style.css";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaBusinessTime } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

function calculateDuration(startDate) {
    const start = new Date(startDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();

    if (days < 0) {
        months -= 1;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return { years, months, days };
}

function formatDuration(duration) {
    const { years, months, days } = duration;
    return `${years} Year${years !== 1 ? 's' : ''}, ${months} Month${months !== 1 ? 's' : ''}, ${days} Day${days !== 1 ? 's' : ''}`;
}

const duration = calculateDuration('2023-03-27');
const formattedDuration = formatDuration(duration);


const Experience = () => {
	return (
		<section id="experience">
			<h5>History of my Work</h5>
			<h2 className="experience__title">My experience</h2>
			<h5>{formattedDuration}</h5>
			<h5>As Developer</h5>
			<VerticalTimeline>
			<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  rgb(33, 150, 243)",
					}}
					date="09/2025 - Present"
					iconStyle={{
						background: "rgb(233, 30, 99)",
						color: "#fff",
					}}
					icon={<FaBusinessTime />}
				>
					<h3 className="vertical-timeline-element-title">
						Devops
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Concept BPO
					</h4>
					<ul className="task-list">
						<li>
							To design, maintain, and harden server infrastructure while ensuring a robust software development lifecycle by implementing CI/CD pipelines, infrastructure automation, monitoring, and security best practices across all environments.
						</li>
						<li>
							Improve backend application efficiency by leveraging Redis queues for asynchronous processing, optimizing CPU and memory usage in backend code, and enhancing overall system performance, scalability, and reliability.
						</li>
					</ul>
					<p></p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  rgb(33, 150, 243)",
					}}
					date="09/2023 - 09/2025"
					iconStyle={{
						background: "rgb(233, 30, 99)",
						color: "#fff",
					}}
					icon={<FaBusinessTime />}
				>
					<h3 className="vertical-timeline-element-title">
						Junior Developer
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Concept BPO
					</h4>
					<ul className="task-list">
						<li>
							Design and develop a corporate WhatsApp application leveraging WebSockets for real-time event handling and integrating Meta (WhatsApp Business) APIs to support automated messaging, customer interactions, and scalable backend services.
						</li>
						<li>
							Enhance our internal applications while reviewing
							and strengthening their security.
						</li>
					</ul>
					<p></p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="12/2024"
					iconStyle={{
						background: "#2c2c6c",
						color: "#fff",
					}}
					icon={<MdSchool />}
				>
					<h3 className="vertical-timeline-element-title">
						Professional Cibersecurity Certification  
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Google Certificate and Coursera
					</h4>
					<p>Networking, Linux, Prevent vulnerabilities</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="12/2023"
					iconStyle={{
						background: "#2c2c6c",
						color: "#fff",
					}}
					icon={<MdSchool />}
				>
					<h3 className="vertical-timeline-element-title">
						Software Developer Tecnician
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						CESDE
					</h4>
					<p>JS, React, Python, Relational databases</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="03/2023 - 09/2023"
					iconStyle={{
						background: "rgb(233, 30, 99)",
						color: "#fff",
					}}
					icon={<FaBusinessTime />}
				>
					<h3 className="vertical-timeline-element-title">
						Junior Developer Intership
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Concept BPO
					</h4>
					<ul className="task-list">
						<li>
							Developed an application to control the reclutment
							proccess and the daily schedules
						</li>
						<li>
							Created a CRM with differents librarys to follow and
							control the debts
						</li>
					</ul>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2020-2021"
					iconStyle={{
						background: "rgb(233, 30, 99)",
						color: "#fff",
					}}
					icon={<FaBusinessTime />}
				>
					<h3 className="vertical-timeline-element-title">
						Volunteer Teacher
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Preuniversity for UdeA
					</h4>
					<p>Mathematics, Logical thinking</p>
				</VerticalTimelineElement>
				
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2014-2019"
					iconStyle={{
						background: "#2c2c6c",
						color: "#fff",
					}}
					icon={<MdSchool />}
				>
					<h3 className="vertical-timeline-element-title">
						Political Science
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Bachelor's degree at UdeA
					</h4>
					<p>Analitic thinking, Research Skills, Project Management</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="2012-2014"
					iconStyle={{
						background: "#2c2c6c",
						color: "#fff",
					}}
					icon={<MdSchool />}
				>
					<h3 className="vertical-timeline-element-title">
						Civil engineer
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						4 semesters at UNAL
					</h4>
					<p>Critical Thinking, Problem resolution, Basic Programming Concepts</p>
				</VerticalTimelineElement>
				
				<VerticalTimelineElement
					iconStyle={{
						background: "rgb(16, 204, 82)",
						color: "#fff",
					}}
					// icon={<StarIcon />}
				/>
			</VerticalTimeline>

			<h5 className="skills__title">What Skills I Have</h5>
			<h2>Skills</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>HTML</h4>
								<small className="text-light">
									{" "}
									Experienced
								</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Javascript</h4>
								<small className="text-light">
									{" "}
									Experienced
								</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Bootstrap</h4>
								<small className="text-light">
									{" "}
									Experienced
								</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>React</h4>
								<small className="text-light">
									{" "}
									Intermediate
								</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Jquery</h4>
								<small className="text-light">
									{" "}
									Experienced
								</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Angular</h4>
								<small className="text-light"> Basic</small>
							</div>
						</article>
					</div>
				</div>

				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Node js</h4>
								<small className="text-light">
									{" "}
									Experienced
								</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>PHP</h4>
								<small className="text-light">
									{" "}
									Experienced
								</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>QA Mocha</h4>
								<small className="text-light">
									{" "}
									Intermediate
								</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>MySQL</h4>
								<small className="text-light">
									{" "}
									Experienced
								</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>PostgreSQL</h4>
								<small className="text-light">
									{" "}
									Intermediate
								</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details-icons" />
							<div>
								<h4>Java</h4>
								<small className="text-light"> Basic</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
