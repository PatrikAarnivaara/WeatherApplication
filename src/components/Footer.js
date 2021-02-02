import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
	return (
		<View>
			<Text style={styles.footer}>OpenWeatherAPI</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	footer: {
		color: '#FFFFFF',
		fontFamily: 'Overpass_400Regular',
        fontSize: 20,
        padding: 20
	},
});

export default Footer;
