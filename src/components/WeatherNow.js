import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const WeatherNow = ({ weatherDataDisplay }) => {
	const { icon, date, temp, description, wind, humidity } = weatherDataDisplay;
	return (
		<View style={styles.container}>
			<View>
				{icon !== '' && (
					<Image
						source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
						style={{ width: 100, height: 100 }}
					></Image>
				)}
			</View>
			<View style={styles.focus}>
				<Text>Today, {date} </Text>
				<Text>{temp} °</Text>
				<Text>{description}</Text>
				<Text>Wind | {wind} km/h</Text>
				<Text>Hum | {humidity} %</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	focus: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#E79599',
		borderRadius: 10,
		minWidth: '70%',
		minHeight: '30%',
		marginBottom: '60%',
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
	},
});

export default WeatherNow;
