import React from 'react'
import { SafeAreaView, StyleSheet, Text, useColorScheme } from 'react-native'

import { DarkModeColors, LightModeColors } from '../../themeColors'
import Data from './distance'

export default function Activity(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = isDarkMode ? darkModeStyles : lightModeStyles

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.titleContainer}>
        <Text style={styles.heading}>Activity</Text>
        <Text style={styles.subheading}>Show All</Text>
      </SafeAreaView>
      <Data />
    </SafeAreaView>
  )
}

const darkModeStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: `rgba(0, 0, 0, 0.15)`, // Overlay with 20% black
    borderRadius: 25,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  heading: {
    color: DarkModeColors.primaryFont,
    fontSize: 20,
    padding: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  subheading: {
    color: DarkModeColors.detailFont,
    fontSize: 12,
    padding: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})

const lightModeStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: `rgba(0, 0, 0, 0.15)`, // Overlay with 20% black
    borderRadius: 25,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  heading: {
    color: LightModeColors.primaryFont,
    fontSize: 20,
    padding: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  subheading: {
    color: LightModeColors.detailFont,
    fontSize: 14,
    padding: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})
