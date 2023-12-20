/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, View, useColorScheme} from 'react-native'

import Activity from './src/components/activity/activity'
import useThemeStyles from './src/hooks/theme'

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const {backgroundStyle, viewStyle} = useThemeStyles(isDarkMode)

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={viewStyle} />
        <Activity />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
