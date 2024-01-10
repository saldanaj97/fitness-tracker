import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Activity from '../components/activity/activity'
import Account from '../ui/account/account'
import PastActivities from '../ui/past-activities/pastActivities'
import WorkoutData from '../ui/userdata/workout-data'

const Stack = createNativeStackNavigator()

export default function NavigationStackWrapper() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Activity" component={Activity} />
      <Stack.Screen name="Past Activities" component={PastActivities} />
      <Stack.Screen name="Data" component={WorkoutData} />
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  )
}
