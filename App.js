import "react-native-gesture-handler"
import React, { useEffect, useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import CreateBaby from "./src/views/CreateBaby"
import CreateTimer from "./src/views/CreateTimer"
import Dashboard from "./src/views/Dashboard"
import ListBabies from "./src/views/ListBabies"
import ListTimers from "./src/views/ListTimers"
import RecordFeeding from "./src/views/RecordFeeding"
import RecordSleep from "./src/views/RecordSleep"
import RecordDiaper from "./src/views/RecordDiaper"
import Summary from "./src/views/Summary"
import { StateProvider } from "./src/hooks/store.js"
import * as Font from "expo-font"
import { View } from "react-native"

const Stack = createStackNavigator()

export default function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function loadFonts() {
      setLoading(true)
      await Font.loadAsync({
        "m-300": require("./src/assets/fonts/Montserrat-Thin.ttf"),
        "m-400": require("./src/assets/fonts/Montserrat-Light.ttf"),
        "m-500": require("./src/assets/fonts/Montserrat-Regular.ttf"),
        "m-600": require("./src/assets/fonts/Montserrat-Medium.ttf"),
        "m-700": require("./src/assets/fonts/Montserrat-Bold.ttf"),
      })
      setLoading(false)
    }
    loadFonts();
  }, [])

  if (loading) {
    return <View></View>
  }

  return (
    <StateProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "#242424",
            headerBackTitle: " ",
          }}>
          <Stack.Screen
            name='Dashboard'
            component={Dashboard}
            options={{ title: " ", headerStyle: { height: 0 } }}
          />
          <Stack.Screen
            name='RecordFeeding'
            component={RecordFeeding}
            options={{ title: "New Feeding" }}
          />
          <Stack.Screen
            name='CreateTimer'
            component={CreateTimer}
            options={{ title: "New Timer" }}
          />
          <Stack.Screen name='CreateBaby' component={CreateBaby} options={{ title: "New Baby" }} />
          <Stack.Screen
            name='RecordSleep'
            component={RecordSleep}
            options={{ title: "New Sleep" }}
          />
          <Stack.Screen
            name='RecordDiaper'
            component={RecordDiaper}
            options={{ title: "New Diaper" }}
          />
          <Stack.Screen
            name='ListBabies'
            component={ListBabies}
            options={{ title: "Baby Info", headerStyle: { height: 0 } }}
          />
          <Stack.Screen name='ListTimers' component={ListTimers} options={{ title: "Timers" }} />
          <Stack.Screen name='Summary' component={Summary} options={{ title: "Summary" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  )
}
