import React from 'react'
import { StyleSheet, useColorScheme, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'

import TimePeriodPicker from './timePeriodPicker'

export default function Navbar(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = isDarkMode ? darkModeStyles : lightModeStyles

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <MaterialCommunityIcons name="menu" size={25} style={styles.icon} />
        <Octicons name="bell" size={25} style={styles.icon} />
      </View>
      <TimePeriodPicker />
    </View>
  )
}

const darkModeStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  icon: {
    color: 'white',
  },
})

const lightModeStyles = StyleSheet.create({
  container: { display: 'flex', flexDirection: 'column' },
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  icon: {
    color: 'white',
  },
})
