import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import openWeatherMapApiOneLocation from '../../api/openWeatherMapApiOneLocation';
import WeatherHours from '../components/Lists/WeatherHours';

const DetailsScreen = ({ route, navigation }) => {
	const { lat, lon } = route.params;
	const [weatherDataOneLocationDays, setWeatherDataOneLocationDays] = useState([]);
	const [weatherDataOneLocationHours, setWeatherDataOneLocationHours] = useState([]);
	const [isLoadingDays, setLoadingDays] = useState(true);
	const [isLoadingHours, setLoadingHours] = useState(true);

	useEffect(() => {
		const getWeatherDataOneLocation = async () => {
			try {
				const response = await openWeatherMapApiOneLocation({ lat, lon });
				console.log(response);
				setWeatherDataOneLocationDays(response.daily.slice(0, 7));
				setWeatherDataOneLocationHours(response.hourly.slice(0, 24));
				setLoadingDays(false);
				setLoadingHours(false);
			} catch (error) {
				console.log(error);
			}
		};
		getWeatherDataOneLocation();
	}, [setWeatherDataOneLocationDays]);

	return (
		<View style={styles.container}>
			<Button title="Go back" onPress={() => navigation.goBack()} />

			{isLoadingHours ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={weatherDataOneLocationHours}
					numColumns={24}
					keyExtractor={(item) => item.weather[0].id.toString()}
					renderItem={({ item }) => <WeatherHours temp={item.temp} icon={item.weather[0].icon} />}
				/>
			)}

			{isLoadingDays ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={weatherDataOneLocationDays}
					keyExtractor={(item) => item.temp.day.toString()}
					renderItem={({ item }) => <Text>{item.temp.day}</Text>}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default DetailsScreen;
