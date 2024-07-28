import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeCurrentUser } from '~/redux/action/appActions';

const HomeScreen = () => {
    const dispatch = useDispatch()

    return (
        <View>
            <TouchableOpacity
                onPress={() => dispatch(removeCurrentUser())}
            >
                <Text>Toggle darkMode</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
