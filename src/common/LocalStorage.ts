import AsyncStorage from '@react-native-async-storage/async-storage';

interface AsyncStorageProps {
  key: string;
  value?: any;
}

export const saveLocalStorage = async ({ key, value }: AsyncStorageProps): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('Data saved:', jsonValue);
  } catch (error: any) {
    throw new Error(`Error saving data to AsyncStorage: ${error.message}`);
  }
};

export const getLocalStorage = async ({ key }: AsyncStorageProps): Promise<any> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) : null;
  } catch (error: any) {
    throw new Error(`Error retrieving data from AsyncStorage: ${error.message}`);
  }
};

export const updateLocalStorage = async ({ key, value }: AsyncStorageProps): Promise<void> => {
  try {
    const existingValue = await getLocalStorage({ key });
    const newValue = { ...existingValue, ...value };
    await saveLocalStorage({ key, value: newValue });
  } catch (error: any) {
    throw new Error(`Error updating data in AsyncStorage: ${error.message}`);
  }
};

export const removeLocalStorage = async ({ key }: AsyncStorageProps): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Data with key ${key} removed`);
  } catch (error: any) {
    throw new Error(`Error removing data from AsyncStorage: ${error.message}`);
  }
};
