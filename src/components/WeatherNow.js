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
						style={{ width: 125, height: 125 }}
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
				<View style={styles.infoWrapper}>
					<View style={styles.info}>
						<Image source={windIcon} style={styles.icon} />
						<Text style={styles.text}>Wind</Text>
						<Text style={styles.text}>|</Text>
						<Text style={styles.text}>{wind}km/h</Text>
					</View>
					<View style={styles.info}>
						<Image source={humidityIcon} style={styles.icon} />
						<Text style={styles.text}>Hum</Text>
						<Text style={styles.text}>|</Text>
						<Text style={styles.text}>{humidity}%</Text>
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
	icon: {
		width: 20,
		height: 20,
		marginRight: 10,
	},
	largeIcon: {
		top: '5%',
	},
	focus: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(255,255,255,0.3)',
		borderWidth: 0.5,
		borderColor: '#FFFFFF',
		borderRadius: 10,
		minWidth: '95%',
		minHeight: '45%',
		top: '16%',
		padding: 10,
	},
	text: {
		color: '#FFFFFF',
		fontFamily: 'Overpass_400Regular',
		marginRight: 10,
		fontSize: 16,
	},
	temp: {
		color: '#FFFFFF',
		fontSize: 100,
		fontFamily: 'Overpass_400Regular',
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 1,
		textShadowColor: '#000',
	},
	description: {
		color: '#FFFFFF',
		fontSize: 24,
		marginBottom: 10,
		fontFamily: 'Overpass_400Regular',
	},
	infoWrapper: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	info: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginBottom: 10,
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
	},
});

export default WeatherNow;
