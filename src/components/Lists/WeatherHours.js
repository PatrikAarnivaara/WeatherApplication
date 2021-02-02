import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ConvertUTCToLocalDate from '../../utilities/ConvertUTCToLocalDate';

const WeatherHours = ({ temp, icon, date }) => {
	const localDate = ConvertUTCToLocalDate(date);

	return (
		<View>
			<View style={styles.content}>
				<View style={styles.forecast}>
					<View>
						<Text style={styles.text}>{Math.floor(temp)}°</Text>
					</View>
					<View>
						{icon !== '' && (
							<Image
								source={{
									uri: `https://res.cloudinary.com/whatwherewhen/image/upload/f_png,q_auto:best,e_auto_contrast/v1612195301/weather/${icon}.svg`,
								}}
								style={{ width: 40, height: 40 }}
							></Image>
						)}
					</View>
					<View>
						<Text style={styles.text}>{localDate.toLocaleString('en-GB', { hour: 'numeric' })}</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	content: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	forecast: {
		flexDirection: 'column',
		alignItems: 'center',
		marginRight: 16,
	},
	text: {
		color: '#FFFFFF',
		fontFamily: 'Overpass_400Regular',
	},
});

export default WeatherHours;
