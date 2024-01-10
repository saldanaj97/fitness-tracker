import React from 'react'
import { SafeAreaView, StyleSheet, Text, useColorScheme } from 'react-native'

import { DarkModeColors, LightModeColors } from '../../themeColors'
import TimePeriodPicker from '../../ui/navigation/timePeriodPicker'
import Data from './distance'

export default function Activity(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = isDarkMode ? darkModeStyles : lightModeStyles

  return (
    <SafeAreaView>
      <TimePeriodPicker />
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.titleContainer}>
          <Text style={styles.heading}>Activity</Text>
          <Text style={styles.subheading}>Show All</Text>
        </SafeAreaView>
        <Data />
      </SafeAreaView>
    </SafeAreaView>
  )
}

const darkModeStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: `rgba(5, 9, 83, .95)`, // primary color was in hex -> converted it to rgba for opacity
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginVertical: 5,
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
  timePeriodSelectContainer: {},
  container: {
    height: '100%',
    backgroundColor: `rgba(227, 229, 238, .3)`, // primary color was in hex -> converted it to rgba for opacity
    borderRadius: 25,
    marginTop: 10,
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
