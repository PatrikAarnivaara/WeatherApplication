import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ConvertUTCToLocalDate from '../../utilities/ConvertUTCToLocalDate';

const WeatherHours = ({ temp, icon, date }) => {
	const localDate = ConvertUTCToLocalDate(date);

	return (
		<View /* style={styles.container} */>
			<Text>{Math.floor(temp)}</Text>
			<View>
				{icon !== '' && (
					<Image
						source={{
							uri: `https://res.cloudinary.com/whatwherewhen/image/upload/v1612170968/weather/${icon}.svg`,
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
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 5,
		marginLeft: 5,
		marginRight: 5,
	},
});

export default WeatherHours;
