import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
	console.log(route)
	const { city, temp } = route.params;
	return (
		<View style={styles.container}>
			<Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
			<Button title="Go back" onPress={() => navigation.goBack()} />
			<Text>{city}</Text>
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
