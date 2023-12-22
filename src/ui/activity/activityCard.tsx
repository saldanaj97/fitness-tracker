import React from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import { DarkModeColors, LightModeColors } from '../../themeColors'
import { DistanceDataItem } from '../../types/activity/types'

export default function ActivityCard({ activityData }: { activityData: DistanceDataItem }): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = isDarkMode ? darkModeStyles : lightModeStyles

  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <MaterialCommunityIcon name={activityData.icon} size={45} color={DarkModeColors.primary} />
        <View style={styles.dataContainer}>
          <Text style={styles.heading}>{activityData.title}</Text>
          <Text style={styles.currentValue}>
            {activityData.data} <Text style={styles.heading}>{activityData.unit}</Text>
          </Text>
        </View>
      </View>
      <Text style={styles.percentage}>{Math.ceil((activityData.data / activityData.goal) * 100)} %</Text>
      <ProgressBar percentage={Math.ceil((activityData.data / activityData.goal) * 100)} />
      <View style={styles.goalContainer}>
        <Text style={styles.currentValue}>
          {activityData.goal - activityData.data} <Text style={styles.heading}>{activityData.unit}</Text>
        </Text>
        <Text style={styles.heading}>left to finish your goal</Text>
      </View>
    </View>
  )
}

const ProgressBar = ({ percentage }: { percentage: number }): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'
  const styles = isDarkMode ? darkModeStyles : lightModeStyles

  return (
    <View style={styles.prograssBarBackground}>
      <View style={[styles.progressBar, { width: `${percentage}%` }]} />
    </View>
  )
}

const darkModeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkModeColors.secondary,
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  dataContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  heading: {
    color: DarkModeColors.detailFont,
    fontSize: 15,
  },
  currentValue: {
    color: DarkModeColors.primary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  percentage: {
    color: DarkModeColors.detailFont,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'right',
    marginTop: 25,
  },
  prograssBarBackground: {
    backgroundColor: DarkModeColors.detailFont,
    marginBottom: 25,
    marginTop: 5,
    borderRadius: 10,
  },
  progressBar: {
    backgroundColor: DarkModeColors.primary,
    borderRadius: 10,
    height: 10,
  },
  goalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

const lightModeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LightModeColors.primary,
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  dataContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  heading: {
    color: LightModeColors.detailFont,
    fontSize: 15,
  },
  currentValue: {
    color: LightModeColors.primaryFont,
    fontWeight: 'bold',
    fontSize: 20,
  },
  percentage: {
    color: LightModeColors.detailFont,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'right',
    marginTop: 25,
  },
  prograssBarBackground: {
    backgroundColor: LightModeColors.detailFont,
    borderRadius: 10,
    marginBottom: 25,
    marginTop: 5,
  },
  progressBar: {
    backgroundColor: LightModeColors.primary,
    borderRadius: 10,
    height: 10,
  },
  goalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
