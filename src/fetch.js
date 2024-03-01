const url = 'https://sportscore1.p.rapidapi.com/teams/4/events?page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_Rapid_API,
		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
