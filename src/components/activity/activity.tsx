import React from 'react'
import { SafeAreaView, StyleSheet, Text, useColorScheme } from 'react-native'

import { DarkModeColors, LightModeColors } from '../../themeColors'
import Distance from './distance'

export default function Activity(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = isDarkMode ? darkModeStyles : lightModeStyles

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Activity</Text>
      <Distance />
    </SafeAreaView>
  )
}

const darkModeStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: `rgba(0, 0, 0, 0.15)`, // Overlay with 20% black
    borderRadius: 25,
  },
  heading: {
    color: DarkModeColors.primaryFont,
    fontSize: 20,
    padding: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})

const lightModeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `rgba(0, 0, 0, 0.15)`, // Overlay with 20% black
    borderRadius: 25,
  },
  heading: {
    color: LightModeColors.primaryFont,
    fontSize: 20,
    padding: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})
