import axios from 'axios';

const openWeatherMapApi = async () => {
	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/group?`,
			{
				params: {
					id: "2673722,2643743,524894,1850147,184742",
					appid: process.env.OPEN_WEATHER_MAP_API_KEY,
				},
			}
		);
		console.log(response.data);
		if (response.status === 200) {
			const weather = {
				temperature: Math.round(response.data.list[0].main.temp),
			};
			console.log(weather);
			return response.data.list;
		}
	} catch (ex) {
		return { success: false, error: ex.message };
	}
};

export default openWeatherMapApi;

/* const getWeatherData = async () => {
	try {
		const response = await openWeatherMapApi('London');
		setWeatherData(response.success ? response.data : {});
		console.log(response.data.clouds);
	} catch (error) {
		console.log(error);
	}
}; */
