import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import VectorIcon from "./VectorIcon";
import { linkImage } from "~/utils/linkImage";
import Constants from "~/common/Constant";

interface HeaderBackProps {
    title?: string;
}

const HeaderBack: React.FC<HeaderBackProps> = ({ title }) => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <TouchableOpacity onPress={goBack} style={styles.container} activeOpacity={1}>
            <Image source={linkImage('IC_Back')} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
        color: Constants.black
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        padding: 10
    }
});

export default HeaderBack;