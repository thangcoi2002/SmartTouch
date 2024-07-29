import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Constants from '~/common/Constant';
import TextCustom from '~/components/TextCustom';
import VectorIcon from '~/components/VectorIcon';
import { styles } from './styles';

const RegisterScreen = () => {
    const [data, setData] = useState({
        userName: "",
        password: "",
        rePassword: "",
        fullName: "",
        email: "",
        address: "",
        phoneNumber: "",
    })

    const onChangeText = (name: string, text: string) => {
        setData({ ...data, [name]: text });
    };


    return (
        <KeyboardAvoidingView
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Sign Up</Text>
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

                <Text style={styles.label}>Re-password</Text>
                <TextCustom
                    label={'Re-password'}
                    name={'rePassword'}
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

                <Text style={styles.label}>Full Name</Text>
                <TextCustom
                    label={'Full Name'}
                    name={'fullName'}
                    onChangeText={onChangeText}
                    Icon={
                        <VectorIcon.FontAwesomeVectorIcon
                            name="user"
                            size={20}
                            color={Constants.darkBlue}
                        />
                    }
                />

                <Text style={styles.label}>Email</Text>
                <TextCustom
                    label={'Email'}
                    name={'email'}
                    keyboardType={'email'}
                    onChangeText={onChangeText}
                    Icon={
                        <VectorIcon.MaterialVectorIcon
                            name="alternate-email"
                            size={20}
                            color={Constants.darkBlue}
                        />
                    }
                />

                <Text style={styles.label}>Address</Text>
                <TextCustom
                    label={'Address'}
                    name={'address'}
                    onChangeText={onChangeText}
                    Icon={
                        <VectorIcon.EntypoVectorIcon
                            name="address"
                            size={20}
                            color={Constants.darkBlue}
                        />
                    }
                />

                <Text style={styles.label}>Phone number</Text>
                <TextCustom
                    label={'Phone number'}
                    name={'phoneNumber'}
                    onChangeText={onChangeText}
                    keyboardType={'number'}
                    Icon={
                        <VectorIcon.FontAwesomeVectorIcon
                            name="phone"
                            size={20}
                            color={Constants.darkBlue}
                        />
                    }
                />

                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.txtSubmit}>Sign Up</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;
