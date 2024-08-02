import React from "react"
import { Switch } from "react-native"
import Constants from "~/common/Constant"

interface SwitchCustomProps {
  onChange: () => void,
  value: boolean,

}

const SwitchCustom: React.FC<SwitchCustomProps> = ({onChange,value}) => {
  return(
    <Switch
    onChange={onChange}
    value={value}
    trackColor={{false: '#767577', true: Constants.greenDark}}
    ios_backgroundColor={'#76757799'}
    thumbColor={value ? Constants.success : '#f4f3f4'}
  />
  )
}
export default SwitchCustom