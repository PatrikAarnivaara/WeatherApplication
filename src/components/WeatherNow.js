import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import ConvertUTCToLocalDate from '../utilities/ConvertUTCToLocalDate';
import windIcon from '../../assets/wind.png';
import humidityIcon from '../../assets/humidity.png';

const WeatherNow = ({ weatherDataDisplay }) => {
	const { icon, date, temp, description, wind, humidity } = weatherDataDisplay;
	const localDate = ConvertUTCToLocalDate(date);

	return (
		<View style={styles.container}>
			<View style={styles.largeIcon}>
				{icon !== '' && (
					<Image
						source={{
							uri: `https://res.cloudinary.com/whatwherewhen/image/upload/f_png,q_auto:best,e_auto_contrast/v1612195301/weather/${icon}.svg`,
						}}
						style={{ width: 120, height: 120 }}
					></Image>
				)}
			</View>
			<View style={styles.focus}>
				<Text style={styles.text}>
					Today, {localDate.toLocaleString('en-US', { day: 'numeric' })}{' '}
					{localDate.toLocaleString('en-US', { month: 'long' })}
				</Text>
				<Text style={styles.temp}>{Math.floor(temp)}°</Text>
				<Text style={styles.description}>{description}</Text>
				<View style={styles.windHumWrapper}>
					<View style={styles.windHumContent}>
						<View style={styles.windyIcon}>
							<Image source={windIcon} />
						</View>
						<View>
							<Text style={styles.text}>Wind</Text>
						</View>
						<View>
							<Text style={styles.text}>|</Text>
						</View>
						<View>
							<Text style={styles.text}>{Math.floor(wind)} km/h</Text>
						</View>
					</View>
				</View>

				<View style={styles.windHumWrapper}>
					<View style={styles.windHumContent}>
						<View>
							<Image source={humidityIcon} />
						</View>
						<View>
							<Text style={styles.text}>Hum</Text>
						</View>
						<View>
							<Text style={styles.text}>|</Text>
						</View>
						<View>
							<Text style={styles.text}>{humidity}%</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	largeIcon: {
		top: '10%',
	},
	focus: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(255,255,255,0.3)',
		borderWidth: 0.5,
		borderColor: '#FFFFFF',
		borderRadius: 10,
		minWidth: '95%',
		minHeight: '40%',
		top: '25%',
		padding: 10,
	},
	text: {
		color: '#FFFFFF',
		fontFamily: 'Overpass_400Regular',
		fontSize: 16,
	},
	temp: {
		color: '#FFFFFF',
		fontSize: 80,
		fontFamily: 'Overpass_400Regular',
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 1,
		textShadowColor: '#000',
	},
	description: {
		color: '#FFFFFF',
		fontSize: 20,
		marginBottom: 16,
		fontFamily: 'Overpass_400Regular',
	},
	windHumWrapper: {
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	windyIcon: {
		marginRight: 8
	},
	windHumContent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 12,
		width: 180,
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
	},
});

export default WeatherNow;
