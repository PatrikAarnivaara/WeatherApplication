import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const WeatherHours = ({ temp, icon }) => {
	return (
		<View /* style={styles.container} */>
			<Text>{temp}</Text>
			<View>
				{icon !== '' && (
					<Image
						source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
						style={{ width: 30, height: 30 }}
					></Image>
				)}
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
        marginRight: 5
	},
});

export default WeatherHours;
