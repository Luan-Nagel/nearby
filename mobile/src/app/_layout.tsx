import { Stack } from "expo-router"
import { colors } from '@/styles/theme'
import { Loanding } from "@/components/loading"

import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold
} from '@expo-google-fonts/rubik'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold
  })

  if (!fontsLoaded) {
    return <Loanding />
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.gray[100],
        }
      }}
    />
  )
}