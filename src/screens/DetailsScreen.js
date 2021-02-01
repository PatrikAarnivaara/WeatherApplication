import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import openWeatherMapApiOneLocation from '../../api/openWeatherMapApiOneLocation';
import ConvertUTCToLocalDate from '../utilities/ConvertUTCToLocalDate';
import WeatherHours from '../components/Lists/WeatherHours';
import WeatherDays from '../components/Lists/WeatherDays';

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
			<TouchableOpacity styles={styles.backButton} onPress={() => navigation.goBack()}>
				<Text>Back to homepage</Text>
			</TouchableOpacity>
			
			<Text>
				Today, {localDate.toLocaleString('en-US', { day: 'numeric' })}{' '}
				{localDate.toLocaleString('en-US', { month: 'long' })}
			</Text>
			{isLoadingHours ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={weatherDataOneLocationHours}
					numColumns={24}
					keyExtractor={(item) => item.weather[0].id.toString()}
					renderItem={({ item }) => (
						<WeatherHours styles={styles.horizontalList} temp={item.temp} icon={item.weather[0].icon} date={item.dt} />
					)}
				/>
			)}
			{/* </View> */}
			{/* <View styles={styles.verticalList}> */}
			<Text>Next Forecast</Text>
			{isLoadingDays ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={weatherDataOneLocationDays}
					keyExtractor={(item) => item.temp.day.toString()}
					renderItem={({ item }) => (
						<WeatherDays styles={styles.verticalList} temp={item.temp.day} icon={item.weather[0].icon} date={item.dt} />
					)}
				/>
			)}
			{/* </View> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#47BFDF',
	
	},
	backButton: {
		color: '#444E72',
		marginBottom: 40
	},
	horizontalList: {flex: 2, marginTop: 10, top: '10%'},
	verticalList: {flex: 2, marginTop: 10},
});

export default DetailsScreen;
