import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Container from "../components/layouts/Container";

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
		<Container navigate={props.navigation.navigate}>
			<Text>Post Form</Text>
		</Container>
	);
};
