import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Layout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </>
  )
}

export default Layout
