import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, useColorScheme } from 'react-native'

import { DistanceDataItem } from '../../types/activity/types'
import ActivityCard from '../../ui/activity/activityCard'

type DistanceData = DistanceDataItem[]

const testData: DistanceData = [
  {
    title: 'Distance',
    icon: 'run-fast',
    data: 4.5,
    unit: 'mi',
    goal: 5,
  },
  {
    title: 'Steps',
    icon: 'shoe-print',
    data: 10000,
    unit: 'steps',
    goal: 15000,
  },
]

export default function Distance(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = isDarkMode ? darkModeStyles : lightModeStyles

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={testData} renderItem={({ item }) => <ActivityCard activityData={item} />} />
    </SafeAreaView>
  )
}

const darkModeStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
})

const lightModeStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
})
