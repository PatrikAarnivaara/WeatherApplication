import axios from 'axios';

export default axios.create({
	baseURL: 'api.openweathermap.org/data/2.5/weather?',
});
