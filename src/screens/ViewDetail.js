import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ViewDetail = () => {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>You do not have any notes</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 10,
		paddingVertical: 20,
	},
	titleContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	title: {
		fontSize: 20,
	},
});

export default ViewDetail;
