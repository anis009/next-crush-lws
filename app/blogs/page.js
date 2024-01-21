import Link from "next/link";
import React from "react";

export default function Blogs() {
	const blogs = [
		{
			id: 1,
			title: "Introduction to React Hooks",
			author: "John Doe",
			content:
				"React Hooks provide a way to use state and lifecycle features in functional components. In this blog post, we'll explore the basics of React Hooks and how to use them effectively.",
			date: "2022-03-01",
			tags: ["React", "Hooks", "JavaScript"],
		},
		{
			id: 2,
			title: "Getting Started with Node.js",
			author: "Jane Smith",
			content:
				"Node.js is a powerful JavaScript runtime built on the V8 JavaScript engine. This blog post will guide you through the process of getting started with Node.js, setting up a simple server, and understanding the event-driven architecture.",
			date: "2022-03-10",
			tags: ["Node.js", "JavaScript", "Server"],
		},
		{
			id: 3,
			title: "Mastering CSS Grid Layout",
			author: "Alex Johnson",
			content:
				"CSS Grid Layout is a two-dimensional layout system for the web. This blog post will teach you the fundamentals of CSS Grid, how to create complex layouts, and best practices for responsive design.",
			date: "2022-03-20",
			tags: ["CSS", "Grid Layout", "Web Design"],
		},
		{
			id: 4,
			title: "Deep Dive into GraphQL",
			author: "Emma Davis",
			content:
				"GraphQL is a query language for APIs that provides a more efficient and powerful alternative to the traditional REST architecture. This blog post explores the key concepts of GraphQL and how to implement it in your projects.",
			date: "2022-04-05",
			tags: ["GraphQL", "APIs", "Web Development"],
		},
		{
			id: 5,
			title: "The Art of Responsive Web Design",
			author: "Ryan Taylor",
			content:
				"Responsive web design is crucial for delivering a seamless user experience across various devices. In this blog post, we'll dive into the principles of responsive design and practical tips for building flexible and adaptive layouts.",
			date: "2022-04-15",
			tags: ["Web Design", "Responsive Design", "CSS"],
		},
	];

	return (
		<div>
			<ul>
				{blogs.map((item) => {
					return (
						<li
							key={item.id}
							className="my-5 text-white border-2 bg-slate-600 "
						>
							<Link href={`/blogs/${item.id}`}>{item.title}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
