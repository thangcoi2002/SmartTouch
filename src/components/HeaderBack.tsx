import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import VectorIcon from "./VectorIcon";
import { linkImage } from "~/utils/linkImage";

interface HeaderBackProps {
    title: string;
}

const HeaderBack: React.FC<HeaderBackProps> = ({ title }) => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack}>
                <Image source={linkImage('IC_Back')} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    }
});

export default HeaderBack;