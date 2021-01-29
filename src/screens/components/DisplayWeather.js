import React from 'react';
import { Text, View, Image } from 'react-native';

const DisplayWeather = ({ weatherDataDisplay }) => {
	const { icon, date, temp, description, wind, humidity } = weatherDataDisplay;

	return (
		<View>
			{icon !== '' && (
				<Image
					source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
					style={{ width: 100, height: 100 }}
				></Image>
			)}
			<Text>Today, {date} </Text>
			<Text>{temp} °</Text>
			<Text>{description}</Text>
			<Text>Wind | {wind} km/h</Text>
			<Text>Hum | {humidity} %</Text>
		</View>
	);
};

export default DisplayWeather;
