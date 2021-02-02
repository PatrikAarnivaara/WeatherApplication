import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import openWeatherMapApiOneLocation from '../../api/openWeatherMapApiOneLocation';
import ConvertUTCToLocalDate from '../utilities/ConvertUTCToLocalDate';
import WeatherHours from '../components/Lists/WeatherHours';
import WeatherDays from '../components/Lists/WeatherDays';
import BackButton from '../components/UI/BackButton';
import Footer from '../components/UI/Footer';

const DetailsScreen = ({ route, navigation }) => {
	const { lat, lon, date } = route.params;
	const localDate = ConvertUTCToLocalDate(date);
	const [weatherDataOneLocationDays, setWeatherDataOneLocationDays] = useState([]);
	const [weatherDataOneLocationHours, setWeatherDataOneLocationHours] = useState([]);
	const [isLoadingDays, setLoadingDays] = useState(true);
	const [isLoadingHours, setLoadingHours] = useState(true);

	useEffect(() => {
		const getWeatherDataOneLocation = async () => {
			try {
				const response = await openWeatherMapApiOneLocation({ lat, lon });
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
			<View style={styles.content}>
				<BackButton navigation={navigation} />
				<Text style={styles.heading}>
					Today {localDate.toLocaleString('en-US', { month: 'long' }).substr(0, 3)},
					{localDate.toLocaleString('en-US', { day: 'numeric' })}
				</Text>
				<View style={styles.listHours}>
					{isLoadingHours ? (
						<ActivityIndicator />
					) : (
						<FlatList
							data={weatherDataOneLocationHours}
							horizontal={true}
							keyExtractor={(item) => item.dt.toString()}
							renderItem={({ item }) => (
								<WeatherHours temp={item.temp} icon={item.weather[0].icon} date={item.dt} />
							)}
						/>
					)}
				</View>

				<Text style={styles.heading}>Next Forecast</Text>

				<View style={styles.listDays}>
					{isLoadingDays ? (
						<ActivityIndicator />
					) : (
						<FlatList
							data={weatherDataOneLocationDays}
							keyExtractor={(item) => item.dt.toString()}
							renderItem={({ item }) => (
								<WeatherDays temp={item.temp.day} icon={item.weather[0].icon} date={item.dt} />
							)}
						/>
					)}
				</View>
			</View>
			<Footer />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#47BFDF',
	},
	content: {
		padding: 40,
	},
	heading: {
		color: '#FFFFFF',
		fontSize: 18,
		marginBottom: 10
	},
	listHours: {
		marginTop: 20,
		marginBottom: 50,
	},
	listDays: {
		marginTop: 20,
		height: 240,
	},
});

export default DetailsScreen;
