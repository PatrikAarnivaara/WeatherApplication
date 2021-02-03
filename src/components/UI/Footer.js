import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import sun from '../../../assets/sun.png';

const Footer = () => {
	return (
		<View style={styles.container}>
			<Image source={sun} style={{ width: 22, height: 22, marginRight: 10 }} />
			<Text style={styles.footer}>OpenWeatherAPI</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20
	},
	footer: {
		color: '#FFFFFF',
		fontFamily: 'Overpass_400Regular',
		fontSize: 16,
	},
});

export default Footer;
