export const getAllPosts = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
		next: {
			revalidate: 10,
		},
	});
	if (!res.ok) {
		throw new Error("Something  Error");
	}

	return res.json();
};
export const getPost = async (id) => {
	if (!id) {
		return null;
	}
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		next: {
			revalidate: 10,
		},
	});
	if (!res.ok) {
		throw new Error("Something Error");
	}

	return res.json();
};
