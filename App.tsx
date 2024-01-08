/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native'

import Activity from './src/components/activity/activity'
import { DarkModeColors, LightModeColors } from './src/themeColors'
import BottomBar from './src/ui/activity/navigation/bottom-bar'
import MenuBar from './src/ui/activity/navigation/menu-bar'

// TODO: Replace the names of the bar components for less confusion
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = isDarkMode ? darkModeStyles : lightModeStyles

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? DarkModeColors.primary : LightModeColors.primary}
        animated={true}
      />
      <MenuBar />
      <Activity />
      <BottomBar />
    </SafeAreaView>
  )
}

const darkModeStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: DarkModeColors.primary,
  },
  text: {
    color: DarkModeColors.primaryFont,
  },
  view: {
    backgroundColor: DarkModeColors.primary,
    margin: 10,
  },
})

const lightModeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: LightModeColors.primary,
  },
  text: {
    color: LightModeColors.primaryFont,
  },
  view: {
    backgroundColor: LightModeColors.primary,
    margin: 10,
  },
})

export default App
