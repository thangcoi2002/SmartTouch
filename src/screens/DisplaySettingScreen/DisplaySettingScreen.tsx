import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateLocalStorage } from "~/common/LocalStorage";
import HeaderBack from "~/components/HeaderBack";
import { toggleDarkMode } from "~/redux/action/appActions";
import { RootState } from "~/redux/reducers/rootReducer";

const DisplaySettingScreen = () => {
    const dispatch = useDispatch()
    const { darkMode } = useSelector((state: RootState) => state.appReducer)

    const handleDarkMode = () => {
        dispatch(toggleDarkMode(!darkMode))
        updateLocalStorage({ key: "appInfo", value: { darkMode: !darkMode } })
    }

    return (
        <View>
            <HeaderBack title="MENU"/>
            <Text>DisplaySettingScreen</Text>
        </View>);
}

export default DisplaySettingScreen;