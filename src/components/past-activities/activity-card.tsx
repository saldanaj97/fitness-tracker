import React from 'react'
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { DarkModeColors, LightModeColors } from '../../themeColors'
import type { PastActivityDataItem } from '../../types/activity/types'

export default function ActivityCard({ pastActivityData }: { pastActivityData: PastActivityDataItem }) {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = isDarkMode ? DarkMode : LightMode

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.activityContainer}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name={pastActivityData.icon} size={45} color={'white'} style={styles.activityIcon} />
        </View>
        <View style={styles.activityText}>
          <Text style={styles.activityTitle}>{pastActivityData.activity}</Text>
          <Text style={styles.durationText}>{pastActivityData.duration} min</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.activityTime}>{pastActivityData.time}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const DarkMode = StyleSheet.create({
  container: {
    backgroundColor: DarkModeColors.primary,
    marginBottom: 20,
  },
  activityContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DarkModeColors.secondaryAccent,
    borderRadius: 10,
  },
  activityIcon: {
    padding: 10,
  },
  activityText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: DarkModeColors.primaryFont,
    flexGrow: 1,
  },
  activityTitle: {
    color: DarkModeColors.primaryFont,
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  durationText: {
    color: DarkModeColors.detailFont,
    fontSize: 12,
  },
  timeContainer: {
    display: 'flex',
  },
  activityTime: {
    color: DarkModeColors.detailFont,
    fontSize: 12,
    paddingVertical: 15,
  },
})

const LightMode = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LightModeColors.primary,
    marginBottom: 20,
  },
  activityContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: LightModeColors.primary,
    padding: 20,
    borderRadius: 10,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LightModeColors.secondaryAccent,
    borderRadius: 10,
  },
  activityIcon: {
    backgroundColor: LightModeColors.primaryFont,
    padding: 10,
  },
  activityText: {
    padding: 10,
    color: LightModeColors.primaryFont,
    flexGrow: 1,
  },
  activityTitle: {
    backgroundColor: 'black',
    borderRadius: 10,
  },
  durationText: {
    color: LightModeColors.detailFont,
    fontSize: 12,
  },
  timeContainer: {
    display: 'flex',
  },
  activityTime: {
    backgroundColor: 'black',
    borderRadius: 10,
  },
})
