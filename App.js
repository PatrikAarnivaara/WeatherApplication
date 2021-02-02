import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import AppLoading from 'expo-app-loading';
import { useFonts, Overpass_400Regular } from '@expo-google-fonts/overpass';

const Stack = createStackNavigator();

const App = () => {
	let [fontsLoaded] = useFonts({
		Overpass_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator headerMode initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
				<Stack.Screen name="Details" component={DetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
