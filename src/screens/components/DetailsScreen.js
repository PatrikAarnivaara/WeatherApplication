import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
	console.log(route)
	const { city, temp } = route.params;
	return (
		<View style={styles.container}>
			<Text>{city}</Text>
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
