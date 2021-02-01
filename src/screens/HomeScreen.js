import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import openWeatherMapApi from '../../api/openWeatherMapApi';
import WeatherNow from '../components/WeatherNow';
import pin from '../../assets/pin.png';

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
	const [displayWeatherNow, setDisplayWeatherNow] = useState(false);
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
		setDisplayWeatherNow(true);
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
		setSelectedCityCoord({ ...selectedCityCoord, lat: item.coord.lat, lon: item.coord.lon, date: item.dt });
	};

	const handleSelectedCity = (cityNameSelected) => {
		const infoDisplay = weatherData.find((item) => item.name === cityNameSelected);
		displaySelectedCityWeatherInfo(infoDisplay);
	};

	return (
		<View style={styles.container}>
			{/* <View style={styles.dropdown}> */}
			<Image source={pin} style={styles.pin} />
			<DropDownPicker
				items={[
					{ label: 'Stockholm', value: 'Stockholm' },
					{ label: 'London', value: 'London' },
					{ label: 'Moscow', value: 'Moscow' },
					{ label: 'Tokyo', value: 'Tokyo' },
					{ label: 'Nairobi', value: 'Nairobi' },
				]}
				style={{ backgroundColor: 'rgba(255,255,255,0)', borderColor: 'rgba(255,255,255,0)' }}
				arrowColor="#FFFFFF"
				defaultIndex={0}
				dropDownMaxHeight={200}
				itemStyle={{
					justifyContent: 'flex-start',
				}}
				dropDownStyle={{ backgroundColor: 'rgba(255,255,255,0.3)', borderColor: 'rgba(255,255,255,0)' }}
				placeholder={'Select a city'}
				arrowStyle={{ marginRight: 150 }}
				labelStyle={{ color: '#FFFFFF', backgroundColor: 'rgba(255,255,255,0)' }}
				containerStyle={{ height: 40, width: '100%' }}
				onChangeItem={(item) => handleSelectedCity(item.value)}
			/>
			{/* </View> */}
			<View style={styles.weatherNow}>
				{displayWeatherNow && <WeatherNow weatherDataDisplay={weatherDataDisplay} />}
			</View>
			<TouchableOpacity
				style={styles.buttonWrapper}
				onPress={() => navigation.navigate('Details', selectedCityCoord)}
			>
				<Text style={styles.button}>Forecast report</Text>
			</TouchableOpacity>
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
	pin: { width: 20, height: 20, marginTop: 10 },
	dropdown: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 10,
	},
	weatherNow: {
		flex: 2,
	},
	buttonWrapper: {
		borderRadius: 20,
		width: '60%',
		borderWidth: 1,
		borderColor: '#fff',
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 20,
		paddingRight: 20,
		backgroundColor: '#fff',
	},
	button: {
		textAlign: 'center',
		color: '#444E72',
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
