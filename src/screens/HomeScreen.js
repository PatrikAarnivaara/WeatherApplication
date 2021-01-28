import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, FlatList, ActivityIndicator,ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import openWeatherMapApi from '../../api/openWeatherMapApi';

const HomeScreen = ({ navigation }) => {
	const [weatherData, setWeatherData] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const getWeatherData = async () => {
			try {
				const response = await openWeatherMapApi();
				setWeatherData(response);
			} catch (error) {
				console.log(error);
			}
		};
		getWeatherData();
	}, [setWeatherData]);

	console.log(weatherData.map((element) => element.coord.lon));

	return (
		<View style={styles.container}>
			<LinearGradient colors={['#47BFDF', '#4A91FF', 192.05]} style={styles.background} />
			<Button
				title={'Go to details'}
				onPress={() => {
					/* 1. Navigate to the Details route with params */
					navigation.navigate('Details', {
						itemId: 86,
						otherParam: 'anything you want here',
					});
				}}
			/>
			<ScrollView>
				{weatherData.map((item) => (
					<View key={item.id}>
						<Text>{item.main.temp}  °C,{item.name}</Text>
					</View>
				))}
			</ScrollView>
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
