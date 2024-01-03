function getMaxId(list) {
	let maxId = 1;
	list.forEach(item => {
		if (item.id > maxId) {
			maxId = item.id;
		}
	});

	return maxId + 1;
}

export { getMaxId };
