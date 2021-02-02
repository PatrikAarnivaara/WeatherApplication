import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import arrow from '../../../assets/arrow.png';

const BackButton = ({ navigation }) => {
	return (
		<View>
			<TouchableOpacity style={styles.content} onPress={() => navigation.goBack()}>
				<Image source={arrow} style={{ height: 18, width: 12 }} />
				<Text style={styles.backButton}>Back</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	content: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
	backButton: {
		marginLeft: 10,
		color: '#FFFFFF',
		fontFamily: 'Overpass_400Regular',
		fontSize: 20,
	},
});

export default BackButton;
