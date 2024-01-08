import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, useColorScheme, View } from 'react-native'

import { DarkModeColors, LightModeColors } from '../../../themeColors'

export default function TimePeriodPicker(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = isDarkMode ? darkModeStyles : lightModeStyles
  const [timePeriodSelected, setTimePeriodSelected] = useState('Today')

  const timePeriods = ['Today', 'Week', 'Month', 'Year']

  return (
    <View style={styles.container}>
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
    </View>
  )
}

const darkModeStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  selectedText: {
    borderBottomWidth: 2,
    borderBottomColor: DarkModeColors.primaryFont,
    paddingVertical: 5,
    marginBottom: 15,
  },
  timePeriodContainer: {
    justifyContent: 'space-evenly',
    flexGrow: 1,
  },
  text: {
    color: DarkModeColors.primaryFont,
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: 16,
    fontWeight: 'bold',
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
    marginBottom: 15,
  },
  timePeriodContainer: {
    justifyContent: 'space-evenly',
    flexGrow: 1,
  },
  text: {
    color: LightModeColors.primaryFont,
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
})
