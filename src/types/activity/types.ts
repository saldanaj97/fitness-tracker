type DistanceDataItem = {
  title: string
  icon: string
  data: number
  unit: string
  goal: number
}

type Activity = 'running' | 'cycling' | 'walking' | 'hiking' | 'swimming' | 'gym' | 'yoga' | 'other'

type PastActivityDataItem = {
  activity: Activity
  time: string
  duration: number
  icon: string
}

export type { Activity, DistanceDataItem, PastActivityDataItem }
