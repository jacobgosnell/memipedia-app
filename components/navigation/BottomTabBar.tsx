import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import bottomTabStyles from "../../styles/navigation/bottomTabStyles";

interface IBottomTabBarProps {
	navigate: (arg: string) => void;
}

export default (props: IBottomTabBarProps) => {
	const Links = ["Feed", "Search", "PostForm", "Account"];
	return (
		<View style={bottomTabStyles.container}>
			{Links.map((Link) => {
				return (
					<TouchableOpacity onPress={() => props.navigate(`${Link}`)}>
						<Text style={{ color: "white" }}>{Link}</Text>
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
