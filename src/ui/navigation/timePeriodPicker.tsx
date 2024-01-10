import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native'

import { DarkModeColors, LightModeColors } from '../../themeColors'

export default function TimePeriodPicker(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = isDarkMode ? darkModeStyles : lightModeStyles
  const [timePeriodSelected, setTimePeriodSelected] = useState('Today')

  const timePeriods = ['Today', 'Week', 'Month', 'Year']

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={timePeriods}
        renderItem={({ item }) => (
          <View style={item === timePeriodSelected ? styles.selectedText : styles.text}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.timePeriodContainer}
      />
    </SafeAreaView>
  )
}

const darkModeStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: DarkModeColors.primary,
  },
  selectedText: {
    borderBottomWidth: 2,
    borderBottomColor: DarkModeColors.primaryFont,
    paddingVertical: 5,
  },
  timePeriodContainer: {
    justifyContent: 'space-evenly',
    flexGrow: 1,
    marginVertical: 20,
  },
  text: {
    color: DarkModeColors.primaryFont,
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
})

const lightModeStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  selectedText: {
    borderBottomWidth: 2,
    borderBottomColor: LightModeColors.primaryFont,
    paddingVertical: 5,
  },
  timePeriodContainer: {
    justifyContent: 'space-evenly',
    flexGrow: 1,
    marginVertical: 20,
  },
  text: {
    color: LightModeColors.primaryFont,
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
})
