import React, { useEffect, useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import TouchID from 'react-native-touch-id';
import * as Keychain from 'react-native-keychain';

import Constants from '~/common/Constant';
import TextCustom from '~/components/TextCustom';
import VectorIcon from '~/components/VectorIcon';
import { styles } from './styles';
import { linkImage } from '~/utils/linkImage';
import { User } from '~/redux/types';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '~/redux/action/appActions';
import { updateLocalStorage } from '~/common/LocalStorage';

const LoginScreen = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        userName: "",
        password: "",
    })

    const onChangeText = (name: string, text: string) => {
        setData({ ...data, [name]: text });
    };

    const [biometricsObject, setBiometricsObject] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const biometryType = await Keychain.getSupportedBiometryType();
                if (biometryType) {
                    setBiometricsObject(biometryType);
                } else {
                    console.log('Biometrics not supported or not available.');
                    setBiometricsObject(null);
                }
            } catch (error) {
                console.error('Biometrics check failed:', error);
                setBiometricsObject(null);
            }
        })();
    }, []);

    const handleBiometricAuth = () => {
        const optionalConfigObject = {
            title: 'Authentication Required',
            imageColor: '#e00606',
            imageErrorColor: '#ff0000',
            sensorDescription: 'Touch sensor',
            sensorErrorDescription: 'Failed',
            cancelText: 'Cancel',
            fallbackLabel: 'Show Passcode',
            unifiedErrors: false,
            passcodeFallback: false,
        };
        TouchID.authenticate(`Using ${biometricsObject === "Fingerprint" ? "Touch ID" : "Face ID"}`, optionalConfigObject)
            .then((success: any) => {
                Alert.alert('Authentication Successful', 'You have been successfully authenticated!');
            })
            .catch((error: any) => { });
    };

    const handleSubmit = () => {
        const userData: User = {
            _id: "123",
            fullName: "Tran Ngoc Thang",
            email: "123",
            userName: "123",
            address: "123",
            phoneNumber: "0987654321",
        }

        dispatch(setCurrentUser(userData))
        updateLocalStorage({ key: "appInfo", value: { currentUser: userData } });
    }


    return (
        <View>
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.label}>User Name</Text>
            <TextCustom label={'User Name'}
                name={'userName'}
                onChangeText={onChangeText}
                Icon={
                    <VectorIcon.FontAwesomeVectorIcon
                        name="user"
                        size={20}
                        color={Constants.darkBlue}
                    />
                } />

            <Text style={styles.label}>Password</Text>
            <TextCustom
                label={'Password'}
                name={'password'}
                onChangeText={onChangeText}
                password={true}
                Icon={
                    <VectorIcon.FontAwesomeVectorIcon
                        name="lock"
                        size={20}
                        color={Constants.darkBlue}
                    />
                }
            />

            <TouchableOpacity style={styles.btnSubmit} onPress={handleSubmit}>
                <Text style={styles.txtSubmit}>Sign In</Text>
            </TouchableOpacity>



            {biometricsObject && (
                <TouchableOpacity onPress={handleBiometricAuth} style={styles.btnID}>
                    <Image source={linkImage(biometricsObject === "Fingerprint" ? 'IC_TouchID' : 'IC_FaceID')} style={styles.icTouchId} />
                    <Text style={styles.txtTouchID}>Login with {biometricsObject === "Fingerprint" ? "Touch ID" : "Face ID"}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default LoginScreen;
