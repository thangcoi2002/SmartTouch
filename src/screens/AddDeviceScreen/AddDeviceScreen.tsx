import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { darkTheme, lightTheme } from '~/common/Constant';
import { RootState } from '~/redux/reducers/rootReducer';

const AddDeviceScreen = () => {
    const { darkMode } = useSelector((state: RootState) => state.appReducer)

    return (
        <View style={{backgroundColor: darkMode ? darkTheme.mainColor : lightTheme.mainColor, flex: 1 }}>
            <Text>AddDeviceScreen</Text>
        </View>
    );
};

export default AddDeviceScreen;
