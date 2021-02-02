import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const BackButton = ({ navigation }) => {
	return (
		<View>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Text style={styles.backButton}>Back</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	backButton: {
		color: '#FFFFFF',
		fontFamily: 'Overpass_400Regular',
		fontSize: 20,
		marginBottom: 40,
	},
});

export default BackButton;
