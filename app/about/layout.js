import Link from "next/link";
import React from "react";

export default function AboutLayout({ children }) {
	return (
		<div>
			<nav>
				<ul className="flex gap-6">
					<li>
						<Link href="/about/mission">mission</Link>
					</li>
					<li>
						<Link href="/about/vision">vision</Link>
					</li>
				</ul>
			</nav>
			<hr className="my-5" />
			{children}
		</div>
	);
}
