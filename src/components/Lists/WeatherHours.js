import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ConvertUTCToLocalDate from '../../utilities/ConvertUTCToLocalDate';

const WeatherHours = ({ temp, icon, date }) => {
	const localDate = ConvertUTCToLocalDate(date);

	return (
		<View style={styles.container}>
			<Text>{Math.floor(temp)}</Text>
			<View>
				{icon !== '' && (
					<Image
						source={{
							uri: `https://res.cloudinary.com/whatwherewhen/image/upload/f_png,q_auto/v1612195301/weather/${icon}.svg`,
						}}
						style={{ width: 60, height: 60 }}
					></Image>
				)}
				<Text>{localDate.toLocaleString('en-GB', { hour: 'numeric' })}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		top: '10%',
		padding: 5,
	},
});

export default WeatherHours;
