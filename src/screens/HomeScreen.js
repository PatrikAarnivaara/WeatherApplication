import React, { useEffect, useState } from 'react';
/* import RNPickerSelect from 'react-native-picker-select'; */
import { Picker } from '@react-native-picker/picker';
import { Button, StyleSheet, Text, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import openWeatherMapApi from '../../api/openWeatherMapApi';
import WeatherNow from '../components/WeatherNow';

const HomeScreen = ({ navigation }) => {
	const [weatherData, setWeatherData] = useState([]);
	const [value, setValue] = useState('');
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
			{/* <LinearGradient colors={['#47BFDF', '#4A91FF', 192.05]} style={styles.background} /> */}
			<Picker
				style={{ width: '100%' }}
				selectedValue={value}
				onValueChange={(itemValue) => handleSelectedCity(itemValue)}
			>
				{isLoading ? (
					<Picker.Item label="Loading..." value={0} />
				) : (
					weatherData.map((item, index) => {
						return <Picker.Item label={item.name} value={item.name} key={index} />;
					})
				)}
			</Picker>
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
