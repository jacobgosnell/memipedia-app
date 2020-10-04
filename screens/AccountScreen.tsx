import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

interface IFeedScreenProps {
	navigation: {
		navigate: (arg: string) => void;
	};
}

// props has an any type
export default (props: IFeedScreenProps) => {
	return (
		<View>
			<Text>Account Screen</Text>
			<TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
				<Text>Search</Text>
			</TouchableOpacity>
		</View>
	);
};
