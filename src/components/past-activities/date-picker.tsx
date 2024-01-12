import React, { useState } from 'react'
import { StyleProp, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { DarkModeColors, LightModeColors } from '../../themeColors'

const RenderDates = ({
  styles,
  dates,
}: {
  styles: StyleProp<any>
  dates: { day: string; dateNum: string; month: string; year: string }[]
}) => {
  return (
    <SafeAreaView style={styles.container}>
      {dates.map((date, index) => (
        <View style={styles.dateContainer}>
          <Text key={date.day} style={index === 3 ? styles.selectedDay : styles.day}>
            {date.day}
          </Text>
          <View style={index === 3 ? styles.selectedDateContainer : styles.normalDateContainer}>
            <Text key={date.dateNum} style={index === 3 ? styles.selectedDate : styles.date}>
              {date.dateNum}
            </Text>
          </View>
        </View>
      ))}
    </SafeAreaView>
  )
}

export default function DatePicker() {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = isDarkMode ? DarkModeStyles : LightModeStyles
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(currentDate.toDateString())

  const getSurroundingDates = () => {
    const pastDates = []
    const futureDates = []

    for (let i = 1; i <= 3; i++) {
      // Calculate past dates
      const pastDate = new Date(currentDate)
      pastDate.setDate(currentDate.getDate() - i)
      pastDates.push(pastDate.toDateString())

      // Calculate future dates
      const futureDate = new Date(currentDate)
      futureDate.setDate(currentDate.getDate() + i)
      futureDates.push(futureDate.toDateString())
    }

    // Split the string into object with day and date
    const splitDate = (date: string) => {
      const [day, month, dateNum, year] = date.split(' ')
      const dateMap = { day: day, dateNum: dateNum, month: month, year: year }
      return dateMap
    }

    // Sort the dates and return them as split into a map of day, date, month, year
    const sortedDates = [...pastDates.reverse(), currentDate.toDateString(), ...futureDates]

    return sortedDates.map((date) => splitDate(date))
  }

  const dates = getSurroundingDates()

  return (
    <SafeAreaView>
      <RenderDates dates={dates} styles={styles} />
    </SafeAreaView>
  )
}

const DarkModeStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  normalDateContainer: {
    padding: 10,
  },
  selectedDateContainer: {
    backgroundColor: DarkModeColors.primaryAccent,
    borderRadius: 30,
    padding: 10,
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 5,
    alignItems: 'center',
  },
  day: {
    color: DarkModeColors.primaryFont,
    fontSize: 12,
    paddingVertical: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  selectedDay: {
    color: DarkModeColors.primaryFont,
    fontSize: 12,
    paddingVertical: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  date: {
    color: DarkModeColors.primaryFont,
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  selectedDate: {
    color: DarkModeColors.primaryFont,
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})

const LightModeStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  normalDateContainer: {
    padding: 10,
  },
  selectedDateContainer: {
    backgroundColor: LightModeColors.primaryAccent,
    borderRadius: 30,
    padding: 10,
    elevation: 3,
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 5,
    alignItems: 'center',
  },
  day: {
    color: '#3E3E46',
    fontSize: 12,
    paddingVertical: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  selectedDay: {
    color: LightModeColors.primaryFont,
    fontSize: 12,
    paddingVertical: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  date: {
    color: '#3E3E46',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  selectedDate: {
    color: LightModeColors.secondaryFont,
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})
