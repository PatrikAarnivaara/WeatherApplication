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
						source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
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
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 5,
		marginLeft: 5,
		marginRight: 5,
	},
});

export default WeatherDays;
