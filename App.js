import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
/* import openWeatherMapApi from './api/openWeatherMapApi'; */

const Stack = createStackNavigator();

const App = () => {
	/* const [weatherData, setWeatherData] = useState();

	useEffect(() => {
		const getWeatherData = async () => {
			try {
				const response = await openWeatherMapApi.get('q={London}&appid={API key}');
			} catch {
				console.log('Could not GET weather data.');
			}
		};
		getWeatherData();
	}, []); */

	

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
				<Stack.Screen name="Details" component={DetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
