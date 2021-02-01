import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ConvertUTCToLocalDate from '../../utilities/ConvertUTCToLocalDate';

const WeatherDays = ({ temp, icon, date }) => {
	const localDate = ConvertUTCToLocalDate(date);

	return (
		<View style={styles.container}>
			<Text>{localDate.toLocaleString('en-US', { day: 'numeric' })}</Text>
			<View>
				{icon !== '' && (
					<Image
						source={{
							uri: `https://res.cloudinary.com/whatwherewhen/image/upload/f_png,q_auto/v1612195301/weather/${icon}.svg`,
						}}
						style={{ width: 60, height: 60 }}
					></Image>
				)}
				<Text>{Math.floor(temp)}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		top: '40%',
	},
});

export default WeatherDays;
