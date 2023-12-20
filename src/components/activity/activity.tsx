import React from 'react'
import { Text, useColorScheme } from 'react-native'
import useThemeStyles from '../../hooks/theme'

export default function Activity(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const { backgroundStyle, textStyle, viewStyle } = useThemeStyles(isDarkMode)

  return (
    <>
      <Text style={textStyle}>Activity</Text>
    </>
  )
}
