import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Container from "../components/layouts/Container";

interface IFeedScreenProps {
	navigation: {
		navigate: (arg: string) => void;
	};
}

// props has an any type
export default (props: IFeedScreenProps) => {
	return (
		<Container navigate={props.navigation.navigate}>
			<Text>Account Screen</Text>
		</Container>
	);
};
