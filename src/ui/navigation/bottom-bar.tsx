import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { SafeAreaView, StyleSheet, TouchableHighlight, useColorScheme } from 'react-native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import { DarkModeColors, LightModeColors } from '../../themeColors'

export default function BottomBar() {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = isDarkMode ? darkModeStyles : lightModeStyles
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.iconContainer}>
        <TouchableHighlight onPress={() => navigation.navigate('Activity')}>
          <MaterialCommunityIcon name={'view-dashboard-outline'} style={styles.icon} size={30} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Past Activities')}>
          <MaterialCommunityIcon name={'timer-outline'} style={styles.icon} size={30} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.plusIconContainer}>
          <MaterialCommunityIcon name={'plus'} style={styles.plusIcon} size={50} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Data')}>
          <MaterialCommunityIcon name={'chart-line'} style={styles.icon} size={30} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Account')}>
          <MaterialCommunityIcon name={'account-outline'} style={styles.icon} size={30} />
        </TouchableHighlight>
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
    color: LightModeColors.primaryFont,
    fontSize: 20,
    padding: 20,
  },
  plusIcon: {
    color: LightModeColors.primary,
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
