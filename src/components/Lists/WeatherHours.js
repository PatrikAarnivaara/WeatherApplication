import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ConvertUTCToLocalDate from '../../utilities/ConvertUTCToLocalDate';

const WeatherHours = ({ temp, icon, date }) => {
	const localDate = ConvertUTCToLocalDate(date);

	return (
		<View>
			<View style={styles.content}>
				<Text style={styles.text}>{Math.floor(temp)}°</Text>
				{icon !== '' && (
					<Image
						source={{
							uri: `https://res.cloudinary.com/whatwherewhen/image/upload/f_png,q_auto:best,e_auto_contrast/v1612195301/weather/${icon}.svg`,
						}}
						style={{ width: 60, height: 60 }}
					></Image>
				)}
				<Text style={styles.text}>{localDate.toLocaleString('en-GB', { hour: 'numeric' })}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	content: {
		alignItems: 'center',
		marginRight: 10,
	},
	text: {
		color: '#FFFFFF',
		fontFamily: 'Overpass_400Regular',
	},
});

export default WeatherHours;
