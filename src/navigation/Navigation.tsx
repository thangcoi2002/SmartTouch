import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '~/redux/reducers/rootReducer';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { getLocalStorage } from '~/common/LocalStorage';
import { setCurrentUser, setLoading, toggleFirstOpen } from '~/redux/action/appActions';
import LoadingScreen from '~/screens/LoadingScreen/LoadingScreen';


export const Navigation: React.FC = () => {
    const dispatch = useDispatch()
    const appReducer = useSelector((state: RootState) => state.appReducer);

    const fetchApp = async () => {
        try {
            const user = await getLocalStorage({ key: 'currentUser' });
            const firstOpen = await getLocalStorage({ key: 'firstOpen' });
            dispatch(setCurrentUser(user))
            dispatch(toggleFirstOpen(firstOpen))
            setTimeout(() => {
                dispatch(setLoading(false))
            }, 2000)
        } catch (error) {
            console.error('Error getting current user:', error);
        }
    }

    useEffect(() => {
        fetchApp()
    }, [])

    return (
        <>
            {appReducer.isLoading ?
                <LoadingScreen /> :
                <NavigationContainer>
                    {appReducer.currentUser ? <MainStack state={appReducer} /> : <AuthStack state={appReducer} />}
                </NavigationContainer>
            }
        </>
    );
};
