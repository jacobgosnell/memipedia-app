import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		backgroundColor: "tomato",
		paddingTop: "15px",
		paddingBottom: "15px",
	},
});

interface IBottomTabBarProps {
	navigate: (arg: string) => void;
}

export default (props: IBottomTabBarProps) => {
	const Links = ["Feed", "Search", "PostForm", "Account"];
	return (
		<View style={styles.container}>
			{Links.map((Link) => {
				return (
					<TouchableOpacity onPress={() => props.navigate(`${Link}`)}>
						{Link}
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

interface IContainerProps {
	children: any;
	navigate: (arg: string) => void;
}
