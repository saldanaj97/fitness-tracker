import React from 'react'
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native'

import ActivityCard from '../../components/past-activities/activity-card'
import DatePicker from '../../components/past-activities/date-picker'
import { DarkModeColors, LightModeColors } from '../../themeColors'
import { PastActivityDataItem } from '../../types/activity/types'

const testData: PastActivityDataItem = {
  activity: 'running',
  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  duration: 50,
  icon: 'run-fast',
}

export default function PastActivities() {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = isDarkMode ? DarkModeStyles : LightModeStyles

  return (
    <SafeAreaView style={styles.container}>
      <DatePicker />
      <View style={styles.pastActivitiesContainer}>
        <Text style={styles.heading}>Past Activities</Text>
        <ActivityCard pastActivityData={testData} />
      </View>
    </SafeAreaView>
  )
}

const DarkModeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkModeColors.primary,
    marginBottom: 20,
  },
  pastActivitiesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: `rgba(5, 9, 83, .95)`, // primary color was in hex -> converted it to rgba for opacity
  },
  heading: {
    color: DarkModeColors.primaryFont,
    fontSize: 20,
    padding: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})

const LightModeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LightModeColors.primary,
    marginBottom: 20,
  },
  pastActivitiesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: LightModeColors.primary,
  },
  heading: {
    color: LightModeColors.primaryFont,
    fontSize: 20,
    padding: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})
