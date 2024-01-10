import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native'

import { DarkModeColors, LightModeColors } from './src/themeColors'
import BottomBar from './src/ui/navigation/bottom-bar'
import NavigationStackWrapper from './src/wrappers/navigation-wrapper'

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = isDarkMode ? darkModeStyles : lightModeStyles

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={isDarkMode ? DarkModeColors.primary : LightModeColors.primary}
          animated={true}
        />
        <NavigationStackWrapper />
        <BottomBar />
      </SafeAreaView>
    </NavigationContainer>
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
    height: '100%',
  },
})

const lightModeStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: LightModeColors.primary,
  },
  text: {
    color: LightModeColors.primaryFont,
  },
  view: {
    backgroundColor: LightModeColors.primary,
    height: '100%',
  },
})

export default App
