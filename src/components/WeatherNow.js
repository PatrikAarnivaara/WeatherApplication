import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import ConvertUTCToLocalDate from '../utilities/ConvertUTCToLocalDate';

const WeatherNow = ({ weatherDataDisplay }) => {
	const { icon, date, temp, description, wind, humidity } = weatherDataDisplay;
	const localDate = ConvertUTCToLocalDate(date);

	return (
		<View style={styles.container}>
			<View>
				{icon !== '' && (
					<Image
						source={{
							uri: `https://res.cloudinary.com/whatwherewhen/image/upload/v1612170968/weather/${icon}.svg`,
						}}
						style={{ width: 100, height: 100 }}
					></Image>
				)}
			</View>
			<View style={styles.focus}>
				<Text style={styles.text}>
					Today, {localDate.toLocaleString('en-US', { day: 'numeric' })}{' '}
					{localDate.toLocaleString('en-US', { month: 'long' })}
				</Text>
				<Text style={styles.temp}>{Math.floor(temp)} °</Text>
				<Text style={styles.description}>{description}</Text>
				<Text style={styles.text}>Wind | {wind} km/h</Text>
				<Text style={styles.text}>Hum | {humidity} %</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 8,
		alignItems: 'center',
		justifyContent: 'center',
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
		top: '30%',
	},
	text: {
		color: '#FFFFFF',
	},
	temp: {
		color: '#FFFFFF',
		fontSize: 100,
	},
	description: {
		color: '#FFFFFF',
		fontSize: 24,
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
