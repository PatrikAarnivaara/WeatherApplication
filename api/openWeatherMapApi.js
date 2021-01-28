import axios from 'axios';

const openWeatherMapApi = async () => {
	try {
		const response = await axios.get(`https://api.openweathermap.org/data/2.5/group?`, {
			params: {
				id: '2673730,2643743,524894,1850147,184742',
				appid: process.env.OPEN_WEATHER_MAP_API_KEY,
				units: 'metric',
			},
		});
		if (response.status === 200) {
			console.log(response.data)
			return response.data.list;
		}
	} catch (ex) {
		return { success: false, error: ex.message };
	}
};

export default openWeatherMapApi;
