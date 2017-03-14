const fakeData = {
	dateTime: Date.now,
	city: 'Anywhere',
	description: 'overcast',
	kind: 'cloudy',
	temperature: 15,
};

export function getCurrentConditions(location) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(fakeData);
		}, 2000);
	});
}
