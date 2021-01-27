import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<LinearGradient
				// Background Linear Gradient
				colors={['#47BFDF', '#4A91FF', 192.05]}
				style={styles.background}
			/>
			<Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: 700,
	},
});

export default HomeScreen;
