import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import openWeatherMapApi from '../../api/openWeatherMapApi';

const HomeScreen = ({ navigation }) => {
	const [weatherData, setWeatherData] = useState([]);
	const [selectedCity, setSelectedCity] = useState('')
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const getWeatherData = async () => {
			try {
				const response = await openWeatherMapApi();
				setWeatherData(response);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		getWeatherData();
	}, [setWeatherData]);

	const presshandler = (id) => {
		console.log(id);
		setSelectedCity(id)
	};

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
			{isLoading ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={weatherData}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<TouchableOpacity onPress={() => presshandler(item.id)}>
							<Text>
								{item.main.temp} °C,{item.name}, id: {item.id}
							</Text>
						</TouchableOpacity>
					)}
				/>
			)}
			<Text>{selectedCity}</Text>
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
