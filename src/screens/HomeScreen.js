import React, { useEffect, useState } from 'react';
import RNPickerSelect from "react-native-picker-select";
import { Button, StyleSheet, Text, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import openWeatherMapApi from '../../api/openWeatherMapApi';
import WeatherNow from '../components/WeatherNow';

const HomeScreen = ({ navigation }) => {
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

	const pressHandler = (item) => {
		setWeatherDataDisplay({
			...weatherDataDisplay,
			icon: item.weather[0].icon,
			temp: item.main.temp,
			date: item.dt,
			description: item.weather[0].main,
			wind: item.wind.speed,
			humidity: item.main.humidity,
		});
		setSelectedCityCoord({ ...selectedCityCoord, lat: item.coord.lat, lon: item.coord.lon });
	};

	return (
		<View style={styles.container}>
			<LinearGradient colors={['#47BFDF', '#4A91FF', 192.05]} style={styles.background} />
			<RNPickerSelect
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "JavaScript", value: "JavaScript" },
                     { label: "TypeStript", value: "TypeStript" },
                     { label: "Python", value: "Python" },
                     { label: "Java", value: "Java" },
                     { label: "C++", value: "C++" },
                     { label: "C", value: "C" },
                 ]}
             />
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={weatherData}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item, index }) => (
						<TouchableOpacity onPress={() => pressHandler(item)}>
							<Text>{item.name}</Text>
						</TouchableOpacity>
					)}
				/>
			)}
			<WeatherNow weatherDataDisplay={weatherDataDisplay} />
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
		height: 500,
	},
});

export default HomeScreen;
