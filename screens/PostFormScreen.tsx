import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

// how to interact with Feed Screen properties
interface IFeedScreenProps {
	navigation: {
		// when defining a func in an interface
		// you must map string to arg
		navigate: (arg: string) => void;
	};
}

// props has an any type
export default (props: IFeedScreenProps) => {
	return (
		<View>
			<Text>Post Form Screen</Text>
			<TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
				<Text>Search</Text>
			</TouchableOpacity>
		</View>
	);
};
