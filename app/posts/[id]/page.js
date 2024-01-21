import { getAllPosts, getPost } from "@/app/lib";
import React from "react";

export async function generateMetadata({ params }) {
	const { id } = params;
	const post = await getPost(id);
	return {
		title: post.title,
		description: post.body,
	};
}

export default async function Post({ params }) {
	const { id } = params;
	const post = await getPost(id);
	return (
		<div className="max-w-2xl p-4 mx-auto my-8 rounded-md shadow-md">
			<h1
				className="mb-4 text-3xl font-bold text-black"
				style={{
					color: "red",
				}}
			>
				{post.title}
			</h1>
			<p className="text-gray-700">{post.body}</p>
		</div>
	);
}

export async function generateStaticParams() {
	const posts = await getAllPosts();
	return posts.map((item) => ({
		id: item.id.toString(),
	}));
}
