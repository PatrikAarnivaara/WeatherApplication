import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ConvertUTCToLocalDate from '../../utilities/ConvertUTCToLocalDate';

const WeatherDays = ({ temp, icon, date }) => {
	const localDate = ConvertUTCToLocalDate(date);

	return (
		<View style={styles.content}>
			<View style={styles.forecast}>
				<View>
					<Text style={styles.text}>
						{localDate.toLocaleString('en-US', { month: 'long' }).substr(0, 3)}{' '}
						{localDate.toLocaleString('en-GB', { hour: 'numeric' })}
					</Text>
				</View>
				<View>
					{icon !== '' && (
						<Image
							source={{
								uri: `https://res.cloudinary.com/whatwherewhen/image/upload/f_png,q_auto:best,e_auto_contrast/v1612195301/weather/${icon}.svg`,
							}}
							style={{ width: 60, height: 60 }}
						></Image>
					)}
				</View>
				<View>
					<Text style={styles.text}>{Math.floor(temp)}°</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	content: { alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
	forecast: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},
	text: {
		color: '#FFFFFF',
		fontFamily: 'Overpass_400Regular',
	},
});

export default WeatherDays;
