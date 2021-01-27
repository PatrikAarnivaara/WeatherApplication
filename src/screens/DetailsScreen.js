import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const DetailsScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Details Screen</Text>
			<Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
			<Button title="Go back" onPress={() => navigation.goBack()} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default DetailsScreen;
