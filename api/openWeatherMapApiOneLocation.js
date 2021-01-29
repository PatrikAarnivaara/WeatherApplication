import axios from 'axios';

const openWeatherMapApiOneLocation = async ({lat, lon}) => {
	console.log(lat, lon)
	try {
		const response = await axios.get('https://api.openweathermap.org/data/2.5/onecall?', {
			params: {
				lon: lon,
				lat: lat,
				appid: process.env.OPEN_WEATHER_MAP_API_KEY,
				units: 'metric',
				exclude: 'minutely',
			},
		});
		if (response.status === 200) {
			return response.data;
		}
	} catch (ex) {
		return { success: false, error: ex.message };
	}
};

export default openWeatherMapApiOneLocation;
