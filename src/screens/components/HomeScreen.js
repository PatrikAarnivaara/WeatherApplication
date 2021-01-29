import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import openWeatherMapApi from '../../../api/openWeatherMapApi';
import DisplayWeather from './DisplayWeather';

const HomeScreen = ({ navigation }) => {
	const todaysDate = Date();
	const [weatherData, setWeatherData] = useState([]);
	const [selectedCityCoord, setSelectedCityCoord] = useState({ lat: '', lon: '' });
	const [weatherDataDisplay, setWeatherDataDisplay] = useState({
		icon: '',
		date: '',
		temp: '',
		description: '',
		wind: '',
		humidity: '',
	});
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const getWeatherData = async () => {
			try {
				const response = await openWeatherMapApi();
				setWeatherData(response);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		getWeatherData();
	}, [setWeatherData]);

	const presshandler = (item) => {
		setWeatherDataDisplay({
			...weatherDataDisplay,
			icon: item.weather[0].icon,
			temp: item.main.temp,
			date: '29 January',
			description: item.weather[0].main,
			wind: item.wind.speed,
			humidity: item.main.humidity,
		});
		console.log(item.coord);
		setSelectedCityCoord({ ...selectedCityCoord, lat: item.coord.lat, lon: item.coord.lon });
	};

	return (
		<View style={styles.container}>
			<LinearGradient colors={['#47BFDF', '#4A91FF', 192.05]} style={styles.background} />
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={weatherData}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item, index }) => (
						<TouchableOpacity onPress={() => presshandler(item)}>
							<Text>{item.name}</Text>
						</TouchableOpacity>
					)}
				/>
			)}
			<DisplayWeather weatherDataDisplay={weatherDataDisplay} />
			<Button
				title={'Forecast report'}
				onPress={() => navigation.navigate('Details', selectedCityCoord)}
			></Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
	},
});

export default HomeScreen;
