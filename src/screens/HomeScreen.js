import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import openWeatherMapApi from '../../api/openWeatherMapApi';
import WeatherNow from '../components/WeatherNow';

const HomeScreen = ({ navigation }) => {
	const [weatherData, setWeatherData] = useState([]);
	const [value, setValue] = useState('Stockholm');
	const [selectedCityCoord, setSelectedCityCoord] = useState({ lat: '', lon: '' });
	const [weatherDataDisplay, setWeatherDataDisplay] = useState({
		cityName: '',
		icon: '',
		date: '',
		temp: '',
		description: '',
		wind: '',
		humidity: '',
	});
	const [isLoading, setLoading] = useState(true);
	const defaultOption = weatherData[0];

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

	console.log(weatherData);

	const displaySelectedCityWeatherInfo = (item) => {
		setWeatherDataDisplay({
			...weatherDataDisplay,
			cityName: item.name,
			icon: item.weather[0].icon,
			temp: item.main.temp,
			date: item.dt,
			description: item.weather[0].main,
			wind: item.wind.speed,
			humidity: item.main.humidity,
		});
		setSelectedCityCoord({ ...selectedCityCoord, lat: item.coord.lat, lon: item.coord.lon });
	};

	const handleSelectedCity = (cityNameSelected) => {
		const infoDisplay = weatherData.find((item) => item.name === cityNameSelected);
		displaySelectedCityWeatherInfo(infoDisplay);
	};

	return (
		<View style={styles.container}>
			<DropDownPicker
				items={[
					{ label: 'Stockholm', value: 'Stockholm' },
					{ label: 'London', value: 'London' },
					{ label: 'Moscow', value: 'Moscow' },
					{ label: 'Tokyo', value: 'Tokyo' },
					{ label: 'Nairobi', value: 'Nairobi' },
				]}
				defaultIndex={0}
				containerStyle={{ height: 40, width: '100%', marginTop: 20 }}
				onChangeItem={(item) => handleSelectedCity(item.value)}
			/>
			<WeatherNow weatherDataDisplay={weatherDataDisplay} />
			<Text>{value}</Text>
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
		/* backgroundColor: '#fff', */
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: 700,
	},
});

export default HomeScreen;
