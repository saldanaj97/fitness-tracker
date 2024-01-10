import React from 'react'
import { SafeAreaView, StyleSheet, useColorScheme, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'

export default function Menubar(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = isDarkMode ? darkModeStyles : lightModeStyles

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navContainer}>
        <MaterialCommunityIcons name="menu" size={25} style={styles.icon} />
        <Octicons name="bell" size={25} style={styles.icon} />
      </View>
    </SafeAreaView>
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
