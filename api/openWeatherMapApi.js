import axios from 'axios';

const openWeatherMapApi = async (location) => {
	try {
		const response = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
		);
		if (response.status === 200) {
			return response.data;
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
