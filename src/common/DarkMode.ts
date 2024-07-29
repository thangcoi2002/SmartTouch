import {useSelector} from 'react-redux';
import {RootState} from '~/redux/reducers/rootReducer';

export const isDarkMode = () => {
  const {darkMode} = useSelector((state: RootState) => state.appReducer);

  return darkMode;
};
