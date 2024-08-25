import React from "react"
import { Switch } from "react-native"
import colors from "~/constants/colors"

interface SwitchCustomProps {
  onChange: () => void,
  value: boolean,

}

const SwitchCustom: React.FC<SwitchCustomProps> = ({onChange,value}) => {
  return(
    <Switch
    onChange={onChange}
    value={value}
    trackColor={{false: '#767577', true: colors.greenDark}}
    ios_backgroundColor={'#76757799'}
    thumbColor={value ? colors.success : '#f4f3f4'}
  />
  )
}
export default SwitchCustom