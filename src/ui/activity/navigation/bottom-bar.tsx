import React from 'react'
import { SafeAreaView, StyleSheet, useColorScheme, View } from 'react-native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import { DarkModeColors, LightModeColors } from '../../../themeColors'

export default function BottomBar() {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = isDarkMode ? darkModeStyles : lightModeStyles
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.iconContainer}>
        <MaterialCommunityIcon name={'view-dashboard-outline'} style={styles.icon} size={30} />
        <MaterialCommunityIcon name={'timer-outline'} style={styles.icon} size={30} />
        <View style={styles.plusIconContainer}>
          <MaterialCommunityIcon name={'plus'} style={styles.plusIcon} size={50} />
        </View>
        <MaterialCommunityIcon name={'chart-line'} style={styles.icon} size={30} />
        <MaterialCommunityIcon name={'account-outline'} style={styles.icon} size={30} />
      </SafeAreaView>
    </SafeAreaView>
  )
}

const darkModeStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignSelf: 'center',
    backgroundColor: DarkModeColors.primary,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    margin: 10,
  },
  icon: {
    color: DarkModeColors.primaryFont,
    padding: 20,
  },
  plusIcon: {
    color: DarkModeColors.primaryFont,
  },
  plusIconContainer: {
    width: 70,
    height: 70,
    backgroundColor: DarkModeColors.primaryAccent,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40,
    position: 'relative',
  },
})

const lightModeStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignSelf: 'center',
    backgroundColor: LightModeColors.primary,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  icon: {
    color: DarkModeColors.primaryFont,
    fontSize: 20,
    padding: 20,
  },
  plusIcon: {
    color: LightModeColors.primaryFont,
  },
  plusIconContainer: {
    width: 70,
    height: 70,
    backgroundColor: LightModeColors.primaryAccent,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 15,
    position: 'relative',
  },
})
