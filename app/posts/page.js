import { getAllPosts } from "@/app/lib";
import Link from "next/link";
import React from "react";

export default async function Posts() {
	const posts = await getAllPosts();
	return (
		<div>
			{posts.map((item) => {
				return (
					<div
						key={item.id}
						className="p-2 m-2 bg-green-400 border-2 rounded-xl"
					>
						<Link href={`/posts/${item.id}`}>{item.title}</Link>
					</div>
				);
			})}
		</div>
	);
}
